import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from './card';


const Search = () => {

  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
          axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
          .then(res=>setData(res.data.items))
          .catch(err=>console.log(err))
      }
  }
  return(
      <>
  
              <div className="h-96 w-full bg-gradient-to-r from-sky-500 to-indigo-500 flex-row">
                  <h1 className='text-5xl text-white font-serif font-bold p-48 pt-24 ml-72 pb-20'>Step into the <span className='text-blue-300'>sea</span> of books</h1>
        
          
                  <div className="flex justify-center">
                      <input className='w-96 h-13 border rounded-lg' type="text" placeholder=""
                      value={search} onChange={e=>setSearch(e.target.value)}
                      onKeyPress={searchBook}/>
                      <button><i className="fas fa-search"></i></button>
                  </div>
              </div>

          <div className='w-full p-5 grid grid-cols-[repeat(auto-fit,minmax(200px,0.5fr))] gap-16'>
            {
                  <Card book={bookData}/>
            }  
          </div>

      </>
  )
}

export default Search