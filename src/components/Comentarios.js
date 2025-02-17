import { DiscussionEmbed } from "disqus-react"

const Comentarios = ({ post }) => {

    const disqusConfig = {
        url: `http://localhost:3000/artigos/${post.slug}`,
        identifier: post.slug,
        title: post.titulo
    }
  return <DiscussionEmbed shortname="blog-douglas-reis" config={disqusConfig}/>
}

export default Comentarios