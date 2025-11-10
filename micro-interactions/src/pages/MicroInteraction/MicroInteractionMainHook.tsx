import { useEffect, useState } from "react";
import { FRONTENDERS, type IPerson } from "../../data/frontenders";

export const useMicroInteractionMainHook = () => {
  const [searchFor, setSearchFor] = useState("");
  const [selected, setSelected] = useState<IPerson | null>(null);

  const getSearchResult = () => {
    const result: IPerson[] = [];

    if (searchFor === "") {
      return [];
    }

    FRONTENDERS.forEach((person: IPerson) => {
      const text = person.name.toLowerCase() + " " + person.team.toLowerCase();
      if (text.includes(searchFor.toLowerCase())) {
        result.push(person);
      }
    });

    return result;
  };

  const setSearchValue = (val: string) => {
    setSearchFor(val);
    setSelected(null);
  };

  useEffect(() => {
    if (selected === null) {
      //setSearchFor("");
    }
  }, [selected]);

  return { getSearchResult, selected, setSearchValue, setSelected, searchFor };
};
