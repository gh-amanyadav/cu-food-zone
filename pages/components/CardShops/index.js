const index = (props) => {
    <div>
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h1>Hi</h1>
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.location}</p>
            <a href="#" class="btn btn-primary">View</a>
        </div>
    </div>
    </div>
}

export default index;