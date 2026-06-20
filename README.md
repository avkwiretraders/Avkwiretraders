# AVK Wire Traders

AVK Wire Traders is a Next.js website for a fencing products and installation business based in Rajapalayam, Tamil Nadu. The site includes service details, fencing product categories, project images, service areas, contact links, and a WhatsApp quote request form.

## Tech Stack

- Next.js
- React
- CSS
- Font Awesome
- Vercel-ready deployment

## Project Structure

```text
app/
  globals.css      Global styles
  layout.jsx       App metadata, fonts, and shared layout
  page.jsx         Main website page
public/
  images/          Website image assets
package.json       Project scripts and dependencies
next.config.mjs    Next.js configuration
```

## Getting Started

Install dependencies:

```bash
npm install
```

On Windows PowerShell, if `npm install` is blocked by execution policy, use:

```powershell
npm.cmd install
```

Run the development server:

```bash
npm run dev
```

PowerShell alternative:

```powershell
npm.cmd run dev
```

Open the site:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

## Deploying to Vercel

1. Import this GitHub repository in Vercel.
2. Vercel should automatically detect it as a Next.js project.
3. Use the default build command:

```bash
npm run build
```

4. Deploy.

## Contact Features

- Call button links directly to the business phone number.
- WhatsApp button opens a direct chat.
- Quote form creates a pre-filled WhatsApp message with customer details.
