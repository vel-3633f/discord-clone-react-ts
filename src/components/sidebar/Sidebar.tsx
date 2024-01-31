import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Sidebar = () => {
  return (
    <div className="flex">
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
};

export default Sidebar;
