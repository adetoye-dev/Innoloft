import { Outlet } from "react-router-dom";
import Header from "features/header/Header";
import { useSelector } from "react-redux";
import SideBar from "features/navigation/SideBar";

const PageLayout = () => {
  const { data: appConfig } = useSelector((state) => state.appConfig);
  return (
    <>
      <Header mainColor={appConfig.mainColor} />
      <div className="layout-container flex h-full pt-10">
        <SideBar />
        <main className="container bg-red-200">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PageLayout;
