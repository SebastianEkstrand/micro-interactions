import styles from "./App.module.css";
import { useMicroInteractionMainHook } from "./MicroInteractionMainHook";
import type { IPerson } from "../../data/frontenders";
import Person from "../../components/Person";
import Search from "../../components/Search";

function MicroInteraction() {
  const { getSearchResult, selected, setSearchValue, setSelected, searchFor } =
    useMicroInteractionMainHook();

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

export default MicroInteraction;
