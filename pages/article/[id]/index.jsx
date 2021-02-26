import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const ArticleIndex = ({ article }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Meta title={article.title} description={article.excerpt}></Meta>

            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go back</Link>
        </>
    )
}

/** get api by getStaticProps with fakeDataLocal */
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}

/** get api by getStaticPaths with fakeDataLocal */
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();
    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));
    return {
        paths,
        fallback: false
    }
}

/** get api by getStaticProps with fakeAPI */
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

/** get api by getStaticPaths with fakeAPI */
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles = await res.json();
//     const ids = articles.map(article => article.id);
//     const paths = ids.map(id => ({ params: { id: id.toString() } }));
//     return {
//         paths,
//         fallback: false
//     }
// }

/** get api by getServerSideProps with fakeAPI */
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

export default ArticleIndex
