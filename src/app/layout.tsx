import { Tenor_Sans } from "next/font/google";
import "./globals.css";
import GotoWhatspp from "@/components/common/GotoWhatspp";
import GoToTop from "@/components/common/GoToTop";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/Footer";
import GlobalProvider from "@/components/core/GlobalProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor-sans",
});

export const metadata = {
  title: "Rapid | Gadgets & Accessories",
  description:
    "Rapid is a gadgets and accessories shop. Order your favorite gadgets now!",
  openGraph: {
    title: "Rapid | Gadgets & Accessories",
    description:
      "Rapid is a gadgets and accessories shop. Order your favorite gadgets now!",
    url: "https://rapidsmarterp.com/",
    siteName: "Rapid",
    images: [
      {
        url: "https://rapidsmarterp.com/wp-content/uploads/2024/11/rapid-logo-768x269.webp",
        width: 800,
        height: 600,
        alt: "Rapid Logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const message = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${tenor.variable} antialiased`}
        // suppressHydrationWarning
      >
        <NextTopLoader
          color="var(--brand-color)"
          crawlSpeed={5}
          showSpinner={false}
          speed={5}
        />
        <Suspense fallback={null}>
          <NextIntlClientProvider messages={message}>
            <GlobalProvider>{children}</GlobalProvider>
            <GotoWhatspp />
            <GoToTop />
            <Footer />
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
