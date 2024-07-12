import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-mono text-xl text-center md:text-3xl">
                    Contact Us,Our Office address Down Below
                </h1>
                <div className="flex justify-center items-center">
                    <Link to="/bdAddress" className="py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0">
                        BD address
                    </Link>
                    <Link to="/usAddress" className="py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0">
                        US address
                    </Link>
                     
                </div>
                <div className="flex justify-center w-full py-44">
                    <Outlet></Outlet>    
                </div>
            </div>
        </div>
    );
};

export default Contact;