# ATX Utility Connect

Professional utility and household account setup assistance for new homeowners in Austin, Texas.

## About

ATX Utility Connect helps new homeowners handle the administrative burden of setting up utilities and household accounts after closing. We coordinate electricity, water & trash, internet, and HOA registration so homeowners can focus on settling into their new home.

**Important:** We provide administrative support only. We do NOT handle payments or financial transactions. Clients pay all providers directly.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (static export)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd atx-utility-connect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
atx-utility-connect/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── ForAgents.tsx
│   │   ├── Trust.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Configuration

### Update Form URLs

Before deploying, update the Google Form placeholder URLs in:

- `app/components/Hero.tsx`
- `app/components/HowItWorks.tsx`
- `app/components/ForAgents.tsx`
- `app/components/Trust.tsx`

Replace `https://forms.google.com/placeholder` with your actual Google Form URLs.

### Update Contact Information

Update contact details in `app/components/Footer.tsx`:

- Email address
- Instagram handle
- Any other contact information

## Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This generates a static export in the `out/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Static Hosts

Since this is a static export, you can deploy the `out/` directory to any static hosting service:

- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#1e3a5f',  // Navy blue
    dark: '#152a45',
    light: '#2d5278',
  },
  accent: {
    DEFAULT: '#e87722',  // Orange
    light: '#ff9d4d',
  },
}
```

### Content

All content is in the component files under `app/components/`. Edit these files to update:

- Service descriptions
- Process steps
- Benefits
- Contact information

## SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "ATX Utility Connect | Austin Home Utility Setup Service",
  description: "Professional utility and household account setup assistance for new homeowners in Austin, Texas.",
};
```

## License

Private project - All rights reserved

## Support

For questions or issues, contact: hello@atxutilityconnect.com
