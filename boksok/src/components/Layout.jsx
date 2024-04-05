import React from 'react';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>James Bond Book Search</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} James Bond Book Search</p>
      </footer>
    </div>
  );
}

export default Layout;
