interface BlogState {
  Post: {};
  error: any;
  image: String;
  newPost: {};
  individualPost: {};
}

const initState: BlogState = {
  Post: [],
  error: "",
  image: "",
  newPost: {},
  individualPost: [],
};

const Blogreducer = (state = initState, action: any): BlogState => {
  switch (action.type) {
    case "UPLOAD_POST_SUCCESS":
      return { ...state, newPost: action.payload, error: null };
    case "UPLOAD_POST_FAILURE":
      return { ...state, newPost: {}, error: action.payload };
    case "GET_POST_SUCCESS":
      return { ...state, individualPost: action.payload, error: null };
    case "GET_POST_FAILURE":
      return { ...state, individualPost: {}, error: action.payload };
    case "UPLOAD_IMAGE_SUCCESS":
      return { ...state, image: action.payload, error: null };
    case "UPLOAD_IMAGE_FAILURE":
      return { ...state, image: "", error: action.payload };
    case "CREATE_POST":
      console.log("created_project", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("created_project", action.error);
      return state;
    case "FETCH_DATA_SUCCESS":
      return { ...state, Post: action.payload, error: null };
    case "FETCH_DATA_FAILURE":
      return { ...state, Post: [], error: action.payload };
    default:
      return state;
  }
};
// export const dataReducer = (state = initState, action: any): BlogState => {
//     switch (action.type) {
//       case 'FETCH_DATA_SUCCESS':
//         return { ...state, Post: action.payload, error: null };
//       case 'FETCH_DATA_FAILURE':
//         return { ...state, Post: [], error: action.payload };
//       default:
//         return state;
//     }
//   };
export default Blogreducer;
