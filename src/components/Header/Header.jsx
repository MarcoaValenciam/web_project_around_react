import logo from '../../images/logo.png'; // ajusta la ruta según dónde tengas la carpeta images

export default function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src={logo} alt="Logo" />
            </div>
        </header>
    );
}
