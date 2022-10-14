const initialState = {
  posts: [],
  post: {},
};

export default function reducer(state = initialState, action = {}) {
  //@ts-ignore
  switch (action.type) {
    case "GET_POSTS":
      //@ts-ignore
      return { ...state, posts: action.posts };

    case "GET_POST":
      //@ts-ignore
      return { ...state, post: action.post };

    default:
      return state;
  }
}
