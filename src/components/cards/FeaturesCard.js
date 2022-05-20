export default function FeaturesCard({img, title, exp}) {
    return(
        <div className="text-slate-100 text-center cursor-pointer mb-10 hover:bg-slate-900 bg-shade w-full md:w-30 px-3 py-10  box ">
                <div className="bg-slate-100 mb-5 mx-auto p-3 rounded-full" style={{width:'70px'}}>
                    <img className="block" src={img}/>
                </div>
                <div>
                    <h1 className="font-bold mb-2">{title}</h1>
                    <p>{exp}</p>
                </div>
        </div>
    )
    
};
