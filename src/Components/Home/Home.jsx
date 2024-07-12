import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        
        <div className="md:px-16 py-8">
            <Header></Header>
            {
                navigation.state === "loading"?
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
             
            <div className="flex flex-col justify-center h-[80vh] items-center">
                <h1 className="font-mono text-xl md:text-5xl">
                    Welcome to CRYPTO CAFE
                </h1>
                
                <button className="py-2 px-3">Explore Coins</button>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;