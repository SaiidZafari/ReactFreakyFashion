import { Link } from "react-router-dom";


function Footer() {
 
  return (
    <>
      <div className="container mt-3 mb-3 footerDiv text-start">
        <div className="col-md-12 row services">
          <div className="col-md-3 service">
            <div>
              <img
                className="col-md-3"
                src={process.env.PUBLIC_URL + "/Images/footer-1.png"}
                alt="Accept"
              />
              <span> Gratis frakt och returer</span>
            </div>
            <ul className="navbar-nav text-start text-decoration-none ">
              <li className="fw-bold">Shopping</li>
              <li className="navbar-nav text-start text-decoration-none ">
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">
                  Vinterjackor
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Pufferjackor</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Kappa</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Tran</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 service">
            <div>
              <img
                className="col-md-3"
                src={process.env.PUBLIC_URL + "/Images/footer-2.png"}
                alt="Accept"
              />
              <span>Express frakt</span>
            </div>
            <ul className="navbar-nav ">
              <li className="fw-bold">Minesidor</li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Mine Ordar</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Mitt Konto</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col-md-3 service">
            <div>
              <img
                className="col-md-3"
                src={process.env.PUBLIC_URL + "/Images/footer-3.png"}
                alt="Accept"
              />
              <span>Säkra betaling</span>
            </div>
            <ul className="navbar-nav">
              <li className="fw-bold">Kundtjänst</li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Returnpolicy</Link>
              </li>
              <li>
                <Link className="text-decoration-none text-reset" to="https://www.google.dk/">Intagritatepolicy</Link>
              </li>
            </ul>
          </div>
          <span className="col-md-3 service">
            <img
              className="col-md-3"
              src={process.env.PUBLIC_URL + "/Images/footer-4.png"}
              alt="Accept"
            />
            <span>Nyheter varje dag</span>
          </span>
        </div>
      </div>
    </>
  );
}
 
export default Footer;
