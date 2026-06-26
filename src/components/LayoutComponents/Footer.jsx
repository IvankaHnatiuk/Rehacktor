import { FaDiscord, FaInstagram, FaMeta } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-nav-gray text-black-content mt-2">
            <div className="footer sm:footer-horizontal p-3 flex justify-around">
                <aside>
                    <p>
                        Privacy info
                        <br />
                        Contact us
                    </p>
                </aside>

                <div className="pt-2">
                    <div className="flex gap-4">
                        <a href="#" className="text-2xl hover:text-indigo-500">
                            <FaDiscord />
                        </a>

                        <a href="#" className="text-2xl hover:text-pink-500">
                            <FaInstagram />
                        </a>

                        <a href="#" className="text-2xl hover:text-blue-600">
                            <FaMeta />
                        </a>

                        <a href="#" className="text-2xl hover:text-gray-400">
                            <BsTwitterX />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500"></div>
            <div className="py-3 text-center">
                <p>© Copyright Myself</p>
            </div>
        </footer>
    );
}