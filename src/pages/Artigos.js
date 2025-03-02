import {useEffect} from 'react'
import Conteudo from '../components/Conteudo'
import style from './css/Artigos.module.css'
import AbaLateral from '../components/AbaLateral';
import { analytics } from "../firebaseConfig/firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useLocation } from "react-router-dom";

const Artigos = () => {

  const location = useLocation();

useEffect(() => {
    logEvent(analytics, 'page_view', { page_path: window.location.pathname })
  }, [location])
  
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