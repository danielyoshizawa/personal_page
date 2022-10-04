import Multiviews from '../../layouts/multiviews.js';

const content = {
  "main_title" : "Articles",
  "items" : [
    {
      "title" : "Article 1",
      "description" : "Description 1",
      "tags" : [
        "Tag 1",
        "Tag 2",
        "Tag 3"
      ],
      "content" : "Content 1"
    },
    {
      "title" : "Article 2",
      "description" : "Description 2",
      "tags" : [
        "Tag 1",
        "Tag 2",
        "Tag 3"
      ],
      "content" : "Content 2"
    },
    {
      "title" : "Article 3",
      "description" : "Description 3",
      "tags" : [
        "Tag 1",
        "Tag 2",
        "Tag 3"
      ],
      "content" : "Content 3"
    }
  ]
};

const domContainer = document.querySelector('#articles');
const root = ReactDOM.createRoot(domContainer);
root.render(<Multiviews content={content} />);
