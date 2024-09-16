import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import FundsList from 'components/FundsList';
import TransactionsList from 'components/TransactionsList';

const App = () => {
  const userId = '1';
  const phone  = '+573007986263'

    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="funds" element={<FundsList />} />
            <Route path="transactions" element={<TransactionsList userId={userId}/>} />
          </Route>
        </Routes>
      </Router>
    );
  };
export default App;
