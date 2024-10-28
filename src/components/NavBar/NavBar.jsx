import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home", component: "HomePage", exact: true },
        { id: 2, path: "/about", name: "About", component: "AboutPage" },
        { id: 3, path: "/services", name: "Services", component: "ServicesPage" },
        { id: 4, path: "/contact", name: "Contact", component: "ContactPage" },
        { id: 5, path: "/profile", name: "Profile", component: "ProfilePage", protected: true }
    ]

    const [open, setOpen] = useState(true)
    console.log(open)
    return (
        <div>
            <nav className="bg-green-900 text-white ">
                <div onClick={() => setOpen(!open)}>
                    {
                        open? <HiMenuAlt1 className="text-xl md:hidden" />: <IoClose className="text-xl md:hidden"/>
                    }
                    
                </div>

                <ul className={`md:flex duration-1000 bg-green-900 absolute opacity-100 md:static text-white rounded-xl p-4 ${open? '-top-60 opacity-0': 'top-5 opacity-80' }`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;