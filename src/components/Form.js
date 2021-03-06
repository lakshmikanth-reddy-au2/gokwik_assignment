import React, {useState, useEffect} from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Form() {
    const [formMessage, setformMessage] = useState("Enter the same number used on GoKwik");
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [number, setnumber] = useState("")
    const [validCheck, setvalidCheck] = useState(true)
    const handleMobile = (e) => {
        setnumber(e.target.value)
    }
    useEffect(() => {
        console.log(localStorage.getItem('giftAvailed'))
        if(number.length === 10){
            checkNumber()
        }
    })

    const handleGiftAvaile = () => {
        localStorage.setItem('giftAvailed', true)
        window.location.reload()

    }
    const checkNumber = () => {
        if(/^[6-9]\d{9}$/.test(number)){
            setformMessage("Enter the same number used on GoKwik")
            setvalidCheck(true)
            setbtnDisabled(false)
        }
        else{
            setvalidCheck(false)
            setbtnDisabled(true)
            setformMessage("Enter valid mobile number")
        }
    }
  return (
    <div className="form-content">
      
          <input type="number" id="mobi-num" name="mobile number" onChange={handleMobile} maxLength={10} placeholder="Enter Mobile Number"></input>
          <p style={{color : validCheck ? "#151515" : "#f44336"}}>{formMessage}</p>
          <button className="btn" disabled={btnDisabled} onClick={handleGiftAvaile}><p>Wow! Get my Paytm Gift Card  </p><ArrowForwardIosIcon /></button>
    </div>
  );
}
