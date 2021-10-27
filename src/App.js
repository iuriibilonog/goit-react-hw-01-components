import './App.css';
import ProfileList from './profile/ProfileList';
import user from './user.json';
import statisticalData from './statisticalData.json';
import friends from './friends.json';
import Statistics from './Statistic/Statistics';
import FriendsList from './Friends/FriendsList';
import TransactionList from './Transactions/TransactionList';
import transaction from './transactions.json';

function App() {
  return (
    <div className="App">
      {/* <ProfileList user={user} /> */}
      {/* <Statistics title={'Upload stats'} stats={statisticalData} /> */}
      <FriendsList friends={friends} />
      {/* <TransactionList transaction={transaction} /> */}
    </div>
  );
}

export default App;
