const initialState = {
   inputText: ''
};

const todoInputReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CHANGE_INPUT_TEXT':
         return {
            ...state,
            inputText: action.text,
         }
      default:
         return {
            ...state
         }
   }
}

export default todoInputReducer;