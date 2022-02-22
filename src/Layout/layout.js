import React from 'react';
import Resume from "../Components/Resume";
import Header from "../Components/Header";

function Layout(props) {
   const { children } = props;

   return (
      <>
         <div className="App">
            <Header />
            {children}
            <Resume />
         </div>
      </>
   );
}

export default Layout;
