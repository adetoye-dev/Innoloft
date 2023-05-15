import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchAppConfiguration } from "config/configSlice";
import { useSelector, useDispatch } from "react-redux";

const PageLayout = () => {
  return (
    <>
      <div>Page Header Goes Here</div>
      <div>Page Navigation Goes Here</div>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

function App() {
  //App Id for fetching product configuration
  //You can change app configuration by changing the VITE_APP_ID value in .env
  //Possible appIds are 1 and 2
  const APP_ID = import.meta.env.VITE_APP_ID;

  const dispatch = useDispatch();
  const { loading, data: appConfig } = useSelector((state) => state.appConfig);
  console.log(appConfig, loading);

  useEffect(() => {
    dispatch(fetchAppConfiguration(APP_ID));
  }, []);

  if (loading) return <p>Loading App Configurations...</p>;

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="product/:id" element={<h1>Product Page</h1>} />
        <Route path="product/edit" element={<h1>Edit Page</h1>} />
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
