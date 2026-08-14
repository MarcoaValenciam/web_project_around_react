import logo from '../../../images/logo.svg';

export default function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logo} alt="Logo" />
            </div>
        </header>
    );
}
