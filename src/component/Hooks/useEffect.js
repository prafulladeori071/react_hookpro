import React from 'react'
import "./style.css";

const useEffect = () => {
    const initialData =15;

    const [myNum, setMyNum] = React.useState(initialData);


    return (
      <>

               
            <div  className="conter_div" >
                <p> {myNum}</p>
                <div class="button2" onClick={() => setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR 
                </div>
                <div class="button2" onClick={() => setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decr
                </div>
              
            
            </div>



      </>
    )
}

export default useEffect
