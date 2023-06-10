import { useEffect, useState } from "react";
const UseEffectExample = () => {

    const [name, setName] = useState('');
    

    useEffect(() => {
        console.log('mount!!', name)
        return () => {
            console.log('UnMount!!', name)
        }
    }, [name])

    return(
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>

        </>
    ) 

};

export default UseEffectExample