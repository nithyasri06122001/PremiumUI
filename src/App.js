import "./App.css";
import Home from "./Home";
import Landing from "./Landing";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/"
   element={ <Landing />}>
    </Route> 
    <Route path="/quote"  element={ <Home/>}>

    </Route>

</Routes>
</BrowserRouter>
  );
}

export default App;
