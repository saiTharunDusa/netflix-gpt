<<<<<<< HEAD
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
=======
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
>>>>>>> a4ac331 (implemented GPT search button)
