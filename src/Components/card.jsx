import React from 'react';
import { useState } from 'react';
import Book from './book';
import './search.css';

const Card = ({ book }) => {


    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="w-full h-auto  bg-blue-400 p-7 shadow-2xl text-center relative card hover:scale-90 hover:bg-white hover:bg-opacity-80" onClick={()=>{setShow(true);setItem(item)}}>
                                <div className='flex-row'>
                                <img className=" w-48 " src={thumbnail} alt="" />
                                <div className="flex-column">
                                    <h3 className="font-sans text-xl font-semibold ">{item.volumeInfo.title}</h3>
                                    <p className="bg-blue-300 border rounded-lg">&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Book show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}

export default Card