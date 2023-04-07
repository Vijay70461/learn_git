import Head from "next/head";
import Navbar from "./component/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Services = ({ data }) => {
  return (
    <>
      <Head>
        <title> My Next App</title>
      </Head>
      <Navbar />
      <h1 className="pages" style={{ color: "green" }}>
        Services-Page
      </h1>
      {data.posts.slice(0, 10).map((e) => {
        return (
          <div key={e.id} className="services">
            <Link href={`/dynamicrouting/${e.id}`}>
              <h3>{e.id}</h3>
              <h2>{e.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Services;
