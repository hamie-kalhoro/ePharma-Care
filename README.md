# ePharma-Care

A comprehensive healthcare management platform combining AI-powered medical guidance with pharmaceutical care solutions.

## 🏗️ Project Structure

This monorepo contains multiple healthcare-focused applications and components:

### Core Applications

#### 🏥 Mediguide App (`/mediguide-app`)
The main healthcare management application built with **Next.js 16**, **React 19**, and **TypeScript**.

**Key Features:**
- AI-powered medical assistant
- Patient dashboard and management
- Admin control panel
- Modern responsive UI with Tailwind CSS
- PostgreSQL database integration

**Tech Stack:**
- Next.js 16.2.6
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- PostgreSQL
- ESLint 9

**Getting Started:**
```bash
cd mediguide-app
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

#### 🎨 Stitch Mediguide Pro AI Healthcare (`/stitch_mediguide_pro_ai_healthcare`)
A collection of specialized healthcare dashboard components and interfaces:

- **Admin Dashboard** - Administrative control panel
- **Fresh Patient Dashboard** - Patient management interface
- **Fresh AI Assistant** - AI-powered medical guidance system
- **Mediguide Pro Dynamic Landing Page** - Marketing and landing pages
- **Aetheris Clinical** - Clinical management module
- **Vital Precision** - Vital signs monitoring and analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hamie-kalhoro/ePharma-Care.git
cd ePharma-Care
```

2. Install dependencies for the main application:
```bash
cd mediguide-app
npm install
```

3. Set up your PostgreSQL database and configure connection string in `.env.local`:
```
DATABASE_URL=postgresql://username:password@localhost:5432/mediguide
```

4. Start the development server:
```bash
npm run dev
```

## 📋 Available Scripts

In the `mediguide-app` directory, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Development

### Project Architecture

```
ePharma-Care/
├── mediguide-app/                    # Main Next.js application
│   ├── src/
│   │   ├── app/                      # App router pages
│   │   │   ├── ai-assistant/         # AI assistant page
│   │   │   ├── admin/                # Admin dashboard
│   │   │   ├── patient/              # Patient portal
│   │   │   └── page.tsx              # Home page
│   │   ├── components/               # Reusable UI components
│   │   │   └── ui/                   # Base UI components
│   │   └── ...
│   ├── public/                       # Static assets
│   └── docs/                         # Documentation
└── stitch_mediguide_pro_ai_healthcare/  # Specialized modules
    ├── admin_dashboard/
    ├── fresh_patient_dashboard/
    ├── fresh_ai_assistant/
    └── ...
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ by the ePharma-Care development team.

## 🤝 Support

For support, please open an issue in the GitHub repository or contact our development team.

---

**Note:** This is a private healthcare application. Ensure proper security measures are in place when deploying to production environments.