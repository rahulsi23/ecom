import React from 'react';
import Header from '../../components/front/header/Index';
import Footer from '../../components/front/footer/Index';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
