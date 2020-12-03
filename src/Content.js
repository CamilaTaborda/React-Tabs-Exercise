import React from 'react';

const Content = ({ content }) => (
  <>
    <article className="jumbotron">
      <h1 className="display-4 tc">{content}</h1>
    </article>
  </>
);

export default Content;