class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component card">
        <h2 className="title">{this.props.title}</h2>
        <p className="description">{this.props.description}</p>
        <div className="tags">
          <ul>
            {this.props.tags.map((item, key) => (
              <li key={key} className="pills">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
