import { Outlet } from "react-router-dom";
import Header from "features/header/Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      <div>Page Navigation Goes Here</div>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
