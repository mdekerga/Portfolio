export default function Header() {
  return (
    <header id="header">
      <div className="navbar z-50 fixed  ">
        <div className="flex-1">
          <a className="text-primary text-xl">Mathieu de Kergariou</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-primary" href="#competences">
                COMPETENCES
              </a>
            </li>
            <li>
              <a className="text-primary" href="#projets">
                PROJETS
              </a>
            </li>
            <li>
              <a className="text-primary" href="#footer">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
