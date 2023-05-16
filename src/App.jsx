import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { fetchAppConfiguration } from "config/configSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "features/loader/Loader";
import PageLayout from "features/layout/PageLayout";
import PageNotFound from "./features/404/PageNotFound";
import HomePage from "./features/home/HomePage";

//Lazy Imports
const ProductPage = lazy(() => import("product/productView"));
const EditPage = lazy(() => import("edit/editView"));

function App() {
  //App Id for fetching product configuration
  //You can change app configuration by changing the VITE_APP_ID value in .env
  //Possible appIds are 1 and 2
  const APP_ID = import.meta.env.VITE_APP_ID;

  const dispatch = useDispatch();
  const { loading, data: appConfig } = useSelector((state) => state.appConfig);

  useEffect(() => {
    dispatch(fetchAppConfiguration(APP_ID));
  }, []);

  if (loading) return <Loader loaderText="Loading App Configurations..." />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader loaderText="Loading Page..." />}>
            <PageLayout />
          </Suspense>
        }
      >
        <Route index element={<HomePage />} />
        <Route
          path="product/:id"
          element={<ProductPage configuration={appConfig} />}
        />
        <Route path="product/edit" element={<EditPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
