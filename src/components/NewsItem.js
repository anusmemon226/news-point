import React,{Component} from 'react';
import App from '../App.css';

export default class NewsItem extends Component{
    render(){
        let {title,description,url,imageUrl,source,author,date,category} = this.props;
        let serDate = new Date(date)
        return(
            <>
                <div className="card">
                <span class="badge text-bg-primary" style={{position:"absolute",top:"-2%",right:"6%"}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,55)}...</h5>
                        <p className="card-text">{description.slice(0,126)}...</p>
                        <p className='m-0 text-danger'>By {author} at {`${serDate.getDate()}-${serDate.getMonth()}-${serDate.getFullYear()} ${serDate.getHours()}:${serDate.getMinutes()}:${serDate.getSeconds()}`}</p>
                        <p className=''>Category : {category}</p>
                        <a href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}