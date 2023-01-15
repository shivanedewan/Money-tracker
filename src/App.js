
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
