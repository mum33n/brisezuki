import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import airdrop from '../assets/airdrop2.png'
import market from '../assets/market.png'
import game from '../assets/game.png'
import acad from '../assets/acad.png'
import FeaturesCard from "./cards/FeaturesCard";
export default function Info(params) {
    return(
        <div>
            <div className="text-slate-100 py-20 px-10 wow fadeInUp" data-wow-duration="2s">
        <h1 className="text-3xl mb-10 md:w-2/3 mx-auto md:text-6xl text-center font-bold wow fadeInUp" data-wow-duration="2s">Why Zuki Inu?</h1>
        <div className="flex flex-row gap-5 flex-wrap justify-between">
            <FeaturesCard img={airdrop} title={'Airdrop Dispenser'}/>
            <FeaturesCard img={market} title={'NFT Marketplace'}/>
            <FeaturesCard img={game} title={'P2E Games Development'}/>
            <FeaturesCard img={acad} title={'Zuki Academy'}/>
        </div>
    </div>
    <div className="text-slate-100 py-20 px-10 wow fadeInUp" data-wow-duration="2s">
        <h1 className="text-3xl md:w-2/3 mx-auto md:text-6xl text-center font-bold wow fadeInUp" data-wow-duration="2s">Why Is Zuki Inu Built On Bitgert Chain</h1>
        <p className="pt-5 md:w-2/3 mx-auto md:text-2xl wow fadeInUp" data-wow-duration="2s">Bitgert chain projects recently have been sparking massive attention from the crypto world; this is due to the increasing developments around the bitgert chain projects. They have recorded one of the fastest growths since it was launched.</p>
        <p className="pt-5 md:w-2/3 mx-auto md:text-2xl wow fadeInUp" data-wow-duration="2s">
        Bitgert chain projects are powered with the Bitgert blockchain which is the fastest and first gasless chain in the crypto industry. This indicates that Bitgert chain projects operate with a cheaper and faster transaction rate compared to other cryptocurrencies. Furthermore, the adoption of the Bitgert chain has grown rapidly because of its zero gas fee mechanism. BRISE chain which does 100,000 within a second and the transaction fee is $0.00000001.
        </p>
        <a href="/" className=" bg-slate-800 mt-3 mx-auto text-center md:w-1/3 w-1/2 block shadow-lg py-3 px-5 text-slate-100 rounded-full">Bitgert</a>
    </div>
        </div>
    )
};
