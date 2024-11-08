import Sidebar from "./sidebar.jsx";
import ReadingContainer from "./contentContainer.jsx";

const Reading = () => {
  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-sm-10">
        <ReadingContainer></ReadingContainer>
      </div>
    </div>
  );
};
export default Reading;
