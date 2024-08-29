export default function Footer(){
    return (
        <footer id="footer" className="footer bg-base-300 text-base-content p-10">
        <nav>
            <h6 className="footer-title">NAVIGATION</h6>
            <a href="#accueil" className="link link-hover">ACCUEIL</a>
            <a href="#presentation" className="link link-hover">PRESENTATION</a>
            <a href="#competences" className="link link-hover">COMPETENCES</a>
            <a href="#projets" className="link link-hover">PROJETS</a>
        </nav>
        <nav>
            <h6 className="footer-title">CONTACT</h6>
            <a className="link link-hover">29670 Henvic</a>
            <a className="link link-hover">mathieu.dkrg@gmail.com</a>
            <a className="link link-hover">06 47 49 31 44</a>
        </nav>
        <nav>
            <h6 className="footer-title">SOCIAL</h6>
            <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/DKYU_L" target="_blank" rel="noopener noreferrer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/mathieu-de-kergariou-a9511a26a/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-current" viewBox="0 5 1036 990">
                    <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/>
                 </svg>
            </a>
            <a href="https://github.com/mdekerga" target="_blank" rel="noopener noreferrer">
                <svg  viewBox="0 -3.1 2490.3 2493" width="32" height="32" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="1245.2" cy="1243.4" fill="#fff" rx="1217.6" ry="1246.5"/>
                    <path d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"/>
                </svg>
            </a>
            </div>
        </nav>
        <hr className="my-4 border-t-2 border-gray-300" />
            <p>Copyright © {new Date().getFullYear()} - Mathieu de Kergariou</p>
        </footer>
    )
}

 