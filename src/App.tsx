import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faUser, faSearch, faIdCard, faFileCode, faUsers } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/home'

library.add(faUser, faSearch, faIdCard, faFileCode, faUsers)

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
