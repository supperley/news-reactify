import styles from './styles.module.css';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';
import Slider from '../Slider/Slider';

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories, {});

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) => changeFilter('category', category)}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
