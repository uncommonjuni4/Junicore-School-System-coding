
import { GraduationCap , School} from "lucide-react";



export default function Sidebar(props) {

  const {activeSession} = props;


  return (
    <aside className="fixed left-0 w-74 h-screen bg-white border-r border-slate-200 p-1">

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
      
    </aside>
  );
}
