import Card from "../Card";
import styles from "./Cards.module.css";

function Cards({ id, email, name, onDelete, filtereds, setFiltereds }) {
  return (
    <div className={styles.cards}>
      <Card
        id={id}
        email={email}
        name={name}
        onDelete={onDelete}
        filtereds={filtereds}
        setFiltereds={setFiltereds}
      />
    </div>
  );
}

export default Cards;
