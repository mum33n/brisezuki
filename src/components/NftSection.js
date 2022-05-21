import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import InfoCard from './cards/InfoCard'

export default function NftSection() {
    const style={
        position:'absolute',
        width:'100%',
        height:"100%",
        left:'0',
        top:'0',
        backgroundColor:'#000b'
    }
    return(<div className="py-10 w-full px-5 relative">
        <h1 className="font-bold text-center text-slate-100 text-3xl md:text-6xl wow fadeInUp" data-wow-duration="2s">NFT MARKETPLACE PREVIEW</h1>
        <div className='pt-10 flex-wrap flex-row gap-10 justify-center flex'>
            <InfoCard name={'Bored Ape'} src={img1} price={'100'}/>
            <InfoCard src={img2} price={'100'}/>
            <InfoCard src={img3} price={'100'}/>
            <InfoCard src={img4} price={'100'}/>
            <InfoCard src={img5} price={'100'}/>
        </div>
        <div className='overlay flex items-center justify-center' style={style}>
            <div className='text-3xl'>Coming Soon...</div>
        </div>
    </div>)
    
};
