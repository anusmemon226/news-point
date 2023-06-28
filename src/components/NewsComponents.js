import React, { Component } from 'react';
import NewsItem from './NewsItem';
import news from '../news.json';
import Loader from './Loader';
export default class NewsComponents extends Component {
    constructor(){
        super();
        this.articles = news.articles;
        this.pageS = []
        this.state = {
            error : "",
            loading : true,
            page : 1,
            pageSize : 10,
            offset : [],
            totalPages : this.pageS
        }
    }
    async componentDidMount(){
        for(var i=0;i<(news.articles.length/this.state.pageSize);i++){
            this.pageS[i] = i+1 
        }
        this.setState({
            totalPages : this.pageS
        })
        this.setState({
            offset : [0,Number(this.state.pageSize)]
        })
        setTimeout(()=>{
            this.setState({
                loading : false
            })
        },500)
    }
    render() {
        const handleNextPage = async () =>{
            this.setState({
                loading : true,
                offset : [this.state.offset[1],this.state.offset[1]+Number(this.state.pageSize)],
                page : this.state.page+1
            })
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            
            setTimeout(()=>{
                this.setState({
                    loading : false
                })
            },500)
        }
        const handlePrevPage = async ()=>{
            this.setState({
                loading : true,
                offset : [this.state.offset[0]-Number(this.state.pageSize),this.state.offset[1]-Number(this.state.pageSize)],
                page : this.state.page-1
            })
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            setTimeout(()=>{
                this.setState({
                    loading : false
                })
            },500)
        }
        const handlePages = (page)=>{
            this.setState({
                loading : true,
                offset : [(page-1)*Number(this.state.pageSize),((page-1)*Number(this.state.pageSize))+Number(this.state.pageSize)],
                page : page
            })
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            setTimeout(()=>{
                this.setState({
                    loading : false
                })
            },500)
        }
        const handlePageSize = (event)=>{
            this.pageS = [];
            for(var i=0;i<(news.articles.length/event.target.value);i++){
                this.pageS[i] = i+1
            }
            this.setState({
                pageSize : event.target.value,
                offset : [0,event.target.value],
                totalPages : this.pageS
            })
        }
        return (
            <>
                {(this.state.loading===true)?<Loader/>:""}
                <div className="container my-3">
                    <div className="container d-flex justify-content-center justify-content-lg-between justify-content-md-between justify-content-sm-center align-items-center flex-wrap">
                        <h1 className='mainHeading my-2 mb-4'>NEWSPOINT - LATEST NEWS</h1>
                        <div className='mb-3'>
                            <select className='p-2' name="pageSize" onChange={handlePageSize}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {!this.state.loading && this.articles.slice(this.state.offset[0],this.state.offset[1]).map(function(elements,key){
                            let {author,description,publishedAt,source:{id,name},title,url,urlToImage} = elements;
                            return(
                            <div className="col-12 col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-3" key={url}>
                                <NewsItem title={title} description={description} url={url} imageUrl={urlToImage}/>
                            </div>)
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-center py-3 pb-5">
                    {(this.state.page>1)?this.state.loading===false && <button className="btn btn-primary mx-1" onClick={handlePrevPage}>&#x2190; Prev</button>:""}
                    <div>
                        {!this.state.loading&&this.state.totalPages.map((values)=>{
                            if(this.state.page===values){
                                this.active = "active"
                            }else{
                                this.active = ""
                            }
                            return <button className={`btn btn-primary mx-1 ${this.active}`} key={values} onClick={()=>handlePages(values)}>{values}</button>
                        })}
                    </div>
                    {(this.state.page===Math.ceil((this.articles.length/Number(this.state.pageSize))))?"":!this.state.loading&&<button className="btn btn-primary mx-1" onClick={handleNextPage}>Next &#8594;</button>}
                </div>
            </>
        )
    }
}