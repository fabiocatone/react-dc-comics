import LogoDC from '../assets/img/dc-logo.png'
export default function AppHeader() {


    return (
        <header>

            <div className="container d-flex p-2">
                <img src={LogoDC} style={{ width: "100px" }} />
                <nav className="navbar navbar-expand-lg  ms-auto text-secondary text-uppercase">
                    <div class="container-fluid p-4 ">

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CHARACTERS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-primary" aria-current="page" href="#">COMICS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">MOVIES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">TV</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Games</a>
                                </li><li class="nav-item">
                                    <a class="nav-link" href="#">Collectibles</a>
                                </li><li class="nav-item">
                                    <a class="nav-link" href="#">Videos</a>
                                </li><li class="nav-item">
                                    <a class="nav-link" href="#">Fans</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Shop</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
}
