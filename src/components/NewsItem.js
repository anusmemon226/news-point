import React,{Component} from 'react';
import App from '../App.css';

export default class NewsItem extends Component{
    render(){
        let {title,description,url,imageUrl} = this.props;
        return(
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}