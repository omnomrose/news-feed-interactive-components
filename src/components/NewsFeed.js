function NewsFeed(props) {
  return (
    <div className="newsFeed">
      <h1 className="news-header"> My News Feed </h1>
      <ul className="news-container">{props.children}</ul>
    </div>
  );
}

export default NewsFeed;
