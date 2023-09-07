import { useEffect, useState } from "react";
import InputBlock from "./components/InputBlock";
import Cards from "./components/Cards";
import { Context } from "./context";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [emailDataForm, setEmailDataForm] = useState();
  const [filtereds, setFiltereds] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))

      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (emailDataForm) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: emailDataForm.email,
        email: emailDataForm.name,
        idx: emailDataForm.idx,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setFiltereds((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id, idx) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setFiltereds(
            filtereds.filter((user) => {
              return user.name !== idx;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveUsers = () => {
    console.log("Добавлено", filtereds);
    alert("Добавлено");
  };

  const fil = users.filter((i) => {
    return i.email.toLowerCase().includes(email.toLowerCase());
  });

  return (
    <Context.Provider value={{ emailDataForm, setEmailDataForm }}>
      <Header />

      <div className={styles.mainBlock}>
        <Navigation />

        <div className={styles.leftBlock}>
          <h2>Команда организации</h2>
          <h3>
            Владельцы команд могут добавлять участников в команду своей
            организации, добавляя их адреса электронной почты. У них должна быть
            учетная запись на сайте.
          </h3>
          <InputBlock onAdd={onAdd} email={email} setEmail={setEmail} />

          <div className={styles.cardsBlock}>
            {fil.map((user, i) => (
              <Cards id={user.id} key={i} name={user.name} email={user.email} />
            ))}
          </div>

          {filtereds.length !== 0 && <h3>Добавлено</h3>}

          <div className={styles.cardsBlock}>
            {filtereds?.map((user, i) => (
              <Cards
                id={user.id}
                key={i}
                name={user.name}
                email={user.email}
                filtereds={filtereds}
                setFiltereds={setFiltereds}
                onDelete={onDelete}
              />
            ))}
          </div>

          {filtereds.length !== 0 && (
            <div className={styles.buttonWrap}>
              <button onClick={saveUsers} className={styles.buttonSave}>
                Сохранить
              </button>
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
