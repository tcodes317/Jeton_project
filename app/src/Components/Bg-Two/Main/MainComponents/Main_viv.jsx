import Img___i from "./../../../../assets/skill-icons_instagram.png";
import Img___ii from "./../../../../assets/Twitter.png";
import Img___iii from "./../../../../assets/Vector.png";
import Img___iv from "./../../../../assets/logos_youtube-icon.png";
import Img___v from "./../../../../assets/devicon_facebook.png";

function Main_viv(){
    return(
        <>
            <div className="relative pt-12" id="container">
                <div className="">
                    <button className="border-2 p-4 py-2 rounded-md border-black">
                        <span className="font-bold">EN</span>
                        <i className="fa fa-angle-down ml-2"></i>
                    </button>
                </div>
                <div className="py-6">
                    <div className="flex items-center justify-between">
                        <nav className="space-x-4 w-8/12">
                            <a>Developers</a>
                            <a>JetonCash</a>
                            <a>Jeton Card</a>
                            <a>About us</a>
                            <a>Terms & Conditions</a>
                            <a>Information Security Policy</a>
                            <a>Fees & Limits</a>
                            <a>FAQ</a>
                            <a>Privacy Policy</a>
                            <a>AML Policy</a>
                            <a>Cookie Policy</a>
                            <a>Media & Assets</a>
                            <a>Blog</a>
                            <a>Newsroom</a>
                        </nav>
                        <div className="flex items-center space-x-6">
                            <img src={Img___i} srcset={Img___i} />
                            <img src={Img___v} srcset={Img___ii} />
                            <img src={Img___iii} srcset={Img___iii} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main_viv;