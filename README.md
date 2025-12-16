# 🎬 KIDDO Media – YouTube Clone

A fully functional YouTube Clone built using React.js, integrated with Rapid API’s YouTube Data API v3 to fetch real-time video content, channels, and search results.  
It replicates the core features and UI of the original YouTube platform with premium subscription functionality.

---

## 🚀 Features

- ✅ User Authentication – Complete login/signup system with form validation  
- ✅ Subscription Plans – Normal (Free), Basic (₹999/month), Premium (₹2999/month) with 👑 crown badges  
- ✅ Payment Gateway – Dummy payment processing for subscription upgrades  
- ✅ Ad Management – Smart ad banner system (hidden for premium users)  
- ✅ Responsive UI – Clean, modern design using Material UI  
- ✅ Dynamic Video Feed – Fetches latest videos via Rapid API (YouTube v3)  
- ✅ Search Functionality – Search videos, channels & categories instantly  
- ✅ Channel Page – Channel info, subscribers & related videos  
- ✅ Video Detail Page – Video playback with description, comments & recommendations  
- ✅ Sidebar Navigation – Category-based filtering (Music, Gaming, News, etc.)  
- ✅ React Router Integration – Smooth navigation without page reloads  

---

## 🛠️ Tech Stack

- Frontend: React.js, React Router, Material UI  
- API Integration: Rapid API (YouTube Data API v3)  
- State Management: React Hooks & Context API  
- Authentication: LocalStorage-based user management  
- Payments: Dummy payment gateway simulation  
- Validation: Email & 10-digit mobile number validation  
- Deployment: Vercel / Netlify  

---

## 💳 Subscription Plans

| Plan | Price | Features |
|------|------|----------|
| Normal | Free | Limited videos, Ads included, Basic quality, Offline downloads |
| Basic | ₹999 / month | HD videos, Reduced ads, Video downloads, Offline access, 👑 Basic badge |
| Premium | ₹2999 / month | 4K videos, No ads, Premium content, Offline downloads, 👑 Premium badge |

---

## 🔐 Authentication & Validation

- Email Validation: Must include `@` (e.g., test@test.com)  
- Mobile Validation: Exactly 10 digits required  
- Form Validation: Real-time error handling  
- User Management: Stored securely in localStorage  

---

## ⚡ How It Works

1. Fetches real-time data from YouTube Data API via Rapid API  
2. User signup & login with validation  
3. Subscription upgrades to Basic / Premium  
4. Dummy payment simulation  
5. Ads shown or hidden based on subscription  
6. Dynamic navbar updates with 👑 crown badge  

---

## 🧩 Installation

### 🖥️ Run Locally

```bash
git clone https://github.com/alanbabychan/KIDDO-Media-Youtube-Clone.git
cd KIDDO-Media-Youtube-Clone
npm install
npm start
