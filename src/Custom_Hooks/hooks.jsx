
import { useState,useEffect } from "react";
import axios from "axios";


export function useBook(url){

    const[book,setbook] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect(() => {
        setbook({
            loading:true,
            data:null,
            error:false
    })
        axios.get(url).then(response => {
            setbook({

                
                loading:false,
                data:response.data,
                error:false
            })
        }
        ).catch(() =>{
            setbook({

                loading:false,
                error:true
            })
            
        })
    },[url])

    return book;

} 