export function Home(){
    return (
        <>
            <h1>Welcome Home</h1>
            <div className="bg-image" style={{width: "22rem", position: "relative"}}>
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="img-thumbnail" />
                <span className=" text-light card-img-overlay d-flex justify-content-center flex-column text-center" style={{position: "absolute"}}>
                    <h4>Custom heading</h4>
                    <p className="m-0">paragraph</p>
                </span>
            </div>
        </>
    )    
}