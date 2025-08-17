import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import './AppLayout.css'

export function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Outlet />
      </main>
    </>
  );
}