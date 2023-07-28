import React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
}

export default NotFoundPage;

export function Head() {
  return <title>Not found</title>;
}
