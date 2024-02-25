import logo from '../assets/logo.svg'

import style from './Header.module.css'

export function Header() {
    return (
        <div className={style.headerContent}>
            <img 
                className={style.logo} 
                src={logo} 
                alt='Logo da página'
            />
        </div>
    )
}