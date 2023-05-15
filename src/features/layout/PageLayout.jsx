import { Outlet } from "react-router-dom";
import Header from "features/header/Header";
import { useSelector } from "react-redux";

const PageLayout = () => {
  const { data: appConfig } = useSelector((state) => state.appConfig);
  return (
    <>
      <Header mainColor={appConfig.mainColor} />
      <div>Page Navigation Goes Here</div>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
