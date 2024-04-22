

function Logement() {
    return (
        <div className="logements">
            <img className="bannerLogement"></img>
            <div className="titleLocation">
                <div className="location">
                    <h1></h1>
                    <h2></h2>
                </div>
                <div className="owner">
                    <div className="ownerText">
                        <p className="name"></p>
                        <p className="lastName"></p>
                    </div>
                    <img  />
                </div>
            </div>

            <div className="spe-rating">
                <div className="specification">
                    <p></p>
                    </div>
                <div className="rating"></div>
            </div>

            <div className="collapseLogement">
                <div className="description">
                    <p>Description</p>  
                </div>
                <div className="description">
                    <p>Équipements</p>  
                </div>
            </div>
        </div>
    )
}

export default Logement;