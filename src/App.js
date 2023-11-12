import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import pendingData from './PendingData.json';
import CompletedData from './CompletedData.json';
import { useState } from 'react';


const PendingColomn = [
  { label: "User", field: 'user',width:"200px"},
  { label: 'Risk Level', field: 'riskLevel',width:"149px" },
  { label: 'Trigger Reason', field: 'triggerReason',width:"164px" },
  { label: 'In Queue For', field: 'inQueueFor',width:"155px" },
  { label: 'Date Added On', field: 'dateAddedOn',width:"188px" },
  { label: 'Previously Reviewed', field: 'review',width:"185px" },
];

const CompletedColomn = [
  { label: "User", field: 'user',width:"200px"},
  { label: 'Risk Level', field: 'riskLevel',width:"149px" },
  { label: 'Action Reason', field: 'actionreason',width:"164px" },
  { label: 'Time to close', field: 'timetoclose',width:"155px" },
  { label: 'Date Added On', field: 'dateAddedOn',width:"188px" },
  { label: 'Action Taken By', field: 'review',width:"185px" },
];

function App(){
   const[state,setState] = useState("pending");

   console.log(state);

  return (
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Header setState = {setState} />
      {state === "pending" ? <Main data={pendingData} columns={PendingColomn} /> :
      <Main data={CompletedData} columns={CompletedColomn} />
}
      </div>
      
    </div>
  );
}

export default App;
