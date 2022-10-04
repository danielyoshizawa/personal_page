class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container grid">
        <div className="row">
          {this.props.items.map((item, key) => (
            <div key={key} className="column">{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Grid;
