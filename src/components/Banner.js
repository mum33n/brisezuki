export default function Banner(params) {
    return(
        <div className="bg-darkBlue">
            <div className="py-20 px-10">
                <div className="w-100 md:w-7/12">
                    <h1 className="text-4xl md:text-6xl font-bold text-left wow fadeInUp" data-wow-duration="3s"> ZUKI Brise is a meme Project built on Zero Gas Fee Chain<br/>'BITGERT CHAIN'</h1>
                    <div className="text-lg pt-3 pb-10 text-left wow fadeInUp" data-wow-duration="5s">
                    Zuki Bitgert Academy is a place where people get free education about zero gas fee, Security, DEFI, NFT, and Merit of Bitgert chain over Sol, BSC, ETH including others chain. This is to bring BRC20 to mass adoption.
                    </div>
                    <a href="/" className=" hover:bg-transparent hover:text-slate-100 hover:border-2 hover:border-slate-100 bg-slate-200 inline-block shadow-lg py-3 px-5 text-slate-800 rounded-full">Buy Zuki Coin</a>
                </div>
            </div>
        </div>
    )
};
