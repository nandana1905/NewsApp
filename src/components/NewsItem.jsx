

const NewsItem = ({ title, description, src, url }) => {
    return (
  
      
        <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-5 px-2 py-2 container text-center " style={{ maxWidth: '345px' }}>
  
          <img src={src ? src : '/img/news-img.jpg'} style={{ height: '200px', width: '327px' }} className="card-img-top" alt="..." />
  
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description ? description.slice(0, 90) : 'News is about current event. It is information about something that just happend.'}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      
  
    )
  }
  
  export default NewsItem
  