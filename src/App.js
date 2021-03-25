import React from 'react';
import Footer from './components/includes/Footer';
import Header from './components/includes/Header';
import SignInContextProvider from './context/SignInContextProvider';
import SignUpContextProvider from './context/SignUpContextProvider';

const App = () =>{
  return(
    <>
    <SignInContextProvider>
      <SignUpContextProvider>
      <Header/>
      <Footer/>
      </SignUpContextProvider>
    </SignInContextProvider>
    </>
  )
}

export default App;
