import React,{ Component} from "react";
import Forms from "./Forms";
import List from "./List";
import Style from "./Style";
import Hide from "./Hide";
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";


export default class Router extends Component {
  render() {
    return (
      <div>
         {
          <BrowserRouter>
          <Link to={""}>Home</Link>
          <Link to={"/Forms"}>Forms</Link>
          <Link to={"/List"}>List</Link>
          <Link to={"/Style"}>Style</Link>
          
          <Routes>
          <Route path='/' compnenet={Hide} />
          <Route path='/Forms' compnenet={Forms} />
          <Route path='/List' compnenet={List} />
          <Route path='/Style' compnenet={Style} />
          </Routes>
        </BrowserRouter>
      }
      </div>
    )
  }
}
