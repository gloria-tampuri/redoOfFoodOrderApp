import React,{useRef, useState} from 'react'
import Input from './Input'
import classes from './MealItemForm.module.css'

const   MealItemForm = (props) => {
  const[amountIsValid, setAmountIsvalid] =useState(true);
  const amountInputRef = useRef()

  const submitHandler =event=>{
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber< 1 || enteredAmountNumber>5){
      setAmountIsvalid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
       <Input label='Amount'   ref={amountInputRef}
        input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        defaultValue:'1'
       }}/>
        <button> + Add </button>
        {!amountIsValid && <p>Please entered a valid number (1-5)</p>}
    </form>
  )
}

export default MealItemForm