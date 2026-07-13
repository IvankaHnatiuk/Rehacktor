import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Navbar() {
    const [slug, setSlug] = useState();

    const handleChange = (e) => {
        setSlug(e.target.value);
    };

    const navigate = useNavigate();

    const { user, signOut } = useContext(UserContext);

    const handleLogout = async () => {
        await navigate('/');
        signOut();
    }

    return (
        <>
            <div className="navbar bg-nav-gray shadow-sm">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-3xl font-electrolize" to={routes.home}>Reactor</Link>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={handleChange} />
                    <Link className="btn btn-square" to={`/search/${slug}`}><FaSearch />
                    </Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                               {(user && (
                                 <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                               )) || <FaArrowRightToBracket className="text-3xl"/>}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          {(!user && (
                            <>
                             <li>
                                <Link to={routes.register}>Register</Link>
                            </li>
                             <li>
                                <Link to={routes.login}>Login</Link>
                            </li>
                            </>
                          )) || (
                            <>
                            <li>
                                <Link to={routes.profile}>Profile</Link>
                            </li>
                            <li onClick={handleLogout}>
                                <p>Logout</p>
                            </li>
                            </>
                          )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}