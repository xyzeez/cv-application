import { useState } from 'react';
import './index.css';

// Components
import Header from './components/header';
import Start from './components/start';
import Form from './components/form';
import Preview from './components/preview';
import Footer from './components/footer';

function App() {
  const [newUser, setNewUser] = useState(true);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-inter font-normal">
      <Header></Header>
      <main className="bg-gray-50 grid grid-rows-[auto_1fr] px-sys py-4">
        {newUser ? (
          <Start />
        ) : (
          <>
            <Form relativeStyle="row-start-2 row-end-3"></Form>
            <Preview relativeStyle="row-start-1 row-end-2"></Preview>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
