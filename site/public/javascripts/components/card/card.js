'use strict';

const e = React.createElement;

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
            {this.props.tags.map(item => (
              <li className="pills">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#card');
const root = ReactDOM.createRoot(domContainer);
const tags = ["Tag 1", "Tag 2", "Tag 3"];
root.render(<Card title="Test Title" description="Test Description" tags={tags} />);
