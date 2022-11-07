
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import LoginView from './views/LoginView';
import { UserContextProvider } from './contexts/userContext';
import { IssueContextProvider } from './contexts/issueContext';
import { ModalContextProvider } from './contexts/modalContext';
import IssueDetails from './views/IssueDetails';


function App() {

  
  

  return (
    <div className="App">
      <UserContextProvider>
        <ModalContextProvider>
          <IssueContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/details/:id" element={<IssueDetails />} />
            </Routes>
          </IssueContextProvider>
        </ModalContextProvider>
      </UserContextProvider>
    </div >
  );
}

export default App;
