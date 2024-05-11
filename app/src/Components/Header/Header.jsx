import FontAwesome from "font-awesome";
function Header(){
    return (
        <>
            <div className="mx-auto bg-black-500">
                <header className="flex items-center justify-between">
                    <div className="">
                        <h1 className="text-4xl font-intel">Jeton</h1>
                    </div>
                    <div className="relative">
                        <nav>
                            <a>Help</a>
                            <a>Login</a>
                            <button className="border-2 rounded-md">
                                <span>Sign Up</span>
                                <FaArrowRight />
                            </button>
                            <div className="relative">
                                <button className="flex items-center justify-between">
                                    <span>EN</span>
                                    <FaArrowRight />
                                </button>
                                <nav className="hidden">
                                    <div>Deutsch</div>
                                    <div>Espanol</div>
                                    <div>Portugues</div>
                                    <div>Russian</div>
                                    <div>Turkce</div>
                                    <div>Chineese</div>
                                    <div>Dutch</div>
                                    <div>Polski</div>
                                    <div>Italiano</div>
                                    <div>Francias</div>
                                    <div>Bokmal</div>
                                    <div>Thai</div>
                                    <div>Vietnamese</div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;