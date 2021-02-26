import articleStyles from '../styles/Articles.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
    return (
        <>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={articleStyles.card}>
                    <h3>{article.title} &rarr;</h3>
                </a>
            </Link>
        </>
    )
}

export default ArticleItem
