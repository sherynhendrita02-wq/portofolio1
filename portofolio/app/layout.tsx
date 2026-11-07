import "./globals.css"

export const metadata = {
  title: "Sheryn Febrylia Hendrita — Creative Developer & UI/UX Designer",
  description: "Personal portfolio of Sheryn Febrylia Hendrita, Creative Developer & UI/UX Designer based in Jakarta, Indonesia.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400..700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08080a] text-white font-sans antialiased selection:bg-[#e50914] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
