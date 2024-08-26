
export default function Header(){
    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                        <a className="text-xl">MDK</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li><a href="#competences">COMPETENCES</a></li>
                        <li><a href="#projets">PROJETS</a></li>
                        <li><a href="#footer">CONTACT</a></li>
                        <li>
                            <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                            </details>
                        </li>
                        </ul>
                    </div>
                </div>
        </header>
    )
}