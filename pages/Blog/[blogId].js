import Image from "next/image";
import { useRouter } from "next/router";

const blogId = () => {
  const router = useRouter();
  const id = router.query.blogId;

  return (
    <div>
      this is dynamic {id} page
      <Image src={`/hack.jpg`} width={400} height={200} alt="hack" />
    </div>
  );
};

export default blogId;
