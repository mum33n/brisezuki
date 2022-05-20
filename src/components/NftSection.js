import img1 from '../assets/1.png'
import InfoCard from './cards/InfoCard'

export default function NftSection() {
    const style={
        position:'absolute',
        width:'100%',
        height:"100%",
        left:'0',
        top:'0',
        backgroundColor:'#000d'
    }
    return(<div className="py-10 w-full px-5 relative">
        <h1 className="font-bold text-center text-slate-800 text-3xl md:text-6xl wow fadeInUp" data-wow-duration="2s">NFT MARKETPLACE PREVIEW</h1>
        <div className='pt-10 flex-wrap gap-10 justify-center flex'>
            <InfoCard name={'Bored Ape'} src={img1} price={'100'}/>
            <InfoCard src={img1} price={'100'}/>
            <InfoCard src={img1} price={'100'}/>
            <InfoCard src={img1} price={'100'}/>
            <InfoCard src={img1} price={'100'}/>
        </div>
        <div className='overlay flex items-center justify-center' style={style}>
            <div className='text-3xl'>Coming Soon...</div>
        </div>
    </div>)
    
};
