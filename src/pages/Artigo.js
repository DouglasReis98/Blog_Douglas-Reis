import React, { useEffect, useState } from "react";
import style from "./css/Artigo.module.css";
import AbaLateral from "../components/AbaLateral";
import { NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { db } from "../firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Comentarios from "../components/Comentarios";

const Artigo = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  let views = 1;

  useEffect(() => {
    const fetchPost = async () => {
      const postRef = collection(db, "postagens");
      const q = query(postRef, where("slug", "==", slug));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setPost(snapshot.docs[0].data());
      }
    };

    fetchPost();
  }, [slug]);

  window.scrollTo(0, 0); // Rola para o topo da página

  return (
    <main id={style.principal}>
      {post ? (
        <>
          <h2 id={style.titulo}>{post.titulo}</h2>
          <div className={style.artigo}>
            <img id={style.img_artigo} src={post.urlImg} alt={post.titulo} />
            <h6>
              {views === 1 ? `${views} Visualização` : `${views} Visualizações`}{" "}
              || Data de Postagem: {post.data} || Tags:{" "}
              {post.tags.map((tag) => (
                <p className={style.tags} key={post.tags.indexOf(tag)}>
                  <NavLink to={`/busca?query=${tag}`}>
                    <span>#</span>
                    {tag}
                  </NavLink>
                </p>
              ))}
            </h6>
            <div className={style.texto}>{parse(post.texto)}</div>
            <Comentarios post={post} />
          </div>
        </>
      ) : (
        <></>
      )}
      <AbaLateral />
    </main>
  );
};

export default Artigo;
