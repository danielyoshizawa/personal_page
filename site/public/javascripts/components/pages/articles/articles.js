import Multiviews from '../../layouts/multiviews.js';

fetch('http://localhost:3000/articles/articles')
   .then(response => response.json())
   .then((content) => {
     const domContainer = document.querySelector('#articles');
     const root = ReactDOM.createRoot(domContainer);
     root.render(<Multiviews content={content} />);
   });
