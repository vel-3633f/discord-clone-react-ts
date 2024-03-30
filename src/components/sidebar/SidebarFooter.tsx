import {
  faGear,
  faHeadphones,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarFooter = () => {
  return (
    <div className="grid grid-cols-7 gap-1 items-center">
      <div className="rounded-full bg-white w-10 h-10"></div>
      <div className="col-span-3 px-3">
        <p>Vel3633</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMicrophone}
          style={{ color: "white" }}
          size="lg"
          className="opacity-80"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHeadphones}
          style={{ color: "white" }}
          size="lg"
          className="opacity-80"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "white" }}
          size="lg"
          className="opacity-80"
        />
      </div>
    </div>
  );
};

export default SidebarFooter;
