import React from 'react';
import GlobalStyle from './theme/globalStyles';
import Home from './pages/Home';
import Navbar from './components/Navbar/style';

function App(){
   return <div><GlobalStyle /><Navbar /><Home /></div>
}

export default App;