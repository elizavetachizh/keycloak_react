import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import StoreService from "./services/StoreService";
import Welcome from "./components/Welocm";
import Home from "./components/Home";
import RenderOnAnonymous from "./utils/RenderOnAnonymous";
import RenderOnAuthenticated from "./utils/RenderOnAuthenticated";

const store = StoreService.setup();

console.log(store);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <RenderOnAnonymous>
            <Welcome />
            <Home />
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            {/*<BookBox/>*/}
            <Home />
          </RenderOnAuthenticated>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
