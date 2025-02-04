import React from 'react'
import Conteudo from '../components/Conteudo'
import AbaLateral from '../components/AbaLateral';
import style from './css/Home.module.css'
const Home = () => {
  return (
    <main id={style.principal}>
    <Conteudo />
    <AbaLateral />
    </main>
  )
}

export default Home