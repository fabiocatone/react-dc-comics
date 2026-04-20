export default function AppFooter () {
const menu = [
{id:1,
    text:"Home"
   },
{
    id:2,
    text: "Prodotti"
}
]

return (
    <footer>
        {menu.map((item) => (
            <a href={item.text} key={item.id}>{item.text}</a> 
        ))}
    </footer>
)


}



