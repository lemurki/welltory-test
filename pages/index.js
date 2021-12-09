import React from 'react';
// Components
import ChoosePlanPage from '../components/ChoosePlanPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FrontPage() {
  return (
    <>
      <Header />
      <main>
        <ChoosePlanPage />
      </main>
      <Footer />
    </>
  );
}

export default FrontPage;
