import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import Events from "./Events";
import EventForm from "./EventForm";
import AppContext from "../context/AppContext";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <br />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
