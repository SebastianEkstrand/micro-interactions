import Icon from "../Icon";
import type { ISearchProps } from "./Search.definitions";
import { useSearchMainHook } from "./SearchMainHook";
import styles from "./Search.module.css";

const Search = ({ onChangeCallback, searchValue }: ISearchProps) => {
  const { onSearchChanged, showInput, onClickShow, inputRef } =
    useSearchMainHook({
      onChangeCallback,
      searchValue,
    });

  return (
    <label
      htmlFor="search-input"
      className={`${styles.Search} ${showInput ? styles.showInput : ""}`}
    >
      <button onClick={onClickShow} disabled={!!showInput}>
        <Icon name="search" size="auto" />
      </button>
      <input
        type="text"
        id="search-input"
        name="search"
        ref={inputRef}
        onChange={onSearchChanged}
        value={searchValue}
        placeholder="Search for frontend developer"
      />
    </label>
  );
};

export default Search;
