import { useRef, useEffect, FormEvent } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); // { current: null }
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault(); //nao recarrega a pagina
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Password" ref={inputPasswordRef} />

      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};
