import { useRouter } from "next/router";

const PostDetails = ({ post }) => {

    const router = useRouter();
    const handleBack = () => {
        router.push("/posts");
    }



  return (
    <div className="card m-5 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn">{post.id}</button>
          <button className="btn btn-secondary" onClick={handleBack}>Back To Posts</button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts?.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
