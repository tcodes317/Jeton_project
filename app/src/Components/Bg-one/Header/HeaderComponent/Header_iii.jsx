import Circle from "./../../../../assets/circle.png";
import Phone_i from "./../../../../assets/phone-1.png";
import Phone_ii from "./../../../../assets/phone-2.png";
import Phone_iii from "./../../../../assets/phone-3.png";

function Header_iii(){
    return(
        <>
            <div className="relative">
                <img src={Circle} className="absolute ml-20"/>
                <div className="flex items-center">
                    <img src={Phone_i} className="absolute w-40 left-96 top-80" id="img_i" />
                    <img src={Phone_ii} className="absolute w-60 left-96 top-40" id="img_ii"/>
                    <img src={Phone_iii} className="absolute w-60 left-96 top-80" id="img_iii" />
                </div>
            </div>
        </>
    )
}

export default Header_iii;