import "./globals.css";

const siteUrl = "https://www.avkwiretraders.in";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: "AVK Wire Traders | Trusted Fencing Contractor in Rajapalayam",

  description:
    "Premium chain link, weld mesh, barbed wire fencing and installation services in Rajapalayam and South Tamil Nadu.",

  keywords: [
    "fencing in Rajapalayam",
    "wire fencing Rajapalayam",
    "AVK Wire Traders",
    "chain link fencing",
    "barbed wire fencing",
    "fencing services Tamil Nadu",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "AVK Wire Traders - Fencing in Rajapalayam",

    description:
      "AVK Wire Traders provides high-quality fencing solutions in Rajapalayam. Trusted for durable and affordable wire fencing services.",

    type: "website",

    locale: "en_IN",

    siteName: "AVK Wire Traders",
  },

  twitter: {
    card: "summary",

    title: "AVK Wire Traders - Fencing in Rajapalayam",

    description:
      "AVK Wire Traders provides high-quality fencing solutions in Rajapalayam. Trusted for durable and affordable wire fencing services.",
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "144x144",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/></head>
      <body>{children}</body>
    </html>
  );
}