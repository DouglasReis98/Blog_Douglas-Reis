import React from 'react'
import style from '../components/css/AbaLateral.module.css'

const AbaLateral = () => {
  return (
    <aside className={style.aba_lateral}>
				<div className={style.ultimos_artigos}>
					<h3>Artigos Mais Lidos</h3>
					<br />
					<p>Título de Artigo</p>
					<p>Título de Artigo</p>
					<p>Título de Artigo</p>
					<p>Título de Artigo</p>
					<p>Título de Artigo</p>
				</div>
				<div className={style.publicidade}>
					<h3>Publicidade</h3>

				</div>
			</aside>
  )
}

export default AbaLateral