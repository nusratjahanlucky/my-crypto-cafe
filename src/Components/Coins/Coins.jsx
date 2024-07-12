import { useLoaderData } from "react-router-dom";
import CoinCard from "../CoinCard/CoinCard";
const Coins = () => {
    const coins = useLoaderData();
    console.log(coins)
    return (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
            <p className="text-center text-3xl font-bold text-gray">
               Available Crypto Currencies 
            </p> 

            <p className="text-center mb-12 text-xl font-normal text-gray-500">
               Total Coins:{coins.length} 
            </p>  
               
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {
                    coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard> )
                }
                </div>
        </div>
    );
};

export default Coins;