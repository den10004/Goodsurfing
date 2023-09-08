import Card from "../Card";
import styles from "./Cards.module.css";

function Cards({ id, email, name, onDelete, city, filtereds, setFiltereds }) {
  return (
    <div className={styles.cards}>
      <Card
        id={id}
        email={email}
        name={name}
        city={city}
        onDelete={onDelete}
        filtereds={filtereds}
        setFiltereds={setFiltereds}
      />
    </div>
  );
}

export default Cards;
