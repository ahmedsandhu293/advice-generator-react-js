import {useState,useEffect} from 'react'
import axios from 'axios';
import classes from './Advice.module.css'
function Advice() {
  const [advice,setAdvice] = useState('')
  const [loading,setLoading] = useState(false)
  let fetchAdvice = async () => {
    setLoading(true)
    await axios.get('https://api.adviceslip.com/advice')
    .then((response) =>  {
        
    
         setAdvice(response.data.slip.advice)
         setLoading(false)
      
    })

    .catch ((error) => {
        console.log(error);
    })
} 
useEffect(()=>{
  fetchAdvice()


},[])
  return (
    <div className={classes.advice}>
      <div className={classes.adviceQuote}>
        {loading ? <span className={classes['lds-dual-ring']}></span> : <p>{advice}</p>}
      </div>
      <button onClick={fetchAdvice}>Advice</button>
    </div>
  )
}

export default Advice