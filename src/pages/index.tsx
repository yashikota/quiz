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
                <button className="m-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    <Link href="/yuzu">
                        むりりん・こぶいち クイズ
                    </Link>
                </button>
            </main>
        </>
    )
}
