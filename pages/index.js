import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello Next JS</h1>
      <Banner />
      <div>
        {posts.map((post) => (
          <div className="card my-5 bg-base-100 shadow-xl mx-5">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center flex gap-2 mx-auto justify-center">
        <Link className="btn btn-primary" href={`/posts`}>
          See More
        </Link>

        <Link className="btn btn-primary" href={`/Blog`}>
          Blog
        </Link>
        <Link className="btn btn-primary" href={`/comments`}>
          Components
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();

  return {
    props: { posts: data },
  };
};
