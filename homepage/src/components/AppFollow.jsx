import FbImg from "../assets/img/footer-facebook.png"
import TwitterImg from "../assets/img/footer-twitter.png"
import YoutubeImg from "../assets/img/footer-youtube.png"
import PinterestImg from "../assets/img/footer-pinterest.png"
import PeriscopeImg from "../assets/img/footer-periscope.png"

export default function AppFollow() {


    return (

        <div className="follow d-flex justify-content-center align-items-center flex-row p-4">

            
            

<button type="button" class="sign-up btn btn-outline-primary text-white ">SIGN UP NOW</button>

    <h3 className="text-primary p-2 ">Follow Us</h3>
                <img src={FbImg} />
                <img src={TwitterImg} />
                <img src={YoutubeImg} />
                <img src={PinterestImg} />
                <img src={PeriscopeImg} /></div>
                
           
       

    )
}