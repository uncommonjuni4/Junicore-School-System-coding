
import { GraduationCap , School} from "lucide-react";



export default function Sidebar(props) {

  const {activeSession , activePage  ,setActivePage , pendingRequestsCount , pendingRequestsComunication , NotificationLogcount} = props;


  return (
    <aside className="fixed left-0 w-74 h-screen flex flex-col bg-white border-r border-slate-200 p-1">

      {/* JuniCore Logo Header */}
      <div className="w-full flex justify-start items-center gap-3  border-b-2 border-teal-100 p-4">

        <div className="w-11 h-11 bg-teal-700 flex justify-center items-center rounded-lg">
          <GraduationCap className="text-white" />
        </div>

        <div>
          <h1 className="font-semibold text-slate-900">
            JuniCore
          </h1>

          <p className="text-xs text-slate-500">
            School Administration
          </p>
        </div>

      </div>


      {/* Junicore school profile card  */}

      <div className="bg-teal-50 w-full h-auto rounded-[15px] p-4 flex justify-start  gap-3  border-[1px] border-teal-100  my-1">
           
        <div className="w-[40px] h-[40px]  rounded-lg  text-white   bg-white flex  justify-center items-center  gap-1">
         <School  className="text-teal-600" />
        </div>

        <div className="flex justify-center flex-col py-1  ">
          <h2 className="font-semibold text-slate-900 py-1">Bright Future School</h2>
          <p className="text-slate-500   text-xs">Main Campus</p>
          <div className="flex justify-center items-center w-auto h-auto rounded-[24px] text-white p-2 bg-teal-600 my-2 ">Session {activeSession}</div>
        </div>
       
      </div>

      {/* //navbar  */}

      <nav className="overflow-y-auto flex-1 min-h-0">
    
     <p className="text-slate-400  px-3 pb-2 pt-2 uppercase font-bold text-[11px] tracking-[0.16em]">OverView</p>
     <button className={`${activePage === "dashboard" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("dashboard");
     }}>
      <i className="fa-solid fa-house w-5 text-center"></i>
       Dashboard
     </button>

     <p className="text-slate-400  px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">School Management</p>

      <button className={`${activePage === "school-profile" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("school-profile");
     }}>
     <i className="fa-solid fa-school w-5 text-center"></i>
       School Profile
     </button>


      <button className={`${activePage === "my-campus" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("my-campus");
     }}>
      <i className="fa-solid fa-building w-5 text-center"></i>
       My Campus
     </button>

      <button className={`${activePage === "academic-sessions" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("academic-sessions");
     }}>
      <i className="fa-solid fa-calendar-days w-5 text-center"></i>
       Academic Sessions
     </button>

      <button className={`${activePage === "classes" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("classes");
     }}>
      <i className="fa-solid fa-book-open w-5 text-center"></i>
       Classes
     </button>

      <button className={`${activePage === "sections" ? "bg-teal-600 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("sections");
     }}>
    <i className="fa-solid fa-layer-group w-5 text-center"></i>
       Sections
     </button>

      <button className={`${activePage === "subjects" ? "bg-teal-700 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("subjects");
     }}>
    <i className="fa-solid fa-book-open w-5 text-center"></i>
       Subjects
     </button>

    
     <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">Students</p>

     <button className={`${activePage === "students" ? "bg-teal-700 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-semibold text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("students");
     }}>
   <i className="fa-solid fa-user-graduate w-5 text-center"></i>
       All Students
     </button>

     <button className={`${activePage === "admissions" ? "bg-teal-700 text-white" :"bg-transparent text-slate-700"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("admissions");
     }}>
    <i className="fa-solid fa-user-plus w-5 text-center"></i>
       Admissions
     </button>

     <button className={`${activePage === "promotion" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("promotion");
     }}>
    <i className="fa-solid fa-arrow-up-right-dots w-5 text-center"></i>
       Student Promotion
     </button>

     <button className={`${activePage === "transfer" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
      setActivePage("transfer");
     }}>
   <i className="fa-solid fa-right-left w-5 text-center"></i>
      Student Transfer
     </button>



      <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">PEOPLE MANAGEMENT</p>

     <button className={`${activePage === "teachers" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("teachers");
      }}>
   <i className="fa-solid fa-person-chalkboard w-5 text-center"></i>
      Teachers
     </button>

     <button className={`${activePage === "staff" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("staff");
      }}>
   <i className="fa-solid fa-users-gear w-5 text-center"></i>
      Staff
     </button>

     <button className={`${activePage === "parents" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("parents");
      }}>
  <i className="fa-solid fa-people-roof w-5 text-center"></i>
      Parents
     </button>

       <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">Academics</p>

     <button className={`${activePage === "attendance" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("attendance");
      }}>
     <i className="fa-solid fa-calendar-check w-5 text-center"></i>
      Attendance
     </button>

     <button className={`${activePage === "timetable" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("timetable");
      }}>
     <i className="fa-solid fa-table-cells w-5 text-center"></i>
     Timetable 
     </button>


     <button className={`${activePage === "exams" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("exams");
      }}>
    <i className="fa-solid fa-file-signature w-5 text-center"></i>
     Exams
     </button>

     <button className={`${activePage === "results" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("results");
      }}>
   <i className="fa-solid fa-square-poll-vertical w-5 text-center"></i>
     Results
     </button>

     <button className={`${activePage === "reportCards" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
       setActivePage("reportCards");
      }}>
    <i className="fa-solid fa-file-lines w-5 text-center"></i>
      Report Cards
     </button>


     <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">FINANCE</p>

       <button className={`${activePage === "fees" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("fees");
        }}>
  <i className="fa-solid fa-money-bill-wave w-5 text-center"></i>
      Fees
     </button>

       <button className={`${activePage === "payroll" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("payroll");
        }}>
   <i className="fa-solid fa-money-check-dollar w-5 text-center"></i>
      Salary / Payroll 
     </button>


        <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">COMMUNICATION</p>
       <button className={`${activePage === "announcements" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("announcements");
        }}>
   <i className="fa-solid fa-bullhorn w-5 text-center"></i>
      Announcements
     </button>

       <button className={`${activePage === "SchoolEvents" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("SchoolEvents");
        }}>
      <i className="fa-solid fa-calendar-days w-5 text-center"></i>
       School Events
     </button>

       <button className={`${activePage === "onlineMeetings" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("onlineMeetings");
        }}>
     <i className="fa-solid fa-video w-5 text-center"></i>
       Online Classes / Meetings
     </button>

       <button className={`${activePage === "complaints" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("complaints");
        }}>
     <i className="fa-solid fa-triangle-exclamation w-5 text-center"></i>
      Complaints
     </button>

      <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">FACILITIES</p>
       <button className={`${activePage === "transport" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("transport");
        }}>
      <i className="fa-solid fa-bus-simple w-5 text-center"></i>
    Transport
     </button>
        
          <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">REPORTS</p>

       <button className={`${activePage === "reports" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("reports");
        }}>
     <i className="fa-solid fa-chart-column w-5 text-center"></i>
     School Reports
     </button>
      
     
      <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">ADMINISTRATION</p>
     
       <button className={`${activePage === "permissions" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("permissions");
        }}>
     <i className="fa-solid fa-user-shield w-5 text-center"></i>
     Users & Permissions
     </button>
     
       <button className={`${activePage === "settings" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("settings");
        }}>
     <i className="fa-solid fa-gear w-5 text-center"></i>
     School Settings
     </button>

      <p className="text-slate-400 px-3 pb-2 pt-5 uppercase font-bold text-[11px] tracking-[0.16em]">ADD ONLY MISSING CONTROL</p>
    
       
     
       <button className={`${activePage === "requestsApprovals" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("requestsApprovals");
        }}>
     <i className="fa-solid fa-inbox w-5 text-center"></i>
     Requests Approvals
     <p className="gap-2 rounded-[50%] bg-red-600  p-1 w-8 text-white  h-8 text-center">{pendingRequestsCount}</p>
     </button>

       <button className={`${activePage === "communicationCenter" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("communicationCenter");
        }}>
    <i className="fa-solid fa-comments w-5 text-center"></i>
     Communication Center
     <p className="gap-2 rounded-[50%] bg-red-600  p-1 w-8 text-white  h-8 text-center">{pendingRequestsComunication}</p>
     </button>


       <button className={`${activePage === "homeworkManagement" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("homeworkManagement");
        }}>
    <i className="fa-solid fa-book-open w-5 text-center"></i>
     Homework Management
     </button>

       <button className={`${activePage === "remarksReview" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("remarksReview");
        }}>
   <i className="fa-solid fa-clipboard-check w-5 text-center"></i>
     Remarks & Review    
     </button>


       <button className={`${activePage === "documentVerification" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("documentVerification");
        }}>
    <i className="fa-solid fa-file-circle-check w-5 text-center"></i>
    Document Verification  
     </button>

    
       <button className={`${activePage === "auditActivity" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("auditActivity");
        }}>
    <i className="fa-solid fa-clock-rotate-left w-5 text-center"></i>
     Audit & Activity 
     </button>
       <button className={`${activePage === "notificationLog" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("notificationLog");
        }}>
    <i className="fa-solid fa-bell w-5 text-center"></i>
     Notification Log 
     <p className="gap-2 rounded-[50%] bg-red-600  p-1 w-8 text-white  h-8 text-center">{NotificationLogcount}</p>
     </button>
     
       <button className={`${activePage === "globalSearch" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("globalSearch");
        }}>
   <i className="fa-solid fa-magnifying-glass w-5 text-center"></i>
     Global Search  
     
     </button>
       <button className={`${activePage === "website" ? "bg-teal-700 text-white" :"bg-transparent text-slate-600"} hover:bg-slate-100 	px-3 py-3 rounded-xl w-full min-w-0 flex items-center gap-3 font-medium text-sm mb-1 shadow-sm text-left`} onClick={()=>{
         setActivePage("website");
        }}>
   <i className="fa-solid fa-globe w-5 text-center"></i>
      Website    
     
     </button>

          </nav>
      
    </aside>
  );
}
