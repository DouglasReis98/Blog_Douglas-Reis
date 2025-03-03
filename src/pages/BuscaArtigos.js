import React, { useEffect, useState } from "react";
import style from "./css/BuscaArtigos.module.css";
import AbaLateral from "../components/AbaLateral";
import { db } from "../firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useLocation, NavLink } from "react-router-dom";
import parse from "html-react-parser";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BuscaArtigos = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryParam = useQuery();
  const buscaArtigo = queryParam.get("query");

  const fetchPostsBySearch = async () => {
    setIsLoading(true);

    const buscaArtigoArray = buscaArtigo.trim().split(" ");
    const postsRef = collection(db, "postagens");
    const q = query(
      postsRef, 
      where("tags", "array-contains-any", buscaArtigoArray),
    );

    //console.log(buscaArtigoArray)
    const querySnapshot = await getDocs(q);

    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .sort((a, b) => {return b.id - a.id});

    console.log(buscaArtigo);
    console.log(postsData);

    setResults(postsData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (buscaArtigo) {
      fetchPostsBySearch();
    }
    document.title = `Buscando por ${buscaArtigo} - Blog Douglas Reis`
  }, [buscaArtigo]);
  
  window.scrollTo(0, 0);  // Rola para o topo da página

  return (
    <>
      <h2 id={style.titulo}>Resultados para "{buscaArtigo}"</h2>
      <main id={style.principal}>
        <div id={style.conteudo}>
          {isLoading ? (
            <p>Carregando</p>
          ) : results.length > 0 ? (
            results.map((item) => (
              <div className={style.postagem} key={item.id}>
                <img src={item.urlImg} alt={item.imagem} />
                <h3>{item.titulo}</h3>
                {parse(item.texto.substring(0, 100) + "...")}
                <NavLink to={`/artigos/${item.slug}`}>Ver Mais</NavLink>
                <h5>
                  {item.data} -{" "}
                  {item.tags.map((tag) => (
                    <NavLink to={`/busca?query=${tag}`}>
                      <p key={tag}>
                        <span>#</span>
                        {tag}
                      </p>
                    </NavLink>
                  ))}
                </h5>
              </div>
            ))
          ) : (
            <p>Sem resultados!</p>
          )}
        </div>
        <AbaLateral />
      </main>
    </>
  );
};

export default BuscaArtigos;
