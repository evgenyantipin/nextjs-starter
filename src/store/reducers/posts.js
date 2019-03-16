export default (state = {}, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.posts };

    case "GET_POST":
      return { ...state, post: action.post };

    default:
      return state;
  }
};
