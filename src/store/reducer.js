
const initalState = {
    items: [
        { id: 1, label: 'Tree view', done: false },
        { id: 2, label: 'Spiral', done: false },
        { id: 3, label: 'Сделать React app', done: false }
    ]

};

const reducerTask = (state = initalState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, _createItem(state.items, action.payload)]
            }

        case 'DELETE_ITEM':
            return {
                ...state,
                items: _deleteItem(state, action.payload)
            }

        case 'DONE_ITEM':
            return {
                ...state,
                items: _onToggleDone(state, action.payload)
            }

        default:
            return state;
    }
};

export default reducerTask;

const _createItem = (state, label) => {
    return {
        id: ++state.length || 0,
        label,
        done: false
    };
};

const _deleteItem = (state, id) => {
    const idx = state.items.findIndex((item) => item.id === id);
    const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
    ];
    return items;
};

const _onToggleDone = (state, id) => {
    const items = _toggleProperty(state.items, id, 'done');
    return items;
};

const _toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [
        ...arr.slice(0, idx),
        item,
        ...arr.slice(idx + 1)
    ];
};