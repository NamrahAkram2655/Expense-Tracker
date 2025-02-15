import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import AddTransaction from './components/AddTransaction/AddTransaction';
import ProfitGraph from "./components/ProfitGraph/ProfitGraph";
import './App.css';
import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <ProfitGraph />
      </div>
    </GlobalProvider>
  );
}
