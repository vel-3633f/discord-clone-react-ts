import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarChannel from "./SidebarChannel";
import SidebarFooter from "./SidebarFooter";

const SidebarRight = () => {
  return (
    <div className="bg-secondary w-[260px] h-screen px-2 py-5 text-white flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center h-10 mb-10">
          <p>Discord</p>
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "white" }} />
        </div>
        <SidebarChannel />
        <div className=" m-2 px-5 py-1 hover:bg-slate-600 duration-400 rounded">
          # Udemy
        </div>
        <div className=" m-2 px-5 py-1 hover:bg-slate-600 duration-400 rounded">
          # Udemy
        </div>
      </div>
      <SidebarFooter />
    </div>
  );
};

export default SidebarRight;
