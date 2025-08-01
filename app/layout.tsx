import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { FACEBOOK_PIXEL_SCRIPT, FACEBOOK_PIXEL_NOSCRIPT_URL } from "@/lib/facebook-pixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Magnum Consultoria Financeira | Potencialize os resultados do seu negócio",
  description:
    "Soluções estratégicas de consultoria financeira para impulsionar seu crescimento e maximizar seus lucros.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: FACEBOOK_PIXEL_SCRIPT,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={FACEBOOK_PIXEL_NOSCRIPT_URL}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
