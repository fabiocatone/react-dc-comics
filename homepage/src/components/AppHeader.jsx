import LogoDC from '../assets/img/dc-logo.png'
export default function AppHeader() {
const menuNav = [{
    name:"Characters",
    link: "/charachters",
id:1},
    {name:"Comics", link: "/comics", id:2},
    {name:"Movies", link: "/movies", id:3},
    {name:"TV", link: "/tv", id:4},
    {name:"Games", link: "/games", id:5},
    {name:"Collectibles", link: "/collectibles", id:6},
    {name:"Videos", link: "/videos", id:7},
    {name:"Fans", link: "/fans", id:8},
    {name:"News", link: "/news", id:9},
    {name:"Shop", link: "/shop", id:10}
]

    return (
        <header>

            <div className="container d-flex ">
                <img src={LogoDC} style={{ width: "60px", height:"60px"}} className='my-2'  />
                <nav className="navbar navbar-expand-lg  ms-auto text-secondary text-uppercase">
                    <div className=" p-2 ">

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {menuNav.map((item) =>
                                    (<li key={item.id} className="nav-item">
                                    <a className="nav-link" href={item.link}>{item.name}</a>
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
