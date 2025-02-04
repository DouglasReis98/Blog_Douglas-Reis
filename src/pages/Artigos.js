import React from 'react'
import Conteudo from '../components/Conteudo'
import style from './css/Artigos.module.css'
import AbaLateral from '../components/AbaLateral';

const Artigos = () => {
  return (
    <>
    <h2 id={style.titulo}>Artigos</h2>
    <main id={style.principal}>
    <Conteudo />
    <AbaLateral />
    </main>
    </>
  )
}

export default Artigos