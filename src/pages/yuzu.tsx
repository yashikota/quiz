import Head from "next/head";
import Link from "next/link";

const Yuzu = () => {
    return (
        <>
        <Head>
            <title>YuzuSoft</title>
            <meta name="description" content="YuzuSoft" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h1>YuzuSoft</h1>
            <Link href="/">
                戻る
            </Link>
        </main>
        </>
    );
    };

export default Yuzu;
