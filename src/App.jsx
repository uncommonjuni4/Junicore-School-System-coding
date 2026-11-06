import { useState } from "react";
import Sidebar from "./components/Sidebar";


function App() {

    // For academic session

  const [activeSession,setactiveSession] = useState("2026–2027");
 
  // For sidebar navigation
  const [activePage , setActivePage] = useState("dashboard");
 // for pendingRequestCount 

 const [pendingRequestsCount, setpendingRequestsCount] = useState("0");

 //for pernding communicationCenter
 const [pendingRequestsComunication, setpendingRequestsComunication]= useState("0");

 // for all notifiction about system 
 const [NotificationLogcount, setNotificationLogcount] = useState("0");



  return (
     <>
     
     <Sidebar 
      activeSession={activeSession} 
      activePage ={activePage}  
      setActivePage= {setActivePage} 
       pendingRequestsCount = {pendingRequestsCount}
       pendingRequestsComunication = {pendingRequestsComunication}
       NotificationLogcount = {NotificationLogcount}
       />
     
     </>
  )
}

export default App;