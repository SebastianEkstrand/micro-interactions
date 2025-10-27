import type { IPerson } from "../../data/frontenders";

export interface IPersonProps {
  data: IPerson;
  state: "default" | "show" | "hide";
  onClick: (selected: IPerson) => void;
}
