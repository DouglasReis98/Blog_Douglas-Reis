import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { NavLink } from 'react-router-dom'
import style from '../components/css/Conteudo.module.css'
import { db } from '../firebaseConfig/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const Conteudo = () => {

	const [data, setData] = useState([])
	//const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'postagens'));
			const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));

			setData(items)
		};

		fetchData();
	}, []);


	const objPostagens = data.map(item => ({ id: item.id, titulo: item.titulo, slug: item.slug, data: item.data, imagem: item.imagem, urlImg: item.urlImg, texto: item.texto, tags: item.tags }));
	const postagens = objPostagens.sort((a, b) => {return b.id - a.id})
	/*
	const handlePostClick = (item) => {
		navigate(`/blog/artigos/${item.slug}`, { state: { item } });
	  };

*/
	return (	
    <div id={style.conteudo}>

				{postagens.map((item) => (
				<div className={style.postagem} key={item.id}>

					<img src={item.urlImg} alt={item.imagem}/>
					<h3>{item.titulo}</h3>
					{parse(item.texto.substring(0, 100) + "...")}
					<NavLink to={`/artigos/${item.slug}`}>Ver Mais</NavLink>
					<h5>{item.data} - {item.tags.map((tag) => (
						<NavLink to={`/busca?query=${tag}`} key={tag}><p><span>#</span>{tag}</p></NavLink>
					))}</h5>

				</div>
))}
			</div>
  )
}
//<p onClick={() => handlePostClick(item)}>Ver mais</p>
export default Conteudo