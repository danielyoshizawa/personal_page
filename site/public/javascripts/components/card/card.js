'use strict';

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Card JSX</p>
    );
  }
}

const domContainer = document.querySelector('#card');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Card));
