export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer bg-base-300 text-base-content p-10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Mathieu de Kergariou</h3>
            <p className="text-sm text-gray-600">Developpeur Web · Portfolio</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="Back to top"
              title="Back to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 4l-8 8h5v8h6v-8h5l-8-8z"
                  className="fill-current"
                />
              </svg>
              <span className="text-sm">Haut</span>
            </button>
          </div>

          <nav aria-label="Footer navigation" className="md:col-span-1">
            <h6 className="text-base-content-dark footer-title">Navigation</h6>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#accueil" className="text-primary link link-hover">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#presentation"
                  className="text-primary link link-hover"
                >
                  Présentation
                </a>
              </li>
              <li>
                <a href="#competences" className="text-primary link link-hover">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projets" className="text-primary link link-hover">
                  Projets
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-1">
            <h6 className="text-base-content-dark footer-title">Contact</h6>
            <address className="not-italic mt-2 text-sm space-y-1">
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=29670+Henvic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary link link-hover"
                >
                  29670 Henvic
                </a>
              </div>
              <div>
                <a
                  href="mailto:mathieu.dkrg@gmail.com"
                  className="text-primary link link-hover"
                >
                  mathieu.dkrg@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+33647493144"
                  className="text-primary link link-hover"
                >
                  +33 6 47 49 31 44
                </a>
              </div>
            </address>
          </div>

          <div className="md:col-span-1">
            <h6 className="text-base-content-dark footer-title">Réseaux</h6>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mathieu-de-kergariou-a9511a26a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (nouvelle fenêtre)"
                className="hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="fill-current"
                  viewBox="0 5 1036 990"
                  aria-hidden="true"
                >
                  <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
                </svg>
              </a>

              <a
                href="https://github.com/mdekerga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (nouvelle fenêtre)"
                className="hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  viewBox="0 -3.1 2490.3 2493"
                  width="32"
                  height="32"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="1245.2"
                    cy="1243.4"
                    fill="#fff"
                    rx="1217.6"
                    ry="1246.5"
                  />
                  <path d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Mathieu de Kergariou</p>
          <p>
            Conçu avec{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            •
            <a href="/" className="ml-2 text-primary link link-hover">
              Retour à l'accueil
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
