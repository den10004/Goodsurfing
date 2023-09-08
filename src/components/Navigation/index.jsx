import home from "../../assets/home.png";
import offers from "../../assets/offers.png";
import requests from "../../assets/requests.png";
import calendar from "../../assets/calendar-dot.png";
import host from "../../assets/host.png";
import vector from "../../assets/Vector.png";

import styles from "./Navigation.module.css";
import Helper from "../Helper";

function Navigation() {
  return (
    <div className={styles.navigationBlock}>
      <ul className={styles.navigation}>
        <li>
          <div className={styles.navigationWrapper}>
            <img src={home} alt="home" />
            <p>Рабочий стол</p>
          </div>
        </li>
        <li>
          <div className={styles.navigationWrapper}>
            <img src={offers} alt="offers" />
            <p> Вакансии</p>
          </div>
        </li>
        <li>
          <div className={styles.navigationWrapper}>
            <img src={requests} alt="requests" />
            <p>Заявки</p>
          </div>
        </li>
        <li>
          <div className={styles.navigationWrapper}>
            <img src={calendar} alt="calendar" />
            <p>Календарь</p>
          </div>
        </li>
        <li className={styles.navigationActive}>
          <div className={styles.navigationWrapper}>
            <img src={host} alt="host" />
            <h6>Организация</h6>
          </div>

          <div className={styles.navigationList2}>
            <p>Описание</p>
            <p>Фотогалерея</p>
            <p>Видеогалерея</p>
            <p>Команда</p>
            <p>Отзывы</p>
          </div>
        </li>
        <button className={styles.navigationButton}>
          <img src={vector} alt="назад" />
        </button>

        <Helper />
      </ul>
    </div>
  );
}

export default Navigation;
