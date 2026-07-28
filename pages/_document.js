import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Rubik:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a2540" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="1C-Web.Uz" />
        <meta property="og:url" content="https://1c-web.uz/" />
        <meta property="og:title" content="1C-Web.Uz — Облачная 1С для бизнеса" />
        <meta
          property="og:description"
          content="Перенесём вашу 1С в защищённое облако за 1 день. Работайте в 3 раза быстрее из любой точки мира."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
