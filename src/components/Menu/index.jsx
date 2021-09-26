import './styles.scss';

const Menu = () => {
  return (
    <>
      <ul className="menu">
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

      <div className="menu-mobile">
        <button type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Open menu" class="StyledIconBase-ea9ulj-0 cuLlVI"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </button>

        <ul>
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
    </>
  );
};

export default Menu;
