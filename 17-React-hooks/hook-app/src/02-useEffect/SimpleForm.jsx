import { useEffect, useState } from "react";
import Message from "./Message";
// SimpleForm
export default function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "ivangonzalo@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove");
  }, []);

  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  useEffect(() => {
    first 

    return () => {
      second
    }
  })

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="ivangonzalo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'strider2') && <Message/>
      }
      <Message/>
    </>
  );
}
