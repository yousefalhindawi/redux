import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Car from "./pages/Car";
import store from "./redux/Store";
import Plane from "./pages/Plane";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import { AuthProvider } from "./utils/authContext/authContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";
const LazyUser = lazy(() => import("./pages/User"));

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Car />} />
              <Route element={<RequireAuth />}>
                <Route path="/plane" element={<Plane />} />
              </Route>
              <Route
                path="/user"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyUser />
                  </Suspense>
                }
              />
            </Routes>
          </Provider>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
