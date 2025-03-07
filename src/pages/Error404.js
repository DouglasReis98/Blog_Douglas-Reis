import React from 'react'
import style from './css/Error404.module.css'
import { useEffect } from 'react';
const Error404 = () => {

  useEffect(() => {
      document.title = `Erro 404 - Página Não Encontrada - Blog Douglas Reis`
    }, []);

  return (
    <div id={style.principal}>
      <h1>Error 404 - Página Não Encontrada!</h1>
      <h2>Opa! Parece que você está perdido!</h2>
      <h3><a href="/">Clique aqui para voltar a página principal</a></h3>
    </div>
  )
}

export default Error404