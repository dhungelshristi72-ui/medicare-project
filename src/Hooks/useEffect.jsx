import { useState } from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    UseEffect(() => {
        console.log("count value is updated:", count);
    }, [count]);

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)} className="flex border-2 gap-4"> Increase</button>
            <button onClick={() => setCount(count - 1)} className="flex border-2 gap-4"> decrease</button>
            
        </div>
    );
}