import comics from "./comics"
import JumbotronImg from "../assets/img/jumbotron.jpg"
export default function AppMain() {
    
  return  (<main>
        <div className="jumbotron">
            <img className="jumboimg" src={JumbotronImg}/>
        </div>
        <div className="content ">
            <div className="comicsList container d-flex">
                {comics.map((comic) =>
                (
                  <div><image src= {comic.thumb}/>
                  <p>{comic.title}</p> </div>

                  

                ))}
            </div>

            
        </div>
    </main>)
}