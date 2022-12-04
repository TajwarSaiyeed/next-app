import Post from "../../components/Post";

const Posts = ({posts}) => {
    return (
        <div>
            This is post page
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;



export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: { posts: data },
    };
}