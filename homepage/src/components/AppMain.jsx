import comics from "./comics"
import JumbotronImg from "../assets/img/jumbotron.jpg"
export default function AppMain() {

    return (<main>
        <div className="jumbotron">
            <img className="jumboimg" src={JumbotronImg} />
        </div>
        <div className="badge bg-primary text-uppercase text-white text-center p-2">
           Current Series
        </div>
    
        <div className="content ">
            <div className="comicsList p-4 container d-flex text-white flex-row flex-wrap ">
                {comics.map((comic) =>
                (
                    <div key={comic.id} className="comicSpace col-2"><img className="ComicImg" src={comic.thumb} />
                        <p className="text-left p-1">{comic.title}</p> </div>



                ))}
                <button className="buttComic bg-primary text-white p-2 text-center"> Load More</button>
            </div>


        </div>
    </main>)
}