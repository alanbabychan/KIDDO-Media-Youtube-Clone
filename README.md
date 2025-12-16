🎬 KIDDO Media - YouTube Clone

A fully functional YouTube Clone built using React.js, integrated with Rapid API's YouTube Data API v3 to fetch real-time video content, channels, and search results — replicating the core features and UI of the original YouTube platform with premium subscription features.

🚀 Features

✅ **User Authentication** – Complete login/signup system with form validation
✅ **Subscription Plans** – Normal (Free), Basic (₹999/month), Premium (₹2999/month) with crown emoji
✅ **Payment Gateway** – Dummy payment processing for subscription upgrades
✅ **Ad Management** – Smart ad banner system (hidden for premium users)
✅ **Responsive UI** – Clean, modern design with responsive layouts using Material UI
✅ **Dynamic Video Feed** – Fetches and displays the latest videos using Rapid API's YouTube API
✅ **Search Functionality** – Search for videos, channels, and categories instantly
✅ **Channel Page** – Displays channel details, subscriber count, and related videos
✅ **Video Detail Page** – Watch videos with full playback, description, comments, and recommended videos
✅ **Sidebar Navigation** – Filter videos by categories like Music, Gaming, News, etc.
✅ **React Router Integration** – Smooth navigation between pages without reload

🛠️ Tech Stack

**Frontend:** React.js, React Router, Material UI
**API Integration:** Rapid API (YouTube v3 API)
**State Management:** React Hooks & Context API
**Authentication:** Local Storage based user management
**Payment:** Dummy payment gateway simulation
**Validation:** Email format validation, 10-digit mobile number validation
**Deployment:** Vercel / Netlify

💳 Subscription Features

**Normal Plan (Free):**
- Limited videos
- Ads included
- Basic quality
- Offline downloads

**Basic Plan (₹999/month):**
- HD videos
- Reduced ads
- Download videos
- Offline downloads
- Shows "👑 Basic" badge

**Premium Plan (₹2999/month):**
- 4K videos
- No ads
- Premium content
- Offline downloads
- Shows "👑 Premium" badge

🔐 Authentication & Validation

- **Email Validation:** Must contain @ symbol (e.g., test@test.com)
- **Mobile Validation:** Exactly 10 digits required
- **Form Validation:** Real-time error messages
- **User Management:** Local storage based authentication

⚡ How It Works

1. **Video Content:** Fetches data from YouTube Data API via Rapid API
2. **User System:** Complete registration and login with validation
3. **Subscriptions:** Users can upgrade to Basic/Premium plans
4. **Payment Flow:** Dummy payment gateway for subscription processing
5. **Ad System:** Conditional ad display based on subscription status
6. **UI Updates:** Dynamic navbar showing subscription status with crown emoji

💡 Highlights

- **Complete subscription monetization system**
- **Realistic YouTube-like interface with premium features**
- **Smart ad management system**
- **Form validation with proper error handling**
- **Crown emoji status indicators for premium users**
- **Fully responsive across devices**
- **API-driven content updates**
- **Perfect for portfolio showcasing full-stack concepts**