import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
            <div className="hidden md:block">
                <Link to="/" className="font-sans font-bold text-xl text-gray-600">
                Crypto Cafe
                </Link>
            </div> 
            <nav className="flex gap-4 text-xl">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/coins">Coins</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;