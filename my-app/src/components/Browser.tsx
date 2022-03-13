import react, {useEffect, FC, useState} from "react";



export const Browser: FC<{}> = () => {
    const [dataFromApi, setDataFromApi] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const response = await fetch("https://rickandmortyapi.com/api/character")
                if(!response){
                    throw new Error("Error")
                }
                const json = await response.json();
                setDataFromApi(json)
            } catch(error) {
                console.error("Could not get characters" + error)
            }
        }
        fetchData()        
    }, [])

    console.log(dataFromApi)

    return (
        <>
            <div className="text-green-300">Pasek</div>
            <div>Obrazki</div>
        </>
    )
}

