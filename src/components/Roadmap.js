import RoadItem from "./RoadItem";

export default function Roadmap(params) {
    return(<div className="text-slate-100 pb-20 px-10">
        <h1 className="text-6xl text-center text-2xl md:text-6xl font-bold">Roadmap</h1>
        <div className="slick">
        <div className="container1">
                        <div className="timeline">
                          <ul> 
                            <li className="">
                              <div className="timeline-content">
                                <p className="date">PHASE 1</p> 
                                <ul className="road-lists">
                                <RoadItem checked title={'Launch of website'}/>
                                <RoadItem title={'Initiate Social Media Airdrops'}/>
                                <RoadItem title={'Launch of Presale'}/>
                                <RoadItem title={'Launch on thsphyxn'}/>
                                <RoadItem title={'Initial Partnership'}/>
                                <RoadItem title={'Marketing with (Bloomberg, Yahoo Finance)'}/>
                                <RoadItem title={'Coin Listing Submission'}/>
                                </ul>
                              </div>
                            </li>
                            <li className="">
                              <div className="timeline-content">
                                <p className="date">PHASE 2</p>
                                <ul className="road-lists">
                                    <RoadItem title={'Launch ZUKI Bitgert academy'}/>
                                    <RoadItem title={'Large Influencer Marketing Push'}/>
                                    <RoadItem title={'Develop script for airdrop dispenser'}/>
                                    <RoadItem title={'Revaluate project performance'}/>
                                </ul> 
                              </div>
                            </li>
                            <li className="">
                              <div className="timeline-content">
                                <p className="date">PHASE 3</p>
                                <ul className="road-lists">
                                    <RoadItem title={'Meme, Art Contest for whitelist'}/>
                                    <RoadItem title={'Mint first batch of ZUKI NFTs'}/>
                                    <RoadItem title={'Explore additional partnerships'}/>
                                    <RoadItem title={'First donation to a community voted charity'}/>
                                    <RoadItem title={'Contract Audit'}/>
                                    <RoadItem title={'Launch of ZUKI Bridge v0.1'}/>
                                </ul> 
                              </div>
                            </li>
                            <li className="">
                              <div className="timeline-content">
                                <p className="date">PHASE 4</p>
                                <ul className="road-lists">
                                    <RoadItem title={'Website Redesign'}/>
                                    <RoadItem title={'Collaboration with various NFT artists'}/>
                                    <RoadItem title={'Lauch of NFT Marketplace'}/>
                                    <RoadItem title={'NFT staking'}/>
                                    <RoadItem title={'Explore other charitable relationships'}/>
                                    <RoadItem title={'Gaming platform development'}/>
                                    <RoadItem title={'Roadmap Expansion'}/>
                                </ul> 
                              </div>
                            </li>
                        
                          </ul>
                        </div>
                </div>
        </div>
           
    </div>)
};
