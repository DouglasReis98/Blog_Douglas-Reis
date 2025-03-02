import Conteudo from '../components/Conteudo'
import AbaLateral from '../components/AbaLateral';
import style from './css/Home.module.css'
import { useLocation } from "react-router-dom";
import { analytics } from "../firebaseConfig/firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
const Home = () => {

	const location = useLocation();

  useEffect(() => {
		logEvent(analytics, 'page_view', { page_path: window.location.pathname })
	}, [location])
  
  return (
    <main id={style.principal}>
    <Conteudo />
    <AbaLateral />
    </main>
  )
}

export default Home