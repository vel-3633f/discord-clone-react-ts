import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex font-noto">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
