import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Yasmin Teles" />
        <meta name="description" content="The challenge was designed and built by Yasmin Teles." />
        <meta name="image" content={`https://${process.env.VERCEL_URL}/images/cover.png`} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}

export default Document
