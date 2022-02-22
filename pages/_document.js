import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
            </Head>
            <meta charSet="utf-8" />
            <link rel="apple-touch-icon" href="../../public/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Resume</title>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
