import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Quiz App</h1>
        <Link href="/yuzu">
            YuzuSoft
        </Link>
      </main>
    </>
  )
}
