import React, { useState, useEffect } from "react";
import style from "./css/Contato.module.css";
import emailjs from "@emailjs/browser";
import { analytics } from "../firebaseConfig/firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useLocation } from "react-router-dom";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(()=>{
    document.title = "Contato - Blog Douglas Reis"
  }, [])

  const location = useLocation();
  
  useEffect(() => {
		logEvent(analytics, 'page_view', { page_path: window.location.pathname })
	}, [location])

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    emailjs
      .send(
        "service_w6adzbc",
        "template_zfg2iwx",
        templateParams,
        "D0AcXe3Ssz7SuG5vh"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
		  alert("Seu email foi enviado com sucesso e será respondido assim que possível!");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }
  return (
    <main className={style.contato}>
      <h2 id={style.titulo}>Contato</h2>
      <form onSubmit={sendEmail} name="form1" id="form1">
        <table>
          <tbody>
            <tr valign="baseline">
              <td align="right" valign="top" nowrap="nowrap">
                Nome:
              </td>
              <td valign="top">
                <input
                  type="text"
                  name="nome"
                  id={style.nome}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </td>
            </tr>
            <tr valign="baseline">
              <td align="right" valign="top" nowrap="nowrap">
                Email:
              </td>
              <td valign="top">
                <input
                  type="text"
                  name="email"
                  id={style.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </td>
            </tr>
            <tr valign="baseline">
              <td align="right" valign="top" nowrap="nowrap">
                Mensagem:
              </td>
              <td valign="top">
                <textarea
                  name="mensagem"
                  id={style.mensagem}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </td>
            </tr>
            <tr valign="baseline">
              <td align="right" valign="top" nowrap="nowrap">
                &nbsp;
              </td>
              <td valign="top">
                <input className={style.btn} type="submit" value="Enviar" />
                <input className={style.btn} type="reset" value="Limpar" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </main>
  );
};

export default Contato;
