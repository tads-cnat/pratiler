import { externalAxios } from "../Global/axiosInstances";
import { useState } from "react";

export function Search(){
    const [book, setBook] = useState([]);

    const key = 'AIzaSyAk5yGHrwwr_CH_3f3UeuA__GBUpT0MOr8'

    const url = 'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=' + key

    const getBook = async () => {
        try{
            const response = await externalAxios.get(url, {
                withCredentials: true
            })

            setBook(response.data)
        }

        catch(error){
            console.error("deu ruim")
        }
    };
    return( 
        <>
            <div style="width: 600px; height: 500px" onLoad={getBook()}>
                <p>{book}</p>
            </div>
        </>

        
    );
}