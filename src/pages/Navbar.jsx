const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg" id="topo">
            <div className="container-fluid">
                <span style={{ fontSize: '3rem' }}>Angélica Flores</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <input type="checkbox" id="menu-hamburguer" />
                    <label for="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer">

                            </span>
                        </div>
                    </label>

                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#Education">Educação</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact">Contato</a>
                        </li>
                        <li className="nav-item">
                            {props.darkmode}
                        </li>
                    </ul>
                </div>
            </div>
            <a class="position-fixed bottom-0 end-0 m-4" href="#topo" role="button">
                <div id="hand">
                    <div id="dedo1"></div>
                    <div id="dedo2"></div>
                    <div id="dedo3"></div>
                    <div id="dedo4"></div>
                    <div id="dedo5"></div>
                    <div id="palma"></div>
                    <div id="pulso"></div>
                </div>
                </a>
        </nav>
    )
}

export default Navbar;