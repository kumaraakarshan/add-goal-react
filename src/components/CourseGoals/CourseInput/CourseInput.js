import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);

    if (inputValue.trim().length > 0) {
      setIsValid(true);
      setIsBlurred(false);
    } else {
      setIsValid(false);
      setIsBlurred(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
   
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(false);
    setIsBlurred(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <div className={`form-control ${isValid ? 'valid-button' : 'invalid'}`}>

      <Button type="submit" >Add Goal
        </Button>
        </div>


    </form>
  );
};

export default CourseInput;
