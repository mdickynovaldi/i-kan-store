# 🏪 I-KAN Store

I-KAN Store is a modern e-commerce platform built with cutting-edge technology to provide an optimal shopping experience. ✨

## 🚀 Tech Stack

### 🎯 Core Framework & Libraries

- **Next.js v15** - React framework with powerful SSR, SSG, and routing features
- **React v19** - JavaScript library for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Reusable and customizable UI components

### 🗄️ Database & ORM

- **PostgreSQL** - Powerful relational database
- **Prisma** - Modern ORM for Node.js and TypeScript

### 🔒 Authentication & Validation

- **NextAuth** - Authentication solution for Next.js
- **Zod** - Schema validation for TypeScript
- **React Hook Form** - Form handling for React

### 💰 Payment Gateway

- **PayPal API** - PayPal payment integration
- **Stripe API** - Stripe payment integration

### 📤 File Upload & Visualization

- **Uploadthing** - Modern file upload solution
- **Recharts** - Data visualization library

### 🛠️ Development Tools

- **ESLint** - Linting tool for JavaScript/TypeScript
- **Jest** - Testing framework for JavaScript

## ⚙️ Setup & Installation

1. 📥 Clone repository

```bash
git clone <repository-url>
cd i-kan-store
```

2. 📦 Install dependencies

```bash
npm install
```

3. 🔑 Setup environment variables

```bash
cp .env.example .env
```

Required environment variables:

- 🔗 DATABASE_URL
- 🔐 NEXTAUTH_SECRET
- 💳 PAYPAL_CLIENT_ID
- 💰 STRIPE_SECRET_KEY
- 📁 UPLOADTHING_SECRET
- 🆔 UPLOADTHING_APP_ID

4. 🗃️ Setup database and migrations

```bash
npx prisma generate
npx prisma db push
```

5. 🚀 Run development server

```bash
npm run dev
```

## 📁 Project Structure

```
i-kan-store/
├── app/                    # Next.js app router
│   ├── (root)/            # Root layout and pages
│   └── api/               # API routes
├── components/
│   ├── shared/            # Reusable components
│   └── ui/                # Base UI components
├── lib/                   # Utility functions and helpers
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # Type definitions
```

## ✨ Key Features

- 🛍️ Product Catalog
- 🔐 User Authentication
- 🛒 Shopping Cart
- 💳 Online Payments
- 📦 Order Tracking
- 📊 Admin Dashboard
- 📱 Responsive Design
- 🔍 Search & Filter
- ⭐ Ratings & Reviews
- 🌙 Dark/Light Mode
- 🌍 Multi-language Support
- 📨 Email Notifications
- 🏷️ Promos & Discounts
- 💬 Live Chat Support

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

## 🌟 Deployment

This project can be deployed to various platforms such as Vercel, Railway, or any other platform that supports Next.js.

## 📜 License

MIT License - See [LICENSE](LICENSE) for more details.

## 🤝 Contributing

Contributions are always welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

---

Made with 💝 using Next.js and other modern technologies.

🌟 Happy Shopping! 🛍️
