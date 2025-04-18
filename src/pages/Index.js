import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionMenus1 from '../components/menus/IndexSectionMenus1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionMenus1 />
    </React.Fragment>
  );
}

