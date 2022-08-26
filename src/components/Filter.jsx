export const Filter = ({setSortBy, setOrder}) => {


  const handleSortedChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <h4>Filter:</h4>
      <select name="" id="sort_by" onChange={handleSortedChange}>
        <option value="created_at">Latest posts</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
        <option value="topic">Topic</option>
      </select>
      <select name="" id="order" onChange={handleOrderChange}>
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  );
};
