import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const SidebarLeft = () => {
  return (
    <div className="h-screen w-20 bg-primary flex flex-col items-center">
      <div className="w-[50px] h-[50px] bg-third place-center rounded-full my-5 hover:rounded-md duration-500">
        <FontAwesomeIcon
          icon={faDiscord}
          style={{ color: "white" }}
          size="xl"
        />
      </div>

      <div className="w-[50px] h-[50px] bg-third place-center rounded-full my-2">
        <FontAwesomeIcon
          icon={faDiscord}
          style={{ color: "white" }}
          size="xl"
        />
      </div>
      <div className="w-[50px] h-[50px] bg-third rounded-full my-5 hover:rounded-md duration-500">

      </div>
    </div>
  );
};

export default SidebarLeft;
