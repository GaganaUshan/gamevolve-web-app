# GameVolve - Gaming News Platform

A modern gaming news web application built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your computer:
- Download from: https://nodejs.org/
- Recommended version: 18.x or higher

### Installation Steps

1. **Open VS Code** and open this project folder

2. **Open Terminal in VS Code**
   - Click `Terminal` → `New Terminal` (or press `` Ctrl+` ``)

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Create Assets Folder**
   - Create a folder named `assets` in the root directory
   - Place your logo image there: `assets/2615e696de35815201986e1a4a71e06ac4fada10.png`

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   - The terminal will show a URL like: `http://localhost:5173`
   - Click on it or copy-paste it into your browser

## 📁 Project Structure

```
gamevolve-news/
├── assets/                  # Logo and images
├── components/              # React components
│   ├── Navbar.tsx
│   ├── Home.tsx
│   ├── News.tsx
│   ├── ArticleView.tsx
│   ├── Admin.tsx
│   ├── AdminLogin.tsx
│   ├── AboutUs.tsx
│   └── figma/
│       └── ImageWithFallback.tsx
├── styles/
│   └── globals.css         # Global styles and animations
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎮 Features

- **Home Page** - Hero section with animated gaming doodles
- **News Section** - Browse all gaming news articles
- **Article Reader** - Read full articles with images
- **Admin Panel** - Secure login to publish new articles
  - Username: `Gagana`
  - Password: `Yushan2002`
- **About Us** - Information about GameVolve

## 🛠️ Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors
The brand colors are defined in the components:
- Primary: `#1e161e`
- Secondary: `#ba5c93`
- Accent: `#e18cc5`
- Dark: `#472b3f`
- Medium: `#80496c`

### Admin Credentials
To change admin credentials, edit `/components/AdminLogin.tsx`:
```typescript
if (username === 'YourUsername' && password === 'YourPassword') {
```

## 📝 Adding Articles

1. Navigate to the Admin section
2. Login with credentials
3. Fill in:
   - Headline
   - Image URL (use Unsplash or your own hosted images)
   - Excerpt (short description)
   - Full article content
4. Click "Publish Article"

**Note:** Articles are currently stored in browser memory and will be lost on refresh. For persistent storage, consider implementing a backend with a database.

## 🌐 Deployment

To deploy this app:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain your production files

3. Deploy to platforms like:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 💡 Tips

- Press `Ctrl+C` in terminal to stop the development server
- Changes auto-refresh in the browser (hot reload)
- Check browser console (F12) for any errors

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Kill the process and restart
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
npm cache clean --force
npm install
```

**Logo not showing?**
- Make sure the logo file is in `/assets/` folder
- Check the filename matches: `2615e696de35815201986e1a4a71e06ac4fada10.png`

## 📄 License

MIT License - Feel free to use this project however you like!
