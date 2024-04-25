function Banner({title, img}){
    return(
        <div className="banner">
            <h1>{title}</h1>
            <img src={img} alt="" />
        </div>
    )
}

export default Banner;