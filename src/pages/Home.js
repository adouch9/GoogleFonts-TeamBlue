import React from 'react';
import { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Text from './../components/selection/Text';
import FontSize from './../components/selection/FontSize';
import ContextProvider from './../context/Context';
import SelectFont from './../components/selection/SelectFont';
import Content from './../components/Content';

function Home() {
  const [content, setContent] = useState('date');

  const handleSelectChange = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };
  return (
    <>
      <Header />
      <ContextProvider>
        <main className='container min-vh-100'>
          <div className='row my-5'>
            <div className='col-lg-3'>
              <div style={{ position: 'sticky', top: '0px' }}>
                <SelectFont handleSelectChange={handleSelectChange} />
                <Text />
                <FontSize />
              </div>
            </div>
            <div className='col-lg-9'>
              <Content content={content} />
            </div>
          </div>
        </main>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default Home;
