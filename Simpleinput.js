import React, { useEffect, useState } from 'react'

const SimpleInput = (props) => {
    const [enteredName,setEnteredName]=useState("");
    const [enteredNameIsValid,setEnteredNameIsValid]=useState(false);
    const [enteredNameIsTouched,setEnteredNameIsTouched]=useState(false);
    const nameInputIsInvalid=!enteredNameIsValid && enteredNameIsTouched;
    const nameInputClasses=nameInputIsInvalid ? "form-control invalid" : "form-control";
    useEffect(
        ()=>
        {
            if(enteredNameIsValid){
                console.log("Input is valid");
            }
        }
        ,[enteredNameIsValid]
    )
    const nameInputChangeHandler=(event)=>
    {
        if(event.target.value.trim()==="")
        {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredName(event.target.value);
    }
    const nameInputBlurHandler=()=>
    {
        setEnteredNameIsTouched(true);
        if(enteredName.trim()===""){
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
    }
   
    const submitHandler=(event)=>
    {
        event.preventDefault();
        setEnteredNameIsTouched(true);
        if(enteredName.trim()==="")
        {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        setEnteredName("");
    }
  return (
    <form onSubmit={submitHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name'
            value={enteredName}
            onChange={nameInputChangeHandler} 
            onBlur={nameInputBlurHandler}/>
            {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
         </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
    </form>
  );
};

export default SimpleInput;