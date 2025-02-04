import React from 'react'
import style from '../components/css/Rodape.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoblog from "../img/logoblog_bnw.png"

const Rodape = () => {
  return (
    <footer>
				<div className={style.rodape_col}>
					<div className={style.menu_rodape}>
						<ul>
							<li><a href="artigos.html">ARTIGOS</a></li>
							<li><a href="../portfolio.html">PORTFÓLIO</a></li>
							<li><a href="contato.html">CONTATO</a></li>
						</ul>
					</div>
				</div>

				<div className={style.rodape_col}>
					<a href="index.html" title="Douglas Reis"><img src={logoblog} /></a>
					<ul className={style.redes}>
						<li><a href="https://github.com/DouglasReis98">
                        <FaGithub />
						</a></li>
						<li><a href="http://instagram.com/douglasreis_ads">
                        <FaInstagram />
						</a></li>
						<li><a href="https://www.linkedin.com/pub/douglas-reis/">
						<FaLinkedin />
						</a></li>
					</ul>
				</div>

				<div className={style.rodape_col}>
					<div className={style.fone_email}>
						<h3>Contato</h3>
						<ul>
							<li>Telefone: (71) 98877-1526</li>
							<li>Email: douglasamaralreis@outlook.com</li>
						</ul>
					</div>
				</div>
			</footer>
  )
}

export default Rodape