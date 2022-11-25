import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welocm";
import RenderOnAnonymous from "./utils/RenderOnAnonymous";
import RenderOnAuthenticated from "./utils/RenderOnAuthenticated";

export default function Routers() {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            {" "}
            <RenderOnAnonymous>
              <Welcome />
              <Home />
            </RenderOnAnonymous>{" "}
            <RenderOnAuthenticated>
              <Home />
            </RenderOnAuthenticated>
          </>
        }
      />
      <Route
        path={"/"}
        element={
          <RenderOnAuthenticated>
            <Home />
          </RenderOnAuthenticated>
        }
      />
    </Routes>
  );
}
