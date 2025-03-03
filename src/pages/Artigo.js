import React, { useEffect, useState } from "react";
import style from "./css/Artigo.module.css";
import AbaLateral from "../components/AbaLateral";
import { NavLink, useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import { db, analytics } from "../firebaseConfig/firebaseConfig";
import { updateDoc, increment, doc, getDoc } from "firebase/firestore";
import Comentarios from "../components/Comentarios";
import { logEvent } from "firebase/analytics";

const Artigo = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [views, setViews] = useState(0);
  const [viewsUpdated, setViewsUpdated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (post) {
      document.title = `${post.titulo} - Blog Douglas Reis`;
    }
  }, [post]);

  useEffect(() => {
    const pathName = window.location.pathname;

    if (!pathName || viewsUpdated) return;

    logEvent(analytics, "page_view", { page_path: pathName });

    const fetchPost = async () => {
      try {
        const postRef = doc(db, "postagens", slug);
        //const q = query(postRef, where("slug", "==", slug));
        const docRef = await getDoc(postRef);

        if (docRef.exists()) {
          setPost(docRef.data());

          await updateDoc(postRef, {
            views: increment(1),
          });

          setViews(docRef.data().views + 1); // Adiciona +1 à contagem atual
        } else {
          console.log("A postagem não existe!");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados da postagem:", error);
      }
    };

    fetchPost();
    setViewsUpdated(true);
  }, [location, slug, viewsUpdated]);

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
