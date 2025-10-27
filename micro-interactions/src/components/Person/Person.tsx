import Icon from "../Icon";
import type { IPersonProps } from "./Person.definitions";
import styles from "./Person.module.css";

const Person = ({ data, onClick, state }: IPersonProps) => {
  return (
    <li className={`${styles.Person} ${styles[state]}`}>
      <img src={data.image} alt={data.name} />
      <div className={styles.text}>
        <h4>{data.name}</h4>
        <p>{data.name}</p>
      </div>
      <button onClick={() => onClick(data)}>
        <Icon name="chevronRight" />
      </button>
    </li>
  );
};

export default Person;
