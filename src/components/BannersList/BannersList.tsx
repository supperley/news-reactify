import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 6, 'row');

export default BannersListWithSkeleton;
