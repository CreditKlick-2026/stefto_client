const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Multer Setup for Resume Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Ensure uploads directory exists
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'placeholder@gmail.com',
        pass: process.env.EMAIL_PASS || 'placeholderpassword'
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Stefto Backend API is running...');
});

// Contact Form Route
app.post('/api/contact', (req, res) => {
    const { name, email, message, phone, type } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'info@stefto.com',
        subject: `New Contact Form Submission: ${type || 'General Inquiry'}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone || 'N/A'}
            Type: ${type || 'General'}
            Message: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Failed to send message.' });
        }
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    });
});

// Careers Form Route
app.post('/api/apply', upload.single('resume'), (req, res) => {
    const { name, email, phone, position } = req.body;
    const resume = req.file;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'info@stefto.com',
        subject: `New Job Application: ${position}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Position: ${position}
        `,
        attachments: [
            {
                filename: resume.originalname,
                path: resume.path
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Failed to submit application.' });
        }
        res.status(200).json({ success: true, message: 'Successfully Uploaded' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
