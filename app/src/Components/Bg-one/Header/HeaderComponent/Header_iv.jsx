import Apple from "./../../../../assets/Apple.svg";
import Google from "./../../../../assets/Googleplay.svg";

function Header_iv(){
    return(
        <>
            <div className="absolute md:left-96 xxxs:left-24 md:bottom-24 xxxs:bottom-4" id="ap">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white border-r-4 pr-4 space-x-2">
                        <img src={Apple} srcset={Apple} />
                        <div className="xxxs:text-xs md:text-lg">Apple store</div>
                    </div>
                    <div className="flex items-center text-white pl-4 space-x-2">
                        <img src={Google} srcset={Google} />
                        <div className="xxxs:text-xs md:text-lg">Google play</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header_iv;