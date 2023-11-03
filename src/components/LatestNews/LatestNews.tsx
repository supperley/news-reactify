import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../api/apiNews';
import { NewsApiResponse } from '../../interfaces';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
