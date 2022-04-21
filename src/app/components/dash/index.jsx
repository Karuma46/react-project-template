import Mainarea from "./mainarea";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

const DashBoardTemplate = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <Sidebar />
          <div className="col p-0">
            <Topbar />
            <Mainarea />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTemplate;
