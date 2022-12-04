
const Comments = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => {
                    return <h1 className="p-5 bg-red-500 m-2" key={comment.id}>Comment Body: <br/> {comment.body}</h1>
                })
            }
        </div>
    );
};

export default Comments;


// get serverside props
export const getServerSideProps = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_limit=10`
    );
    const data = await res.json();

    return {
        props: {
            comments: data,
        },
    };
}