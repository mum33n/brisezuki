import RoadItem from "./RoadItem";

export default function Roadmap(params) {
    return(<div className="text-slate-800 pb-20 px-10">
        <h1 className="text-6xl text-center text-3xl md:text-6xl font-bold">Roadmap</h1>
        <div className="flex items-center flex-col my-20 md:flex-row gap-10">
            <div className="w-100 md:w-1/2 shadow-lg bg-slate-100 p-5 wow fadeInUp" data-wow-duration="2s">
                <h1 className="font-bold">Phase 1</h1>
                <div>Token supply (100,000,000,000 ZUK-INU Tokens)</div>
                <div>Launch Twitter, Telegram and other social media</div>
                <RoadItem title={'Meme, art contest for whitelist'}/>
                <RoadItem title={'Launch presale on Doken.exchange once KYC passed'}/>
                <RoadItem title={'Launch live on thesphyxn.co after presale'}/>
                <RoadItem title={'Launch staking on Doken.exchange (ZUKI/ZUKI pool)'}/>
                <RoadItem title={'Launch partnership staking on Doken.exchange (ZUKI/other pool)'}/>
                <RoadItem title={'Initiate partnership with other projects on Brise such as Brisezilla, Broge'}/>
                <RoadItem title={'Three categories of NFTs giveways for (presale buyers and Liquidity providers, 90days pool stakers)'}/>
                <RoadItem title={'Marketing push to spread more awareness about ZUKI and Bitgert Blockchain with (Bloomberg, Yahoo Finance)'}/>
                <RoadItem title={'Coin listing submission'}/>
                <RoadItem title={'Partnership with Mixed Reality and Brise Paradies '}/>
                <RoadItem title={'Explore additional partnerships with other Brise projects'}/>
                <RoadItem title={'Launch ZUKI Bitgert academy were tutors educate old and new member on Bitgert chain about Crypto, NFTs, DEFI, Security. '}></RoadItem>

            </div>
            <div className="w-full bg-slate-100 md:w-1/2 shadow-lg p-5 wow fadeInUp" data-wow-duration="2s">
                <h1 className="font-bold">Phase 2</h1> 
                <RoadItem title={'Large influencer marketing push'}/>
                <RoadItem title={'Develop script/contract for Airdrop Distribution/dispenser on Brise Chain, different projects can airdrop part of their token to brise, zuki, evo, bpad,ypc holders and via our tool.'}/>
                <RoadItem title={'Revaluate project performance'}/>
                <RoadItem title={'Initiate social media airdrops for shillers and project development sopporters'}/>
                <RoadItem title={'First donation to a community voted charity'}/>
                <RoadItem title={'Contract Audit'}/>
                <RoadItem title={'launch ZUKI Swap V0.1'}/>
            </div>
        </div>
        <div className="flex  flex-col my-20 md:flex-row gap-10 wow fadeInUp" data-wow-duration="2s">
            <div className="w-full bg-slate-100 md:w-1/2 shadow-lg p-5"> 
                <h1 className="font-bold">Phase 3</h1>
                <RoadItem title={'Large influencer marketing push'}/>
                <RoadItem title={'Develop script/contract for Airdrop Distribution/dispenser on Brise Chain, different projects can airdrop part of their token to brise, zuki, evo, bpad,ypc holders and via our tool.'}/>
                <RoadItem title={'Revaluate project performance'}/>
                <RoadItem title={'Initiate social media airdrops for shillers and project development sopporters'}/>
                <RoadItem title={'First donation to a community voted charity'}/>
                <RoadItem title={'Contract Audit'}/>
                <RoadItem title={'launch ZUKI Swap V0.1'}/>
            </div>
            <div className="w-full bg-slate-100 md:w-1/2 shadow-lg p-5 wow fadeInUp" data-wow-duration="2s"> 
            <h1 className="font-bold">Phase 4</h1>
                <RoadItem title={'Website Redesign'}/>
                <RoadItem title={'Mint first batch of ZUKI NFTs to be sold on the marketplace'}/>
                <RoadItem title={'Collaboration with various NFT artists'}/>
                <RoadItem title={'Launch NFTs marketplace'}/>
                <RoadItem title={'NFT staking'}/>
                <RoadItem title={'Explore other charitable relationships'}/>
                <RoadItem title={'Gaming platform'}/>
                <RoadItem title={'Roadmap Expansion'}/>
            </div>
        </div>
           
    </div>)
};
