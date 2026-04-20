
import JumbotronImg from "../assets/img/jumbotron.jpg"
export default function AppMain() {
    
  return  (<main>
        <div className="jumbotron">
            <img className="jumboimg" src={JumbotronImg}/>
        </div>
        <div className="content">
            <h1>
                Benvenuto nel nostro sito!
            </h1>
        </div>
    </main>)
}