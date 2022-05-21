export default function InfoCard({src, name, price}) {
    return(<div className="bg-slate-100 w-2/5 md:w-1/6 pb-5 rounded-lg shadow-lg">
        <img src={src} className="mx-auto d-block"/>
        <div className="flex text-slate-800 p-2 justify-between">
            <div className="flex">
                {name}
            </div>
            <div className="text-slate-900 flex flex-col">
                {price}
            </div>
        </div>

    </div>)
};
