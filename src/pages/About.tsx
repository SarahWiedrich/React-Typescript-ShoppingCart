export function About(){
    return (
        <>
            <h1>About Us</h1>
            <div className="bg-image" style={{width: "40rem", position: "relative"}}>
                <img src="https://cdn.pixabay.com/photo/2022/11/25/16/30/brown-hairstreak-7616422_640.jpg" className="img-thumbnail" />
                <span className=" text-light card-img-overlay d-flex justify-content-center flex-column text-center" style={{position: "absolute", left: "300px" }}>
                    <h2>Custom heading</h2>
                    <p className="m-0">paragraph</p>
                </span>
            </div>
            <div>
                <p></p>
            </div>
        </>
    )
}