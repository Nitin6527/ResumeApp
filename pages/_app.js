import React from 'react';
import { FormProvider } from '../src/Components/FormContext';
import { RecoilRoot } from "recoil";
import Layout from "../src/Layout/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../scss/index.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

const MyApp = ({ Component, pageProps }) => (
  <FormProvider>
    <RecoilRoot>
      <App Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  </FormProvider>
);

export default MyApp;
