// create your App component here
import React, {useState,useEffect} from "react";

function App(){

    const [image,setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(data => data.json())
        .then((json) => {
            setImage(json.message)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <h3>Loading...</h3>

    return(
        <div>
            <img src={image} alt={"A Random Dog"}></img>
        </div>
    )
}

export default App;