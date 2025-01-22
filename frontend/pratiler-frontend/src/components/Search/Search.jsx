import { externalAxios } from "../Global/axiosInstances";
import { useState } from "react";

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

    const handleChange = (e) => {
        const input_content = e.target.value;
        setSearch(input_content);
    };

    return( 
        <>
            <div>
                <input type="text" name='search_bar' value={search} onChange={handleChange}/>
                <button onClick={getBooks}>Pesquisar</button>
            </div>
            <div>
                <h1>Livros</h1>
                <ul>
                    {books.items?.map( (b) => (
                        <li key={b.id}>
                            <p>{b.volumeInfo.title}</p>
                            <img src={b.volumeInfo.imageLinks?.thumbnail} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}