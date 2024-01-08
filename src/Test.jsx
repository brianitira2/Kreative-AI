import "./Test.css";

const Test = () => {
  return (
    <div className="parent">
      <div className="child  inset-0 justify-center">
        <div className="grandchild1  bg-teal opacity-50 bg-blur"></div>
        <div className="grandchild2  bg-primary opacity-50 bg-blur"></div>
        <div className="grandchild3  bg-purple opacity-50 bg-blur"></div>
      </div>
      <div>
        <h1 className="text">hello</h1>
      </div>
    </div>
  );
};

export default Test;
