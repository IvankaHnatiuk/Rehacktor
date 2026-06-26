import { Outlet } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";

export default function Layout(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}