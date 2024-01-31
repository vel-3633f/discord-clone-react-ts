import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarRight = () => {
  return (
    <div className="bg-secondary w-[260px] h-screen px-2 py-5">
      <div className="flex justify-between items-center h-10 mb-10">
        <p className="text-white">Discord</p>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "white" }} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "white" }} />
          <p className="text-white">プログラミングチャンネル</p>
        </div>
        <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default SidebarRight;
