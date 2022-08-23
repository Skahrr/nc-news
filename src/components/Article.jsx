export const Article = ({ article }) => {
  return (
    <article>
      <div id="title">{article.title}</div>
      <div id="article-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta
        id molestiae ullam repudiandae rem maxime, quasi earum eaque sunt minima
        ducimus porro nostrum? Doloremque quod quis esse enim debitis?
      </div>
      <div id="information">
        <div id="author">Written by: {article.author}</div>
        <div id="created_at">{article.created_at}</div>
        <div id="comment_count">Comments: {article.comment_count}</div>
      </div>
    </article>
  );
};
