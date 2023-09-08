import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo1.svg";
import favorite from "../../assets/favorite.svg";
import message from "../../assets/message.svg";
import logoAcc from "../../assets/logoAcc.svg";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerBlock}>
          <div className={styles.headerLogo}>
            <img src={logo2} alt="logo" />
            <img src={logo} alt="logo" />
            <select value="RU">
              <option>RU</option>
            </select>
          </div>
        </div>

        <div className={styles.headerAccount}>
          <img src={favorite} alt="favorite" />
          <img src={message} alt="message" />
          <img src={logoAcc} alt="logoAcc" />
          <select className={styles.accountSelect}>
            <option value="vlad">
              <p>Владислав</p>
              <img src={logoAcc} alt="logoAcc" />
            </option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
