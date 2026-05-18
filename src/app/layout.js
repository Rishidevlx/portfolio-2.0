import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Pritam Debnath - Portfolio 2.0",
  description: "Pritam Debnath - Software Developer specializing in blending logic with creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CSS Stylesheets */}
        {/* <link rel="stylesheet" href="/assets/css/cursor.style.css" /> */}
        <link rel="stylesheet" href="/assets/css/root.style.css" />
        <link rel="stylesheet" href="/assets/css/reuseable.style.css" />
        <link rel="stylesheet" href="/assets/css/cloud.style.css" />
        <link rel="stylesheet" href="/assets/css/your.style.css" />
        <link rel="stylesheet" href="/assets/css/star.style.css" />
        <link rel="stylesheet" href="/assets/css/home-and-ground.style.css" />
        <link rel="stylesheet" href="/assets/css/my.style.css" />
        <link rel="stylesheet" href="/assets/css/tree.style.css" />
        <link rel="stylesheet" href="/assets/css/ex.style.css" />
        <link rel="stylesheet" href="/assets/css/skill.style.css" />
        <link rel="stylesheet" href="/assets/css/projects.style.css" />
        <link rel="stylesheet" href="/assets/css/about-me.style.css" />
        <link rel="stylesheet" href="/assets/css/recent-activity.style.css" />
        <link rel="stylesheet" href="/assets/css/testimonials.style.css" />
        <link rel="stylesheet" href="/assets/css/footer.style.css" />
        <link rel="stylesheet" href="/assets/css/cute-avatar.style.css" />
        <link rel="stylesheet" href="/assets/css/moveable-box.style.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gabriela&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Non-module scripts first */}
        <Script src="/scripts/reuseable.script.js" strategy="afterInteractive" />
        <Script src="/scripts/fonts.script.js" strategy="afterInteractive" />

        {/* Module scripts - all use import/export so need type=module */}
        {/* <Script src="/scripts/cursor.script.js" strategy="afterInteractive" type="module" /> */}
        <Script src="/scripts/cloud.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/star.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/home-and-ground.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/tree.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/your.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/my.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/ex.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/skill.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/projects.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/about-me.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/recent-activity.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/footer.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/cute-avatar.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/moveable-box.script.js" strategy="afterInteractive" type="module" />
        <Script src="/scripts/svg.script.js" strategy="afterInteractive" type="module" />
        {/* social-icons.script.js is commented out in original HTML — keeping it disabled */}
      </body>
    </html>
  );
}
