import Circle from "./../../../../assets/circle.png";
import Phone_i from "./../../../../assets/phone-1.png";
import Phone_ii from "./../../../../assets/phone-2.png";
import Phone_iii from "./../../../../assets/phone-3.png";

function Header_iii(){
    return(
        <>
            <div className="relative">
                <img src={Circle} className="absolute md:ml-20" id="circle" />
                <div className="flex items-center">
                    <img src={Phone_i} className="absolute xxxs:w-12 xxxs:top-48 xxxs:ml-28 md:w-40 md:left-96 md:top-80" id="img_i" />
                    <img src={Phone_ii} className="absolute xxxs:w-2/12 xxxs:top-36 xxxs:ml-40 xxxs:z-10 md:w-60 md:left-96 md:top-40" id="img_ii" />
                    <img src={Phone_iii} className="absolute xxxs:w-16 xxxs:top-44 md:w-60 xxxs:ml-52 md:left-96 md:top-80" id="img_iii" />
                </div>
            </div>
        </>
    )
}

export default Header_iii;