import Head from "next/head";
import Navbar from "./component/Navbar";

const Aboutus = () => {
  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <Navbar />
      <h1 className="pages"> Aboutus-Page</h1>

      <style jsx>{`
        h1 {
          color: pink;
        }
      `}</style>
    </>
  );
};

export default Aboutus;
