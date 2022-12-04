import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div>
            <Image src='/error.jpg' width={1440} height={50} alt="error" />
            <Link href='/' className="btn btn-error">
                Back To Home
            </Link>
        </div>
    );
};

export default Error;