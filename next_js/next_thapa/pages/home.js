import Image from "next/image";
import Navbar from "./component/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className="pages1" style={{ color: "red" }}>
          Home-Page
        </h1>
        {/* if you use link like this you need to create file inside next.config.js---- and write   images: {
             domains: ["images.pexels.com"], and re run your app
              }, */}
        <Image
          src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width="350"
          height="350"
          alt="image"
        ></Image>
        <br />
        {/* if you use public folder for get image you need to write path on src */}
        <Image src="/img.jpg" width="350" height="350" alt="image"></Image>
      </div>
    </>
  );
};

export default Home;
