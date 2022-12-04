import Head from "next/head";
import Link from "next/link";

const index = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            this is blog page
            <Link className="btn" href="/Blog/1">dynamic</Link>
            <Link className="btn" href="/">Home</Link>
        </div>
    );
};

export default index;