import "./global/variables.css";
import "./global/default.css";
import "./global/fonts.css";
import Search from "./components/Search";
import { type IPerson } from "./data/frontenders";
import Person from "./components/Person";
import styles from "./App.module.css";
import { useAppMainHook } from "./AppMainHook";

function App() {
  const { getSearchResult, selected, setSearchValue, setSelected, searchFor } =
    useAppMainHook();

  console.log("selected", selected);

  return (
    <section
      className={`${styles.searchMode} ${
        selected ? styles.personSelected : ""
      }`}
    >
      <Search
        searchValue={searchFor}
        onChangeCallback={(val: string) => setSearchValue(val)}
      />
      <ul className={styles.frontenders}>
        {getSearchResult().map((person: IPerson) => (
          <Person
            key={person.name}
            data={person}
            onClick={(data: IPerson | null) => setSelected(data)}
            state={
              selected?.name === person.name
                ? "show"
                : selected === null
                ? "default"
                : "hide"
            }
          />
        ))}
      </ul>
    </section>
  );
}

export default App;
