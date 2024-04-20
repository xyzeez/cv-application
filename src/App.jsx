import { useState } from 'react';
import './index.css';

// Components
import Header from './components/header';
import Start from './components/start';
import Form from './components/form';
import Preview from './components/preview';
import Footer from './components/footer';
import Box from './components/box';

function App() {
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-inter font-normal">
      <Header />
      <main className="bg-gray-50 py-4">
        <Box containerStyle=" grid grid-rows-[auto_1fr] gap-y-4 gap-x-8 lg:grid-rows-1 lg:grid-cols-[1fr_1fr]">
          {newUser ? (
            <Start />
          ) : (
            <>
              <Form relativeStyle="row-start-1 row-end-2 lg:row-start-1 lg:row-end-2" />
              <Preview relativeStyle="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2" />
            </>
          )}
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default App;
