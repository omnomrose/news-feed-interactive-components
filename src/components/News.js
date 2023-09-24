import Tiles from "./Tiles";

function News(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News+Story";
  } else {
    image = props.image;
  }

  return (
    <div>
      <li className="news">
        <Tiles className="x" />
        <div className="headliner">
          <div className="thumbnail">
            <img src={image} alt="" />
          </div>
          <h1 className="title">
            <a href={props.href}>{props.title}</a>
            <span className="author">{props.creator}</span>
            <span className="thumbnail">{props.thumbnail}</span>
          </h1>
        </div>
        <p className="desc">{props.desc}</p>
      </li>
    </div>
  );
}

export default News;
