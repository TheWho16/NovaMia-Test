const DONE_ITEM = 'DONE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


const addItemAction = (label) => ({ type: ADD_ITEM, payload: label });

const deleteItemAction = (id) => ({ type: DELETE_ITEM, payload: id });

const doneItemAction = (id) => ({ type: DONE_ITEM, payload: id });

export {
    addItemAction,
    deleteItemAction,
    doneItemAction
};