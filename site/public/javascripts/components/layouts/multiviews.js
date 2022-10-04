import Grid from '../grid/grid.js';
import Card from '../card/card.js';

class Multiviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content : ''
    }
  }

  cardClick(event, title) {
    const content = this.props.content.items.filter((item) => {
      return item.title === title;
    });

    if (content.length < 1) { return; }

    this.setState({
      content : content[0].content
    });
  }

  fillCards(items) {
    return this.props.content.items.map(item =>
      <Card title={item.title} description={item.description} tags={item.tags} onClick={event => this.cardClick(event, item.title)} />
    );
  }

  render() {
    return (
      <div className="container multiviews">
        <div className="row">
          <h1>{this.props.content.main_title}</h1>
        </div>
        <div className="row">
          <p>{this.state.content}</p>
        </div>
        <div className="row">
          <Grid items={this.fillCards(this.props.content.items)} />
        </div>
      </div>
    );
  }
}

export default Multiviews;
