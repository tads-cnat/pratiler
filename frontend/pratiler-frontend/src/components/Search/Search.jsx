import { externalAxios } from "../Global/axiosInstances";
import { useState } from "react";
import searchCss from "../../assets/css/Search/Search.module.css"
import lupaImg from "../../assets/img/lupa.png"

export function Search(){
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const getBooks = async () => {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAk5yGHrwwr_CH_3f3UeuA__GBUpT0MOr8';

        try{
            const response = await externalAxios.get(url);

            setBooks(response.data);

            console.log(response.data)
        }

        catch(error){
            console.error("Erro na busca dos livros: ", error);
        }
    };

    const searchKeyPress = (evt) => {
        if(evt.key === "Enter"){
            getBooks();
        }
    }

    const handleChange = (e) => {
        const input_content = e.target.value;
        setSearch(input_content);
    };

    return( 
        <>
            <div>
                <input type="text" className={searchCss.searchBar} value={search} onChange={handleChange} onKeyUp={searchKeyPress}/>
                <button onClick={getBooks} className={searchCss.button}> 
                    <img src={lupaImg} alt="Ícone lupa."/>
                </button>
            </div>
            <div>
                <ul>
                    {books.items?.map( (b) => (
                        <li key={b.id}>
                            <p>{b.volumeInfo.title}</p>
                            <img src={b.volumeInfo.imageLinks?.thumbnail} alt="Capa do livro." />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}