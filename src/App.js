import './App.css';
import ProfileList from './ProfileList';
import statisticalData from './statisticalData.json';
import Statistics from './Statistic/Statistics';
function App() {
  return (
    <div className="App">
      {/* <ProfileList /> */}
      <Statistics title={'Upload stats'} stats={statisticalData} />
    </div>
  );
}

export default App;
