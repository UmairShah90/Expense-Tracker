import React from 'react'
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import History from './Components/History'
import { TransactionProvider } from "./context/TransactionContext";


function App() {
  return (
   <div className="App">
   <TransactionProvider>
   <Header />
   <Balance />
   <History />
   </TransactionProvider>
    
    </div>
  );
}

export default App;
