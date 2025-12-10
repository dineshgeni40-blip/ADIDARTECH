from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

def send_email(to_email: str, subject: str, html_content: str):
    """Send email using Gmail SMTP"""
    try:
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = subject
        
        # Add HTML content
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        logger.info(f"Email sent successfully to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

@api_router.post("/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    """Handle contact form submission and send emails"""
    try:
        # Save to database
        contact_dict = form_data.model_dump()
        contact_dict['submitted_at'] = datetime.now(timezone.utc).isoformat()
        contact_dict['id'] = str(uuid.uuid4())
        await db.contact_submissions.insert_one(contact_dict)
        
        contact_email = os.environ.get('CONTACT_EMAIL', 'contact@adidartechnologies.com')
        
        # Send notification email to company
        company_subject = f"New Contact Form Submission from {form_data.name}"
        company_html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> {form_data.name}</p>
                        <p><strong>Email:</strong> {form_data.email}</p>
                        <p><strong>Company:</strong> {form_data.company if form_data.company else 'Not provided'}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0891b2;">
                            {form_data.message}
                        </p>
                    </div>
                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        Submitted at: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')} UTC
                    </p>
                </div>
            </body>
        </html>
        """
        send_email(contact_email, company_subject, company_html)
        
        # Send confirmation email to customer
        customer_subject = "Thank you for contacting Adidar Technologies"
        customer_html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #0891b2; margin-bottom: 10px;">Adidar Technologies</h1>
                        <p style="color: #666; font-style: italic;">Intelligence Amplified</p>
                    </div>
                    
                    <h2 style="color: #0891b2;">Thank you for reaching out!</h2>
                    
                    <p>Dear {form_data.name},</p>
                    
                    <p>We have received your message and appreciate you contacting Adidar Technologies. Our team will review your inquiry and get back to you within 24 hours.</p>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #0891b2;">Your Message:</h3>
                        <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0891b2;">
                            {form_data.message}
                        </p>
                    </div>
                    
                    <p>In the meantime, feel free to explore our AI solutions and services on our website.</p>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                        <p style="margin: 5px 0;"><strong>Contact Us:</strong></p>
                        <p style="margin: 5px 0;">Email: {contact_email}</p>
                        <p style="margin: 5px 0;">Phone: +91-7305280054</p>
                        <p style="margin: 5px 0;">Locations: India • Singapore • UK • USA</p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
                        © 2025 Adidar Technologies. Specialized AI solutions for the future.
                    </p>
                </div>
            </body>
        </html>
        """
        send_email(form_data.email, customer_subject, customer_html)
        
        return {
            "success": True,
            "message": "Thank you for contacting us! We'll get back to you within 24 hours."
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()