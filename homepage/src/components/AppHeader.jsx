import LogoDC from '../assets/img/dc-logo.png'
export default function AppHeader() {
const menuNav = ["Characters","Comics","Movies","TV","Games","Collectibles","Videos","Fans","News","Shop",]

    return (
        <header>

            <div className="container d-flex p-2">
                <img src={LogoDC} style={{ width: "100px" }} />
                <nav className="navbar navbar-expand-lg  ms-auto text-secondary text-uppercase">
                    <div class="container-fluid p-4 ">

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                {menuNav.map((item) =>
                                    (<li class="nav-item">
                                    <a class="nav-link" href="#">{item}</a>
                                </li>)
                                )}
                                
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
}
