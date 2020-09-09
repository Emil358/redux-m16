import React from 'react';

const AddComment = ({addComment}) => {
  let inputValue = '';
  let textareaValue = '';
  return (
    <div className='add-comment'>
      <label htmlFor = 'name' className = 'top'>*Введите ваше имя</label>
      <input 
        type='text' 
        // value = {inputValue}
        onChange = {ev => {inputValue = ev.target.value}}
        className = 'name bottom'
        id = 'name'
      />
      <label htmlFor = 'text' className = 'top'>*Введите текст коментария</label>
      <textarea  
        // value = {textareaValue}
        onChange = {ev => {textareaValue = ev.target.value}}
        className = 'text bottom'
        id = 'text'
      />
      <button 
      className = 'button-add-comment' 
      onClick = {() => 
      {
        if (inputValue !== '' && textareaValue !== '') {
          addComment(inputValue, textareaValue);
          inputValue = '';
          textareaValue = '';
        }
      }}>Add</button>
    </div>
  );
}

export default AddComment;