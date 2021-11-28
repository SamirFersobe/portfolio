import React from 'react'
import Link from 'next/link'

interface CardInfo {
    cardTitle:string;
    cardText:string;
    cardTags?:string[];
    cardButtonLink:string;
    cardImage:string;
}


export default function Card(props:CardInfo) {

    const cardStyle = {
        backgroundImage:'url('+props.cardImage + ')',
    };
    
    return (
        <div style  = {cardStyle}  className= "card">
            <div className ="card-content">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p>{props.cardText}</p>
            

            <Link href={props.cardButtonLink}>
            <a className="card-button">Learn More!</a>
            </Link>
        </div>
    </div>
    )
}
