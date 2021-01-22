import React, {useState} from 'react'
import NavBar from './components/NavBar'
import FootNav from './components/FootNav'


function App() {
  const screenConfig = useState(0);


  return (
    <>
      <NavBar />
      <FootNav screenConfig={screenConfig} />
    </>
  );
}

export default App;
