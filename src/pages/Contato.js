import React from 'react'
import style from './css/Contato.module.css'

const Contato = () => {
  return (
    <main className={style.contato}>

	<h2 id={style.titulo}>Contato</h2>
	<form action="" method="post" name="form1" id="form1">
		<table>
			<tr valign="baseline">
				<td align="right" valign="top" nowrap="nowrap">Nome:</td>
				<td valign="top"><input type="text" name="nome" id={style.nome} value=""/></td>
			</tr>
			<tr valign="baseline">
				<td align="right" valign="top" nowrap="nowrap">Email:</td>
				<td valign="top"><input type="text" name="email" id={style.email} value=""/></td>
			</tr>
			<tr valign="baseline">
				<td align="right" valign="top" nowrap="nowrap">Mensagem:</td>
				<td valign="top"><textarea name="mensagem" id={style.mensagem}></textarea></td>
			</tr>
			<tr valign="baseline">
				<td align="right" valign="top" nowrap="nowrap">&nbsp;</td>
				<td valign="top">
					<input className={style.btn} type="submit" value="Enviar"/>
					<input className={style.btn} type="reset" value="Limpar"/>
				</td>
			</tr>
		</table>
	</form>
</main>

  )
}

export default Contato