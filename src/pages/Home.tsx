export function Home(){
    return (
        <>
            <h1>Welcome Home</h1>
            <div className="bg-image" style={{width: "22rem"}}>
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" className="w-100" />
                <div className="mask text-light d-flex justify-content-center flex-column text-center">
                    <h4>Custom heading</h4>
                    <p className="m-0">paragraph</p>
                </div>
            </div>
        </>
    )    
}