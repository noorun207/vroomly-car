// SellerLayout.jsx
import { Outlet } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";

export default function SellerLayout() {
  return (
    <>
      <SellerNavbar />
      <Outlet />   
    </>
  );
}
