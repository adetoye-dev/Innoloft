import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
