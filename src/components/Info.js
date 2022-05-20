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
    <div className="text-slate-100 pb-20 px-10 wow fadeInUp" data-wow-duration="2s">
        <h1 className="text-3xl md:w-2/3 mb-10 mx-auto md:text-6xl text-center font-bold wow fadeInUp" data-wow-duration="2s">Why Is Zuki Inu Built On Bitgert Chain</h1>
        <div className="flex flex-row gap-5 flex-wrap justify-between">
            <FeaturesCard title={'Fast & Scalable'} exp={'100,000 Transactions per second & 15s block'}/>
            <FeaturesCard title={'Decentralized'} exp={'Fully decentralized blockchain with high-speed transactions'}/>
            <FeaturesCard title={'Zero Gas Fee'} exp={'Zero cost gas fee for all the transactions on our blockchain'}/>
        </div>
    </div>
        </div>
    )
};
