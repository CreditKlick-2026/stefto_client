# Stefto - Redesigned AI-Powered Digital Debt Recovery Website

This project is a complete redesign of the Stefto brand website, featuring a modern, AI-centric aesthetic with a robust React.js frontend and Node.js/Express.js backend.

## Tech Stack

- **Frontend**: React.js (Vite), Tailwind CSS, Framer Motion, Axios, React Router, Lucide React, Recharts.
- **Backend**: Node.js, Express.js, Nodemailer (Email Integration), Multer (Resume Uploads).
- **Design**: Premium Blue-Red theme (#003366, #FF0000), fully mobile responsive, 8-10 sections per page.

## Project Structure

```bash
/client         # React Frontend (Vite)
  /src
    /components # Reusable UI components
    /pages      # Page components (Home, About, Services, etc.)
/server         # Node.js Backend
```

## Setup Instructions

### 1. Prerequisites
- Node.js (v16+)
- npm

### 2. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `server` folder (one is provided as a template).
   - Set `EMAIL_USER` and `EMAIL_PASS` (for Gmail, use an App Password).
4. Start the server:
   ```bash
   node server.js
   ```
   *The server will run on http://localhost:5000*

### 3. Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The website will be available at http://localhost:5173 (or as shown in terminal)*

## Features

- **Home Page**: Hero section, AI-Enhanced Services, Industry Table, Sliding Testimonials, Stats Overview.
- **About Page**: Company Legacy since 2007, Growth Timeline (SVG Graph), Leadership Team Cards.
- **Services Page**: Detailed deep-dives into Debt Collection, Analytics, and Digital Solutions (CreditKlick).
- **Insights Page**: Blog listing with search/filter, Featured Posts, and Whitepaper downloads.
- **Careers Page**: Life at Stefto, Open Positions Job Table, Application Form with Resume Upload support.
- **Contact Page**: 5 Office Locations with Map Links, Contact Form, and Demo Booking.
- **FAQ Page**: Interactive Accordions for General, Tech, and Legal queries.

## Design Highlights
- **Wavy Dividers**: Custom SVG separators for hero sections.
- **Infinite Sliders**: For testimonials and partner logos.
- **Micro-animations**: Powered by Framer Motion for a premium feel.
- **Full Responsiveness**: Optimized for mobile, tablet, and desktop views.

---

**Note**: Stefto is a trade name of Incredible Management Services (India) Private Limited. All content reflects the Stefto brand identity.
