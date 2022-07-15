import React, { useEffect, useState } from "react";
import api from "../../api";

export const Context = React.createContext();

export default function DefaultContext({ children }) {
  const [estados, setEstados] = useState();
  const [response, setResponse] = useState(
    "Aguardando uma opção ser selecionada..."
  );
  const [estado, setEstado] = useState("");

  const handleChange = (e) => {
    api
      .post("/estados", {
        sigla: e.target.value,
        geo: e.target.selectedOptions[0].getAttribute("data-geo"),
      })
      .then((response) => setResponse(response.data));
    setEstado(e.target.value);
  };

  useEffect(() => {
    api
      .get("/estados")
      .then((response) => {
        setEstados(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (!estados) return <div>Carregando!</div>;

  return (
    <Context.Provider value={{ handleChange, estado, estados, response }}>
      {children}
    </Context.Provider>
  );
}
