import "./header.css"
function Header() {
    return(
        <div className="header-main">
            {/* header section start */}
            <div className="header">
                <h1>SIJON</h1>
                <nav className="nav">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
            {/* header section end */}
            {/* header aside section start */}
            <div className="aside">
                <h1>NIOGI</h1>
                <nav className="nav-aside">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
            {/* header asider section end */}
        </div>

    )
}


export default Header;