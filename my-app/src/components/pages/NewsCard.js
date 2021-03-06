import React, { Component } from 'react'
import {InfoConsumer} from ".././context"
import {Link} from 'react-router-dom'

class NewsCard extends Component {

    render() { 
        const {id, newsTitle, newsText} = this.props.res;
        return ( 
            <InfoConsumer>
                {value => (
                   <div className="card container mt-2 mb-3 p-5">
                       <div className="card-body">
                           <h3 key ={id} className="card-title">{newsTitle}</h3>
                           <p className="card-text">{newsText}</p>
                           <Link className='card-link'>Read more... </Link>
                       </div>
                   </div> 
                )}
            </InfoConsumer>
         );
    }
}
 
export default NewsCard;