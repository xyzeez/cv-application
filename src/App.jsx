// Layouts
import Box from './components/box';
import Footer from './layouts/footer';
import Form from './layouts/form';
import Header from './layouts/header';
import Preview from './layouts/preview';

// Components

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-inter font-normal bg-gray-50">
      <Header />
      <main className="bg-gray-50 py-4">
        <Box containerStyle="grid grid-rows-[auto_1fr] gap-y-4 gap-x-8 lg:grid-rows-1 lg:grid-cols-[1fr_1fr]">
          <Form relativeStyle="row-start-1 row-end-2 lg:row-start-1 lg:row-end-2" />
          <Preview relativeStyle="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2" />
        </Box>
      </main>
      <Footer />
    </div>
  );
}

export default App;
