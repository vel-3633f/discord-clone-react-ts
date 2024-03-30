import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SidebarChannel = () => {
  return <div className="flex justify-between items-center">
  <div className="flex items-center">
    <FontAwesomeIcon icon={faChevronDown} style={{ color: "white" }} />
    <p className="text-sm ml-3">プログラミングチャンネル</p>
  </div>
  <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
</div>;
};

export default SidebarChannel;
