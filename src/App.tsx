import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faIdCard, faFileCode, faUsers, faHome, faTachometerAlt, faList } from '@fortawesome/free-solid-svg-icons'
import AppBar from '@material-ui/core/AppBar'
import './App.css';
import Home from './pages/home';
import NavDrawer from './components/Drawer'

library.add(faUser, faSearch, faIdCard, faFileCode, faUsers, faHome, faTachometerAlt, faList, faSearch)



const App: React.FC = () => {
  return (
      <div id="app">
      <AppBar position="relative">hello I really wonder if I ever figure out this thing to position correctly so that i don't have to use chossy way to make this work.</AppBar>
        <NavDrawer />
        <div style={{marginLeft: 240}}>
        <Home />
        </div>
       </div> 
  );
}

export default App;
