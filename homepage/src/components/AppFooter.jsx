export default function AppFooter () {
const menuFooter = 
[{
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
const menuShop = [
    {name: "Shop DC",
        id:1,
        link: "/ShopDC",
    },
     {name: "Shop DC Collectibles",
        id:2,
        link: "/ShopDCCollectibles",
    }
]

return (
    <footer>
       <div className="container">
        <section className="listDcComics p-3">
            <h5 className="text-white mx-4">DC COMICS</h5>
            <ul>
            {menuFooter.map((item)=>
            (
               <li><a className="text-secondary" href={item.link} key={item.id}> {item.name} </a></li> 
            ))}
            </ul>
        </section>

        <section className="listDcComics p-3">
            <h5 className="text-white mx-4"> SHOP </h5>
            <ul>
            {menuShop.map((item)=>
            (
               <li><a className="text-secondary" href={item.link} key={item.id}> {item.name} </a></li> 
            ))}
            </ul>
        </section>
       </div>
    </footer>
)


}



