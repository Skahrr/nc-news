
export const Article = ({article}) => {
    
  return (
    <article>
        <div id="title">{article.title}</div>
        <div id="author">Written by: {article.author}</div>
        <div id="created_at">{article.created_at}</div>
        <div id="comment_count">Comments: {article.comment_count}</div>
    </article>
  )
}
