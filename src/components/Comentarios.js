import { DiscussionEmbed } from "disqus-react"

const Comentarios = ({ post }) => {

    const disqusConfig = {
        url: window.location.href,
        identifier: post.slug,
        title: post.titulo
    }
  return <DiscussionEmbed shortname="blog-douglas-reis" config={disqusConfig}/>
}

export default Comentarios