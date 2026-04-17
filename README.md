<div align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

<br /><br />

# 🤝 KinKeeper

**Your personal shelf of meaningful connections.**

KinKeeper is a modern relationship management web app that helps you stay genuinely connected with the people who matter most — track interactions, set contact goals, and get a clear picture of your social life in one beautiful dashboard.

[**Live Demo →**](https://asgmt-7.vercel.app/) &nbsp;·&nbsp; [**View Source →**](https://github.com/sayedrkhalid-dev/asgmt-7)

</div>

## ✨ Features

### 🏠 Dashboard
- Responsive friend cards with relationship status badges
- "Days since last contact" indicator for every connection
- At-a-glance overview of your entire social network

### 👤 Friend Profiles
- Dynamic profile page per friend with personal info & stats
- Contact goal tracking and recent interaction history

### ⚡ Quick Check-In
Log interactions in one tap:
| Type | Icon |
|------|------|
| Call | 📞 |
| Text | 💬 |
| Video Call | 🎥 |

### 🕒 Timeline Feed
- Chronological activity feed across all friends
- Organized by most recent actions

### 📊 Analytics
- Interactive charts (calls, texts, video calls) powered by **Recharts**

### 🌙 Dark Mode
- Full dark theme support out of the box

### 🔔 Toast Notifications
- Real-time feedback on every interaction log via **React Hot Toast**

### 💀 Loading Skeletons
- Smooth loading states using Next.js `loading.jsx` per route segment

### 📱 Responsive Design
- Mobile-first UI that works beautifully on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | React framework & routing |
| [React](https://react.dev/) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Flowbite React](https://flowbite-react.com/) | latest | UI component library |
| [Recharts](https://recharts.org/) | latest | Data visualizations |
| [React Hot Toast](https://react-hot-toast.com/) | latest | Toast notifications |

---

## 📂 Project Structure

```
asgmt-7/
├── app/
│   ├── page.js                  # Dashboard (home)
│   ├── layout.js                # Root layout
│   ├── loading.js               # Root loading skeleton
│   ├── not-found.jsx            # 404 page
│   ├── [id]/
│   │   ├── page.js              # Friend profile page
│   │   └── loading.js           # Profile loading skeleton
│   ├── timeline/                # Timeline feed route
│   └── stats/                   # Analytics route
│
├── components/
│   ├── Navbar/                  # Navigation bar
│   ├── Footer/                  # Footer
│   ├── Friend/                  # Friend card components
│   └── FriendDetail/            # Profile detail components
│
├── context/
│   └── FriendContext.js         # Global state (React Context)
│
├── public/
│   └── data/
│       ├── friends.json         # Static friend data
│       └── interactions.json    # Static interaction data
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/sayedrkhalid-dev/asgmt-7.git
cd asgmt-7
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Then edit `.env.local` (see [Environment Variables](#-environment-variables) below).

**4. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | Base URL of the application | ✅ Yes |

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## ☁️ Deployment

This project is deployed on **[Vercel](https://vercel.com/)** — the recommended platform for Next.js apps.

### Deploy in 3 steps

1. Push your code to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Add your environment variables and click **Deploy**

> Vercel automatically handles build caching, CDN distribution, and preview deployments for every pull request.

---

## 🗺️ Roadmap

- [ ] User authentication (NextAuth / Clerk)
- [ ] Real database integration (e.g., Supabase / PlanetScale)
- [ ] Reminder & notification system
- [ ] Search and filter friends
- [ ] Friend categories & tags
- [ ] Notes & shared memories per friend
- [ ] AI-powered reconnection suggestions

---

## 👨‍💻 Author

**Sayed R. Khalid**

- GitHub: [@sayedrkhalid-dev](https://github.com/sayedrkhalid-dev)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

If you found this project useful, please consider giving it a ⭐ on [GitHub](https://github.com/sayedrkhalid-dev/asgmt-7) — it helps a lot!

</div>

