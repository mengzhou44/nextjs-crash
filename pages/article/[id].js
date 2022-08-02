import baseUrl from '../../backend/get-base-url';

const Artcile = ({ article }) => {
  console.log({ article });
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </>
  );
};

export default Artcile;

 

export const getStaticProps = async (context) => {
  const res = await fetch(`${baseUrl}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();

  const paths = articles.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
