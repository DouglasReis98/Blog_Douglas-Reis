import { useState } from "react";
import style from "../components/css/AbaLateral.module.css";
import { db } from "../firebaseConfig/firebaseConfig";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import Publicidade from "./Publicidade";

const AbaLateral = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const postsPerViews = async () => {
      const postsRef = collection(db, "postagens");
      const q = query(postsRef, orderBy("views", "asc"), limit(5));
      const querySnapshot = await getDocs(q);

      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(posts);
    };

    postsPerViews();
  }, []);

  return (
    <aside className={style.aba_lateral}>
      <div className={style.ultimos_artigos}>
        <h3>Artigos Mais Lidos</h3>
        <br />
        {data.map((d) => (
          <p key={d.id}>{d.titulo}</p>
        ))}
      </div>
      
      <div className={style.publicidade}>
        <h3>Publicidade</h3>
        <Publicidade dataAdSlot="3938927771"/>
      </div>
    </aside>
  );
};

export default AbaLateral;
