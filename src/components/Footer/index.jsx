import './styles.scss';

import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/img/linkedin.svg';
import { ReactComponent as Logo } from '../../assets/img/logo-rodape.svg';

const Footer = () => {
  return (
    <footer>
      <div className="col-footer">
        <Logo />
        <p className="direitos">direitos reservados, corebiz 2021</p>

        <ul className="social">
          <li>
            <a href="https://www.facebook.com/corebiz.ag/" target="_blank">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/corebizag/" target="_blank">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/corebiz-brasil/" target="_blank">
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>

      <div className="col-footer">
        <ul className="menu-footer">
          <li>
            <a href="https://www.corebiz.ag/pt/about/" target="_blank">a corebiz</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank">serviços</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/cases/" target="_blank">cases</a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/contato/" target="_blank">contato</a>
          </li>
        </ul>
      </div>

      <div className="col-footer">
        <div className="paises">
          <h2>.Brasil</h2>

          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
          <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
        </div>
      </div>

      <div className="col-footer">
        <div className="paises">
          <h2>.Argentina</h2>

          <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
        </div>
      </div>

      <div className="col-footer">
        <div className="paises">
          <h2>.México</h2>

          <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
        </div>
      </div>

      <div className="col-footer">
        <div className="paises">
          <h2>.Chile</h2>

          <p>Roberto del Río 1137, Providencia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
