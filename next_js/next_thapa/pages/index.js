import Head from "next/head";
import Navbar from "./component/Navbar";
const index = () => {
  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <Navbar />
    </>
  );
};

export default index;
