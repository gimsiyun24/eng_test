import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>This is the main content of the website.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
