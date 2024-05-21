import Img____i from "./../../../../assets/skill-icons_instagram.png";
import Img____ii from "./../../../../assets/Twitter.png";
import Img____iii from "./../../../../assets/Vector.png";
import Img____iv from "./../../../../assets/logos_youtube-icon.png";
import Img____v from "./../../../../assets/devicon_facebook.png";
import ds from "./../../../../assets/cfecert-ukas-logo.png";
import gh from "./../../../../assets/cyber1.png";
import hjk from "./../../../../assets/cyber2.png";
import wer from "./../../../../assets/fastest-growing.jpg";
import uip from "./../../../../assets/cfecert-iso-logo.png";

function Main_viv(){
    return(
        <>
            <div className="relative pt-12" id="container">
                <div className="xxxs:ml-4 md:ml-0">
                    <button className="border-2 p-4 py-2 rounded-md border-black">
                        <span className="font-bold">EN</span>
                        <i className="fa fa-angle-down ml-2"></i>
                    </button>
                </div>
                <div className="py-6">
                    <div className="xxxs:space-y-8 md:space-y-0 flex md:flex-row xxxs:flex-col md:items-center justify-between">
                        <nav className="md:space-x-4 md:w-8/12 xxxs:flex xxxs:flex-col md:block">
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Developers</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">JetonCash</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Jeton Card</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">About us</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Terms & Conditions</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Information Security Policy</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Fees & Limits</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">FAQ</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Privacy Policy</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">AML Policy</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Cookie Policy</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Media & Assets</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Blog</a>
                            <a className="xxxs:p-2 md:p-0 xxxs:px-6">Newsroom</a>
                        </nav>
                        <div className="flex items-center space-x-6 xxxs:ml-6 md:ml-0">
                            <img src={Img____i} srcset={Img____i} />
                            <img src={Img____v} srcset={Img____ii} />
                            <img src={Img____iii} srcset={Img____iii} />
                            <img src={Img____iv} srcset={Img____iv} />
                            <img src={Img____ii} srcset={Img____ii} />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row xxxs:flex-col md:items-center py-6">
                    <div className="flex items-center space-x-4 md:w-1/12 xxxs:w-3/12">
                        <img src={ds} srcset={ds} className="w-6/12" />
                        <img src={gh} srcset={gh} className="w-6/12" />
                        <img src={hjk} srcset={hjk} className="w-6/12" />
                        <img src={wer} srcset={wer} />
                        <img src={uip} srcset={uip} className="w-6/12" />
                    </div>
                    <div className="relative md:left-72 xxxs:mt-8 md:mt-0">
                        <h4 className="font-bold w-12/12 text-gray-400">Certified International <br /> Cyber Security Standards</h4>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-gray-500 py-4 md:w-full">Jeton Bank Limited is licensed and authorised by the Financial Services Unit, Ministry of Finance of the Commonwealth of Dominica licensed as a banking institution under the Offshore Banking Act, fully authorised to provide servies to clients worldwide except for Commonwealth of Dominica citizens and residents, under the prudential supervision of the Financial Services Unit. Jeton Bank Limited is registered in the Commonwealth of Dominica company Number 2022/CO175 with its registered address at 1st Floor, 43 Greate George Street, Roseau, Commonwealth of Dominica.</p>
                    <p className="font-bold text-gray-500 py-4 md:w-full">The Jeton Card Account and Card are issued by UAB, Finansines paslaugos, Contis who are authorised by the Bank of Lithuania under the electronic money institution license No. 53. The Jeton Card Account and Card are electronic money products which are not covered by the Deposit insurance System of the Republic of Lithuania, the funds will be safeguarded by UAB, Finansines paslaugos, Contis"</p>
                </div>
            </div>
        </>
    )
}
export default Main_viv;