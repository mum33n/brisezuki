import { useState } from "react"

export default function Navbar(params) {
    const [toggle, isTogg]=useState(false)
    return(
        <nav className="py-5 w-full px-10 flex-wrap items-center justify-between flex">
            <a href="#" className="text-slate-100 text-4xl font-bold"><h1>LOGO</h1></a>
            <div className="hidden md:flex">
                <a href="#roadmap" className="ml-3">ROADMAP</a>
                <a href="#roadmap" className="ml-3">ACADEMY</a>
            </div>
            <div onClick={()=>{
                isTogg((prev)=>!prev)
            }} className="block bars absolute top-5 right-2 md:hidden">
                    <span className="bg-slate-100 bar"></span>
                    <span className="bar bg-slate-100"></span>
                    <span className="bar bg-slate-100"></span>
                </div>
            {toggle && <div onClick={()=>{isTogg((prev)=>!prev)}} className="md:hidden bg-slate-800 flex flex-col w-full items-center justify-center fixed top-0 left-0 h-full">
                <a href="#roadmap">ROADMAP</a>
                <a href="#roadmap">ACADEMY</a>
            </div>}
        </nav>
    )
};
