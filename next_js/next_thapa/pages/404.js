import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/404.module.css";
import Head from "next/head";

const ErrorPage = () => {
  const router = useRouter();

  // you can use iternal clickEvent to redirect page

  const handleClick = () => {
    router.push("/services");
  };

  //  you can use this to redirect home page within 5 sec

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <div className={styles.error}>
        <h1>404-Page Not Found</h1>

        <Link href="/">Back to Home</Link>
        <br />
        {/* you can use inline clickEvent to redirect page */}
        <button onClick={() => router.push("/contact")}>
          Go to Contact-Page
        </button>
        <button onClick={handleClick}>Go to Services-Page</button>
      </div>
    </>
  );
};

export default ErrorPage;
