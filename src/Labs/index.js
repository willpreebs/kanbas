import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

import Nav from "../Nav";
function Labs() {
 return (
  <Provider store={store}>
    <div>
     <Nav/>
     <Assignment4/>
   </div>
  </Provider>
 );
}
export default Labs;