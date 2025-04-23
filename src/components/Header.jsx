import styles from './Header.module.css';

import igniteLogo from '../assents/Ignite simbol.svg';

export function Header(){
    return(
      
        <header className={styles.header} >
        <img src={igniteLogo} alt="LogoTipo Ignite" />
        
        </header>

    );
}