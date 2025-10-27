import Icon from "../Icon";
import type { ISearchProps } from "./Search.definitions";
import { useSearchMainHook } from "./SearchMainHook";
import styles from "./Search.module.css";

const Search = ({ onChangeCallback, searchValue }: ISearchProps) => {
  const { onSearchChanged } = useSearchMainHook({
    onChangeCallback,
    searchValue,
  });

  return (
    <div className={styles.Search}>
      <button>
        <Icon name="search" size="xlarge" />
      </button>
      <input
        type="text"
        name="search"
        onChange={onSearchChanged}
        value={searchValue}
        placeholder="Search for frontend developer"
      />
    </div>
  );
};

export default Search;
