import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { NotesProps } from "../../@types/NotesProps";
import { UserPlannersProps } from "../../@types/PlannerProps";
import { DashboardHeader } from "../../components/Dashboard/DashboardHeader";
import { Navbar } from "../../components/Dashboard/Navbar";
import LoadingModal from "../../components/LoadingModal";
import { useUserContext } from "../../contexts/userContext/hook";
import { getUserDocsData, USER_NOTES, USER_PLANNERS } from "../../utils/getUserDocs";

type OutletContextType = {
  Planners: UserPlannersProps
  setPlanners: (planner: UserPlannersProps) => void
  Notes: NotesProps
  setNotes: (notes: NotesProps) => void
  UserLogged: User
  setUserLogged: (user: User)=>void
}

export function useUserPlanner(){
  return useOutletContext<OutletContextType>();
}

export function Dashboard() {
  const { UserLogged, setUserLogged } = useUserContext();
  const [isLoading, setisLoading] = useState(true);
  const [Planners, setPlanners] = useState<UserPlannersProps>();
  const [Notes, setNotes] = useState<NotesProps>();

  useEffect(() => {
    async function sessionStorageDocs(){
      if(UserLogged === undefined) return;

      const sessionPlanner = sessionStorage.getItem(USER_PLANNERS);
      const sessionNotes = sessionStorage.getItem(USER_NOTES);

      if (!!sessionPlanner && !!sessionNotes) {
        setPlanners(JSON.parse(sessionPlanner));
        setNotes(JSON.parse(sessionPlanner));
      } else {
        getUserDocsData({UserLogged,setPlanners,setNotes});
      }
    }
    sessionStorageDocs();
    setisLoading(false);
  }, []);


  return (
    <>
      <LoadingModal visible={isLoading}/>

      <div className='
      w-screen h-screen
      bg-background-polygons bg-no-repeat bg-cover bg-center
      flex flex-col
      '
      >
        <DashboardHeader userName={
          UserLogged?.displayName ?
            UserLogged.displayName :
            "Anonymous"
        } />

        <div className=' w-full h-full p-6 pt-[4.5rem]'>
          <div className=" m-auto
          w-full max-w-[1600px] h-full rounded-xl overflow-hidden
          flex items-center justify-center gap-6 overflow-x-auto
          bg-gradient-to-br from-white-opac-35 to-gray-opac-35
          bg-opacity-30 backdrop-blur-md border border-gray-400
          shadow-[0_0_6px_rgba(0,0,0,0.35)]
          "
          >
            <Navbar />
            <div className='w-full h-full py-6 ml-24 mr-4
            overflow-x-auto '>
              <Outlet context={{
                Planners, setPlanners, Notes, setNotes
              }}/>
            </div>
          </div>
        </div>
      </div >
    </>

  );
}
