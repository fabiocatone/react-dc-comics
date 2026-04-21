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

const MenuDC = [
    {name: "Terms Of use",
        id:1,
        link: "/TermsOfUse",
    },{name: "Privacy Policy (New)",
        id:2,
        link: "/PrivacyPolicy",
    },{name: "Ad Choices",
        id:3,
        link: "/AdChoices",
    },{name: "Advertising",
        id:4,
        link: "/Advertising",
    },{name: "Jobs",
        id:5,
        link: "/Jobs",
    },{name: "Subscriptions",
        id:6,
        link: "/Subscriptions",
    },{name: "Talent Workshops",
        id:7,
        link: "/TalentWorkshops",
    },{name: "CPSC Certificates",
        id:8,
        link: "/CPSCCertificates",
    },{name: "Ratings",
        id:9,
        link: "/Ratings",
    },{name: "Shop Help",
        id:10,
        link: "/ShopHelp",
    },{name: "Contact Us",
        id:11,
        link: "/ContactUs",
    }
]

const MenuSites = [
    {name: "DC",
        id:1,
        link:"/DC",
    },

    {name: "MAD Magazine",
        id:2,
        link:"/Mad Magazine",
    },
    {name: "DC Kids",
        id:3,
        link:"/DCKids",
    },
    {name: "DC Universe",
        id:4,
        link:"/DCUniverse",
    },
    {name: "DC Power Visa",
        id:5,
        link:"/DCPowerVisa",
    }
]

return (
    <footer>
       <div className=" d-flex">
        <section className="listDcComics p-3">
            <h5 className="text-white mx-4">DC COMICS</h5>
            <ul>
            {menuFooter.map((item)=>
            (
               <li key={item.id}><a className="text-secondary" href={item.link}> {item.name} </a></li> 
            ))}
            </ul>

            <section className="listDcShop p-3">
            <h5 className="text-white mx-2"> SHOP </h5>
            <ul>
            {menuShop.map((item)=>
            (
               <li key={item.id}><a className="text-secondary " href={item.link} > {item.name} </a></li> 
            ))}
            </ul>
        </section>
        </section>

        

         <section className="listDc p-3">
            <h5 className="text-white mx-4"> DC </h5>
            <ul>
            {MenuDC.map((item)=>
            (
               <li key={item.id}><a className="text-secondary me-1" href={item.link}> {item.name} </a></li> 
            ))}
            </ul>
        </section>

        <section className="listDc p-3">
            <h5 className="text-white mx-4"> SITES </h5>
            <ul>
            {MenuSites.map((item)=>
            (
               <li key={item.id}><a className="text-secondary me-1" href={item.link} key={item.id}> {item.name} </a></li> 
            ))}
            </ul>
        </section>
       </div>
    </footer>
)


}



