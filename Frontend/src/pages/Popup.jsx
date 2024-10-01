import React from 'react'
import Model from 'react-modal'
const Popup = () => {
    

    const handleClick = () => {
        navigate('/Sign');
      };
 
    const [visible,setvisible]=useState(false)
  return (
    <div>
       <div>
        <button className='bt' onClick={()=>setvisible(true)}>Click Here To Login/Sign-Up</button>
        </div>

        <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{
        overlay:{
            background:"black"
        }
      }}>
        <h1> Login Page</h1>
        <div className='button'>
        <button onClick={handleClick}>Sign-up</button>
        <button onClick={()=>setvisible(false)}>❌</button>
        </div>
       
        <div>
        </div>
      </Model>

    </div>
  )
}

export default Popup
