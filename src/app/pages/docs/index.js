import Buttons from "./components/buttons";
import Colors from "./components/colors";
import Forms from "./components/forms";
import Typography from "./components/typography";
import Login from "./login";

const Docs = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row my-4">
          <div className="col card text-center py-5">
            <h1>A React Project Style Guide</h1>
            <p>
              A great place to start create the theme for your next react
              project
            </p>
          </div>
        </div>
        <Login/>
        {/* <Colors />
        <Typography />
        <Buttons />
        <Forms /> */}
      </div>
    </>
  );
};

export default Docs;
