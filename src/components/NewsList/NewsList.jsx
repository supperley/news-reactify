import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'banner', 1);

export default NewsListWithSkeleton;
