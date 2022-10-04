import Card from '../card/card.js';

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

// TODO : DANIEL : TEST CODE
const domContainer = document.querySelector('#grid');
const root = ReactDOM.createRoot(domContainer);
const tags = ["tag1", "tag2"];
const items = [
  <Card title="Title 001" description="Test Description 001" tags={tags} />,
  <Card title="Title 002" description="Test Description 002" tags={tags} />,
  <Card title="Title 003" description="Test Description 003" tags={tags} />,
  <Card title="Title 004" description="Test Description 004" tags={tags} />,
  <Card title="Title 005" description="Test Description 005" tags={tags} />
];

root.render(<Grid items={items} />);
