import Head from "next/head";
import Navbar from "./component/Navbar";

const Contact = () => {
  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <Navbar />
      <h1 className="pages" style={{ color: "blue" }}>
        Contact-Page
      </h1>
    </>
  );
};

export default Contact;
