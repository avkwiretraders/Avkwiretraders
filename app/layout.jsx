import "./globals.css";

export const metadata = {
  title: "AVK Wire Trades - Fencing in Rajapalayam",
  description:
    "AVK Wire Trades provides high-quality fencing solutions in Rajapalayam. Trusted for durable and affordable wire fencing services.",
  keywords: [
    "fencing in Rajapalayam",
    "wire fencing Rajapalayam",
    "AVK Wire Trades",
    "chain link fencing",
    "barbed wire fencing",
    "fencing services Tamil Nadu",
  ],
  openGraph: {
    title: "AVK Wire Trades - Fencing in Rajapalayam",
    description:
      "AVK Wire Trades provides high-quality fencing solutions in Rajapalayam. Trusted for durable and affordable wire fencing services.",
    type: "website",
    locale: "en_IN",
    siteName: "AVK Wire Trades",
  },
  twitter: {
    card: "summary",
    title: "AVK Wire Trades - Fencing in Rajapalayam",
    description:
      "AVK Wire Trades provides high-quality fencing solutions in Rajapalayam. Trusted for durable and affordable wire fencing services.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
