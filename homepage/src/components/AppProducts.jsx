import DigitalImg from "../assets/img/buy-comics-digital-comics.png"
import DCMerchandiseImg from "../assets/img/buy-comics-merchandise.png"
import SubscriptionsImg from "../assets/img/buy-comics-subscriptions.png"
import ComicShopImg from "../assets/img/buy-comics-shop-locator.png"
import PowerVisaImg from "../assets/img/buy-dc-power-visa.svg"

export default function AppProducts () {
const products = [
    { name: "digital comics",
        id: 1,
        link: "/digitalcomics",
    thumb : DigitalImg},
        { name: "dc merchandise",
            thumb : DCMerchandiseImg,
        id: 2,
        link: "/dcmerchandise"},
        { name: "subscriptions",
            thumb : SubscriptionsImg,
        id: 3,
        link: "/subscriptions"},
        { name: "comic shop locator",
            thumb : ComicShopImg,
        id: 4,
        link: "/comicshoplocator"},
        { name: "dc power visa",
            thumb : PowerVisaImg,
        id: 5,
        link: "/dcpowervisa"},]

         return (
<div className="products  d-flex bg-primary justify-content-center">
{products.map((product =>
    (<div className="row d-flex align-items-center m-4 justify-content-center"><img src = {product.thumb} className="col-3"/> 
        <p key={product.id} className=" listProduct text-white text-uppercase p-1 col-4">{product.name}</p>
    </div>
    ) 
))}
</div>

   )
    }

  
