import comics from "./comics"
import JumbotronImg from "../assets/img/jumbotron.jpg"
export default function AppMain() {
    
  return  (<main>
        <div className="jumbotron">
            <img className="jumboimg" src={JumbotronImg}/>
        </div>
        <div className="content ">
            <div className="comicsList container d-flex text-white flex-row flex-wrap">
                {comics.map((comic) =>
                (
                  <div className="comicSpace col-2 p-2"><img className="ComicImg" src= {comic.thumb}/>
                  <p>{comic.title}</p> </div>

                  

                ))}
                <button className="buttComic bg-primary text-white p-2 text-center"> Load More</button>
            </div>

            
        </div>
    </main>)
}