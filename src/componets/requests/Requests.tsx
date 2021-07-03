import React from 'react'
import './Requests.css'
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillBook } from 'react-icons/ai';
import { AiOutlineLink } from 'react-icons/ai';

interface PropsList {
    author: string
    title: string
    url: string
}


function Requests(props: PropsList) {
    return (
        <div className="container">
            <div className="names">
                <h1><AiOutlineUser /> author:  {props.author}</h1>
                <h1><AiFillBook/> title:  {props.title}</h1>
                <h1><AiOutlineLink/> url:  {props.url}</h1>
            </div>
        </div>
    )
}

export default Requests;
