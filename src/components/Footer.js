import logo from '../assets/LOGO.png'
export default function Footer(params) {
    return(
        <div className="p-5">
            <div className="flex justify-between items-center">
                <div>
                    <img src={logo} alt='logo' width='75px'/>
                </div>
                <div className="flex justify-between">
                    <a href="https://twitter.com/Zuki_Brise" className="pr-5"><span></span> Twitter</a>
                    <a href="https://t.me/ZUKI_Brise" ><span></span> Telegram</a>
                </div>
            </div>
            <div>&copy; 2022, ZUKI BRISE</div>
        </div>
    )
};
