export function Home(){
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2021/08/23/01/26/snowflake-6566453__480.jpg" className="d-block w-100" alt="..." style={{height: "300px"}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2022/10/22/06/03/mountains-7538471__480.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2022/10/28/08/25/amethyst-7552587__480.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <main style={{  borderBottom: "solid", borderWidth:"thin",
    borderColor: "#dbdbdb"}}>
                <h1>Welcome Home</h1>
                <div className="bg-image" style={{width: "40rem", position: "relative"}}>
                    <img src="https://cdn.pixabay.com/photo/2022/10/31/12/40/sorrow-7559727_640.jpg" className="img-thumbnail" />
                    <span className=" text-light card-img-overlay d-flex justify-content-center flex-column text-center" style={{position: "absolute"}}>
                        <h2>Custom heading</h2>
                        <p className="m-0">paragraph</p>
                    </span>
                </div>
                <div>
                    <p style={{ 
                        textAlign: "justify",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontWeight: "lighter",
                        }}>
                    Cupcake ipsum dolor sit amet. Candy gummies jelly-o pie toffee cheesecake pastry cake. Soufflé sesame snaps tootsie roll jelly-o soufflé tart gummies. Dessert lollipop halvah brownie chocolate bar gingerbread. Lollipop chocolate bar dragée jelly-o cookie tiramisu icing. Dragée muffin marshmallow jelly beans jelly beans. Tootsie roll pie cheesecake. Brownie biscuit gingerbread cupcake sweet roll sweet jelly-o cookie pie. Lemon drops topping lemon drops jelly beans toffee. Tiramisu cotton candy pie toffee cake chocolate cake apple pie. Cupcake bear claw donut apple pie halvah sesame snaps macaroon tootsie roll
                    </p>
                </div>
            </main>
        </>
    )    
}