import ArticleItem from '../components/ArticleItem';
import articleStyles from '../styles/Articles.module.css';

const ArticleList = ({ articles }) => {
    return (
        <>
            <div className={articleStyles.grid}>
                {articles.map(article => (
                    <ArticleItem article={article} key={article.id} />
                ))}
            </div>
        </>
    )
}

export default ArticleList
