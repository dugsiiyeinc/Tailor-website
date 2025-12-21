## 🧵 Tailor Shop – Custom Clothing Order Platform

A modern full-stack tailor shop application that allows users to browse custom clothing, place measurement-based orders, and track order status in real time. Built with a clean UI, responsive design, and secure backend powered by Supabase.

## ✨ Features
👤 Authentication

User sign up & login

Secure session handling

Orders tied to authenticated users only

## 🛍️ Products & Shop

Browse tailor products (Suits, Jackets, Pants)

Category & type filtering

Search and sorting

Responsive grid layout (mobile & desktop)

## 📏 Custom Measurements

Step-by-step measurement forms

Conditional steps based on product type

Client-side validation (no empty inputs)

## 💳 Payments

Cash payment options (Zaad, Sahal, EVC)

Card payment form (UI-level validation)

Prevent duplicate pending orders

## 📦 Orders

Place orders with automatic completion dates

Prevent re-ordering when an order is Pending

View only your own orders

Mobile card layout & desktop table layout

## 🌗 UI & UX

Dark / Light mode support

Custom scrollbar (theme-aware)

Responsive modal with internal scroll

Toast notifications for feedback

## 📬 Contact Page

Contact form with validation

Email sending via Web3Forms

Auto-reset form after submission

## 🛠️ Tech Stack
Frontend

React

React Router

Tailwind CSS

Lucide Icons

React Hot Toast

Backend & Services

Supabase

Authentication

Database (Orders)

Row Level Security (RLS)

Web3Forms (Contact emails)

## 🗂️ Database Design (Orders)
orders (
  id uuid primary key,
  user_id uuid references auth.users(id),
  name text,
  price numeric,
  quantity integer,
  status text,
  completion_date timestamp,
  created_at timestamp
)


Each order belongs to one user

Users can only read their own orders

Duplicate pending orders are blocked

## 🔐 Security

Supabase Row Level Security enabled

Users can only:

Insert their own orders

Read their own orders

No access to other users’ data

## 📱 Responsive Design

Mobile-first layout

Cards on mobile, tables on desktop

Sticky filters & top bar

Scrollable modals with custom scrollbar

## 🚀 Installation & Setup
git clone [https://github.com/your-username/tailor-shop](https://github.com/dugsiiyeinc/Tailor-website).git
cd tailor-shop
npm install
npm run dev

Environment Variables

Create a .env file:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_EMAIL_APIKEY=your_web3forms_key

## 🧪 Future Improvements

Admin dashboard

Order status updates (Completed / Cancelled)

Payment gateway integration

Email notifications

Image upload for user profiles

## 👨‍💻 Author

Jamal Abdiwahab Mohamed
Web Developer
📍 Somalia

Built with passion, clean code, and attention to UX ✨

## ⭐ Show Your Support

If you like this project, give it a ⭐ and feel free to fork or contribute!
