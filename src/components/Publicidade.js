import { useEffect } from "react";

const Publicidade = ({ dataAdSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      //(adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    /*Publicidade*/
    <>
      <ins
        class="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-8189770873474197"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default Publicidade;
