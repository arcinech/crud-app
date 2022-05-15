
export const modalState = ({modal}) => modal; 

const createActionName = actionName => `app/modal/${actionName}`;
const SHOW_MODAL = createActionName('SHOW_MODAL');
const HIDE_MODAL = createActionName('HIDE_MODAL');

export const showModal = payload => ({type:SHOW_MODAL, payload});
export const hideModal = payload => ({type:HIDE_MODAL, payload});

const modalReducer = (statePart = Boolean, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return action.payload;
    default:
      return statePart;
  };
};

export default modalReducer;