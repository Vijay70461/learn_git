import { useRouter } from "next/router";
export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  const paths = data.posts.map((e) => {
    return {
      params: { dynamic: e.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.dynamic;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const dynamic = ({ data }) => {
  const router = useRouter();
  const { id, title, body } = data;

  const handleClick = () => {
    router.push("/services");
  };
  return (
    <>
      <button onClick={handleClick} className="dysebtn">
        Go to Services-Page
      </button>
      <div className="dynamic">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default dynamic;
