import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NameArea from "./Components/NameArea";
import { useRef, useState } from "react";
import TodoSection from "./Components/TodoSection";

function App() {
  let [userName, setUserName] = useState("");
  let getName = useRef();

  let handleNameSubmit = () => {
    let name = getName.current.value.trim();
    if (name == "") {
      alert("User name is empty");
    } else {
      setUserName(name);
    }
  };
  let enterHandler = (e) => {
    if (e.key === "Enter") {
      handleNameSubmit();
    }
  };

  return (
    <div className="mainContainer">
      {userName.length == 0 ? (
        <NameArea
          getName={getName}
          enterHandler={enterHandler}
          handleNameSubmit={handleNameSubmit}
        />
      ) : (
        <TodoSection userName={userName} />
      )}
    </div>
  );
}

export default App;
