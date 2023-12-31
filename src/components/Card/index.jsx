import { useRef, useContext } from "react";
import { Context } from "../../context";
import styles from "./Card.module.css";
import logoAcc from "../../assets/logoAcc.svg";
import deleteButton from "../../assets/delete.png";

function Card({ id, name, email, city, onDelete }) {
  const getEmailData = useRef();
  const getName = useRef();
  const getCity = useRef();
  const { setEmailDataForm } = useContext(Context);

  const deleteCard = (name) => {
    onDelete(id, name);
  };

  const emailData = () => {
    const x = {
      name: getEmailData.current.textContent,
      email: getName.current.textContent,
      city: getCity.current.textContent,
      idx: Math.floor(Math.random() * 98) + 2,
    };
    setEmailDataForm(x);
  };

  return (
    <div className={styles.card}>
      <div onClick={emailData} className={styles.cardWrapper}>
        <img src={logoAcc} alt="photo" />
        <div className={styles.cardContent}>
          <h4>Участник</h4>
          <h5 ref={getName}>{name}</h5>
          <p ref={getEmailData}>{email}</p>
          <h4 ref={getCity}>{city}</h4>
        </div>
      </div>

      <span>
        {onDelete && (
          <button
            className={styles.cardButton}
            onClick={() => deleteCard(getName.current.textContent)}
          >
            <img src={deleteButton} alt="delete" />
          </button>
        )}
      </span>
    </div>
  );
}

export default Card;
