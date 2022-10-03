const index = (props) => {   
    return <div className={props.className}>
        <div className="card">
            <img src="/images/rest1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.location}</p>
                <button type="button" className="btn btn-outline-warning">View More</button>
            </div>
        </div>
    </div>
}

export default index;
