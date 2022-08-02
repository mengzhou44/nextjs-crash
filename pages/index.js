import Head from 'next/head';
import Link from 'next/link';
import baseUrl from '../backend/get-base-url';

const Home = ({ articles }) => {
  console.log({ articles });
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="key" content="nextjs, SEO, SSG"></meta>
      </Head>
      <div>
        <h1>Articles</h1>
        {articles.map((item) => (
          <Link key={item.id} href={`/article/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
