import { useState } from "react"
import logo from '../assets/LOGO.png'

export default function Navbar(params) {
    const [toggle, isTogg]=useState(false)
    return(
        <nav style={{zIndex:100000}} className="py-2 sticky top-0 left-0 bg-shade w-full px-10 flex-wrap items-center justify-between flex">
            <a href="#" className="text-slate-100 text-4xl font-bold"><img src={logo} className='block' width='75px' alt="logo"/></a>
            <div className="hidden md:flex">
                <a href="#why" className="ml-3 hover:text-slate-300">WHY?</a>
                <a href="#roadmap" className="ml-3 hover:text-slate-300">ROADMAP</a>
                <a href="#tokenomics" className="ml-3 hover:text-slate-300">TOKENOMICS</a>
                <a href="https://t.me/ZUKI_Bitgert_Academy" className="ml-3 hover:text-slate-300">ACADEMY</a>
                
            </div>
            <div onClick={()=>{
                isTogg((prev)=>!prev)
            }} className="block bars absolute top-7 right-5 md:hidden">
                    <span className="bg-slate-100 bar"></span>
                    <span className="bar bg-slate-100"></span>
                    <span className="bar bg-slate-100"></span>
                </div>
            {toggle && <div onClick={()=>{isTogg((prev)=>!prev)}} className="md:hidden bg-slate-800 flex flex-col w-full items-center justify-center fixed top-0 left-0 h-full">
            <a href="#why" className="ml-3 hover:text-slate-300">WHY?</a>
                <a href="#roadmap" className="ml-3 hover:text-slate-300">ROADMAP</a>
                <a href="#tokenomics" className="ml-3 hover:text-slate-300">TOKENOMICS</a>
                <a href="https://t.me/ZUKI_Bitgert_Academy" className="ml-3 hover:text-slate-300">ACADEMY</a>
            </div>}
        </nav>
    )
};
