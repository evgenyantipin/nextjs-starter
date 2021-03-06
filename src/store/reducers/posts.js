const initialState = {
  posts: [],
  post: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.posts };

    case "GET_POST":
      return { ...state, post: action.post };

    default:
      return state;
  }
}
