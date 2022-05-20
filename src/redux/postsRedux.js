import shortid from "shortid";

//selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id);
export const getPostByCategor = ({posts}, category) => posts.filter(post => post.category === category);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = payload => ({type:DELETE_POST, payload});
export const addPost = payload => ({type:ADD_POST , payload});
export const editPost = payload => ({type:EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => (post.id !== action.payload));
    case ADD_POST:
      return [...statePart, {...action.payload, id: shortid()}];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;