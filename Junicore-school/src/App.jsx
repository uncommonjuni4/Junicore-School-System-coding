import { useState } from "react";
import Sidebar from "./components/Sidebar";


function App() {

    //  for sesssion

  const [activeSession,setactiveSession] = useState("2026–2027");
 
 

  return (
     <>
     
     <Sidebar  activeSession={activeSession}/>
     
     </>
  )
}

export default App;