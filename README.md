# Academic Portfolio

A modern, responsive academic personal website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional academic portfolio design
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Responsive**: Fully responsive design for all devices
- **Fast**: Optimized build with Vite
- **SEO Friendly**: Meta tags and semantic HTML structure

## 📁 Project Structure

```
academic-portfolio/
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Publications.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/          # Data files
│   │   └── portfolioData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Customization

### 1. Update Personal Information

Edit `src/data/portfolioData.ts` to add your information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "PhD Researcher",
  institution: "Your University",
  // ... more fields
};
```

### 2. Add Publications

Add your publications in `src/data/portfolioData.ts`:

```typescript
export const publications = [
  {
    title: "Your Paper Title",
    authors: "Your Name, et al.",
    venue: "Conference Name",
    year: "2024",
    // ... more fields
  },
];
```

### 3. Add Profile Photo

1. Add your photo to the `public/` folder as `profile-photo.jpg`
2. The placeholder will automatically be replaced

### 4. Update Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/academic-portfolio.git
   git push -u origin main
   ```

2. **Update `vite.config.ts`**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/academic-portfolio/', // Your repository name
   })
   ```

3. **Update `package.json`**
   ```json
   {
     "homepage": "https://yourusername.github.io/academic-portfolio"
   }
   ```

4. **Deploy**
   ```bash
   npm install
   npm run deploy
   ```

Your site will be live at `https://yourusername.github.io/academic-portfolio`

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)