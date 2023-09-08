import { useState, useContext, useEffect } from "react";
import { Context } from "../../context";
import styles from "./InputBlock.module.css";

function InputBlock({ onAdd, email, setEmail, fil }) {
  const { emailDataForm, setEmailDataForm } = useContext(Context);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmailDataForm("");
    onAdd(emailDataForm);
    setEmail("");
  };

  useEffect(() => {
    if (emailDataForm) {
      setEmail(emailDataForm.name);
    }
  }, [emailDataForm]);

  const isMatcheEmail = fil.some((e) => e.email === email);

  return (
    <div className={styles.inputBlock}>
      <form onSubmit={handleOnSubmit}>
        <div className={styles.formWrapper}>
          <label>Введите e-mail участника</label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={styles.input}
          />
        </div>
        <button
          className={[styles.inputButton]}
          onSubmit={handleOnSubmit}
          disabled={!isMatcheEmail}
        >
          + Добавить участника
        </button>
      </form>
    </div>
  );
}

export default InputBlock;
