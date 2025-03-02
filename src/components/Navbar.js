import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./css/Navbar.module.css"
import logoblog from "../img/logoblog_bnw.png"
import { NavLink } from "react-router-dom"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [buscaArtigo, setBuscaArtigo] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (buscaArtigo) {
            navigate(`/busca?query=${buscaArtigo}`);
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => setMenuOpen(!menuOpen);
    const fechaMenu = () => setMenuOpen(false);

    return (
        <header>
            <NavLink to="/" onClick={fechaMenu}><img src={logoblog} id={style.logo} title="Blog Douglas Reis" alt='logo'/></NavLink>
            <nav id={style.menu}>
                <button id={style.btn_mobile} className={style[`${menuOpen ? 'fechar' : ''}`]} onClick={menuToggle}><span id={style.hamburger}></span></button>
                <ul id={style.menu_botoes} className={style[`${menuOpen ? 'itemsOpen': '' }`]}/*role="botoes do menu"*/>
                    <li><NavLink to="/artigos" onClick={fechaMenu}>ARTIGOS</NavLink></li>
                    <li><a href="https://douglasreis.vercel.app">PORTFÓLIO</a></li>
                    <li><NavLink to="/contato" onClick={fechaMenu}>CONTATO</NavLink></li>
                    <li>
                        <div id={style.aba_busca}>
                            <form onSubmit={handleSearch}>
                                <input type="text" placeholder="O que você procura?" id={style.pesquisa} name="pesquisa" value={buscaArtigo} onChange={(e) => setBuscaArtigo(e.target.value)} />
                                <button type="submit" id={style.btn_pesquisa}  onClick={fechaMenu}>
                                    <FaSearch />
                                </button>
                        </form>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar