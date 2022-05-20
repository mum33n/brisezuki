export default function Footer(params) {
    return(
        <div className="bg-slate-900 p-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">LOGO</h1>
                </div>
                <div className="flex justify-between">
                    <a href="/" className="pr-5"><span></span> Twitter</a>
                    <a href="/" ><span></span> Telegram</a>
                </div>
            </div>
        </div>
    )
};
