const initialState = {
  blog: "",
  title: " ",
  category: " ",
  content: " ",
  image: "",
  author: "",
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default blogReducer;
