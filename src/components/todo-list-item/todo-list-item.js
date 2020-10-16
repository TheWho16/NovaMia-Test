import React, { Fragment } from 'react';

import './todo-list-item.css';

const TodoListItem = ({ important, done,
  label, onToggleDone, onDelete }) => {

  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }


  return (
    <Fragment>
      <input
        className='checkbox_item'
        type='checkbox'
        onClick={onToggleDone} />
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          suppressContentEditableWarning={true}
          contentEditable='true'>{label}</span>    
        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}>
          X
        </button>
      </span>
    </Fragment>
  );
};

export default TodoListItem;
