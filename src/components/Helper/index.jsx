import Avatar from "../../assets/avatar.png";
import styles from "./Helper.module.css";

function Helper() {
  return (
    <div className={styles.helper}>
      <img src={Avatar} alt="avatar" />
      <h4>Кристина</h4>
      <p>Ваш персональный помощник по работе с системой</p>
      <button>Написать</button>
      <h5>E-mail support@goodsurfing.org</h5>
    </div>
  );
}

export default Helper;
