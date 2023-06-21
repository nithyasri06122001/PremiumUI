import "./App.css";
import Home from "./Home";
import Welcome from "./Welcome";

import { BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/"
   element={ <Welcome/>}>
    </Route> 
    <Route path="/quote"  element={ <Home/>}>

    </Route>

</Routes>
</BrowserRouter>
  );
}

export default App;
