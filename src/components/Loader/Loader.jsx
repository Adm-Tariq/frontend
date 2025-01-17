import "./Loader.css";

const Loader = () => {
  return (
    <div className="loadPage">
      <div className="load">
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
