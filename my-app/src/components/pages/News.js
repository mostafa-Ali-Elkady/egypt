import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import NewsCard from "./NewsCard"

class News extends Component {
    state = {  }
    render() { 
        return (
              <InfoConsumer>
                {value => {
                    return value.news.map(res => {
                        return <NewsCard key={res.id} res={res}/>
                    })
                }}
              </InfoConsumer>
           
         );
    }
}
 
export default News;

