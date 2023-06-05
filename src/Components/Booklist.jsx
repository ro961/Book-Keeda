import React from 'react';
import Card from './card';


const Booklist = (props) => {

    console.log(props.data)
    return (
        <div className='flex h-full ml-16 mt-14 flex-wrap w-full'>
            
            <Card book = {props.data}/>
            </div>
    );
};


export default Booklist;