import Icon from "../Icon";
import type { IPersonProps } from "./Person.definitions";
import styles from "./Person.module.css";

const Person = ({ data, onClick, state }: IPersonProps) => {
  const viewPerson = () => {
    if (state === "show") return;

    onClick(data);
  };

  const goBack = () => {
    console.log(state);
    if (state !== "show") return;

    onClick(null);
  };

  console.log(state);

  return (
    <li className={`${styles.Person} ${styles[state]}`} onClick={viewPerson}>
      <img src={data.image} alt={data.name} />
      <div className={styles.text}>
        <h4>{data.name}</h4>
        <p>{data.team}</p>
      </div>
      <button onClick={viewPerson} className={styles.previewButton}>
        <Icon name="chevronRight" />
      </button>
      <button
        onClick={goBack}
        disabled={state === "show" ? false : true}
        className={styles.backButton}
      >
        <Icon name="chevronLeft" /> Tillbaka till sök
      </button>
    </li>
  );
};

export default Person;
