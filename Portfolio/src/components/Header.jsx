
export default function Header(){
    return (
        <header id="header">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                        <a className="text-xl">MDK</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="#competences">COMPETENCES</a></li>
                            <li><a href="#projets">PROJETS</a></li>
                            <li><a href="#footer">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
        </header>
    )
}
