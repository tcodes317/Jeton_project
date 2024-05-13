import Apple from "./../../../../assets/Apple.svg";
import Google from "./../../../../assets/Googleplay.svg";

function Header_iv(){
    return(
        <>
            <div className="absolute left-96 bottom-24" id="ap">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white border-r-4 pr-4 space-x-2">
                        <img src={Apple} srcset={Apple} />
                        <div>Apple store</div>
                    </div>
                    <div className="flex items-center text-white pl-4 space-x-2">
                        <img src={Google} srcset={Google} />
                        <div>Google play</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header_iv;