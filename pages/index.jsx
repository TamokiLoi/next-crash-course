import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  )
}

/** get api by getStaticProps with fakeDataLocal */
export const getStaticProps = async () => {
  console.log(server);
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}

/** get api by getStaticProps with fakeAPI */
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   }
// }


