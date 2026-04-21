import LogoDC from '../assets/img/dc-logo.png'
export default function AppHeader() {
const menuNav = [{
    name:"Characters",
    link: "/charachters"},
    {name:"Comics", link: "/comics"},
    {name:"Movies", link: "/movies"},
    {name:"TV", link: "/tv"},
    {name:"Games", link: "/games"},
    {name:"Collectibles", link: "/collectibles"},
    {name:"Videos", link: "/videos"},
    {name:"Fans", link: "/fans"},
    {name:"News", link: "/news"},
    {name:"Shop", link: "/shop"}
]

    return (
        <header>

            <div className="container d-flex ">
                <img src={LogoDC} style={{ width: "60px", height:"60px"}} className='my-2'  />
                <nav className="navbar navbar-expand-lg  ms-auto text-secondary text-uppercase">
                    <div class=" p-2 ">

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                {menuNav.map((item,index) =>
                                    (<li class="nav-item">
                                    <a class="nav-link" key={index} href={item.link}>{item.name}</a>
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
