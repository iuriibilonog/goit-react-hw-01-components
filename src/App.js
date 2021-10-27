import './App.css';
import ProfileList from './components/profile/ProfileList';
import user from './data/user.json';
import statisticalData from './data/statisticalData.json';
import friends from './data/friends.json';
import Statistics from './components//Statistic/Statistics';
import FriendsList from './components//Friends/FriendsList';
import TransactionList from './components/Transactions/TransactionList';
import transaction from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <ProfileList user={user} />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionList transaction={transaction} />
    </div>
  );
}

export default App;
