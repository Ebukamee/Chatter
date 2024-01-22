import { Dispatch } from "redux";
import { RootState } from "../reducer/rootreducer";
// import { getFirestore } from "redux-firestore";
import { db, storage } from "../firebase/firebase";
import { collection,getDocs,doc, orderBy,addDoc,getDoc } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
// import { getFirebase } from "react-redux-firebase"; 

// export function createPost(post: any) {
//   return async (dispatch: Dispatch, getState: () => RootState, { getFirestore }: any) => {
//     const firestore = getFirestore(); // Get the Firestore instance
//     const firebase = getFirebase(); // Get the Firebase instance

//     try {
//       // For example, add a document to Firestore
//       await firestore.collection("posts").add(post);
      
//       dispatch({ type: 'CREATE_POST', post });
//     } catch (error) {
//         dispatch({ type: 'CREATE_POST_ERROR', error
//          });
//     }
//   };
// }
export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    const data:any = [];
    const latest =await getDocs(collection(db,'posts'));

    latest.forEach((doc) => {
      console.log(doc)
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data)
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error:any) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
let Url = '';
let PostId: any = null
export const uploadImage = (Image:any) => async (dispatch : Dispatch) => {
  try {
    const Ref = ref(storage,"post" );
            const ImagesRef = ref(Ref, Image.name)
            Ref.name === ImagesRef.name; 
            Ref.fullPath === ImagesRef.fullPath;  
            const metadata = {
                contentType: 'image/jpeg',
              };
            await uploadBytes(ImagesRef, Image, metadata).then((snapshot) => {
                console.log(Image,snapshot);
              });
              
            await setTimeout(() => {
                getDownloadURL(ref(Ref,Image.name)).then((url) => {
                   const data = url
                   Url = data
                    console.log(data)
                    dispatch({type: 'UPLOAD_IMAGE_SUCCESS', payload:data})
                })
            }, 1000)
}
catch (error:any) {
    console.error('Error adding image to Firestore Storage:', error);
    dispatch({type: 'UPLOAD_IMAGE_FAILURE', payload:error})
}
}

export const createPost = (Title: any, Content: any, Author:string) => async (dispatch: Dispatch) => {
  try {
    // Simulating an asynchronous operation with setTimeout (remove this in the actual implementation)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const docRef = await addDoc(collection(db, 'posts'), {
      Title,
      Url: Url,
      Content,
      Author
    });
    PostId = docRef.id
    console.log(PostId)
    // Assuming you want to dispatch the ID of the newly created document
    dispatch({ type: 'UPLOAD_POST_SUCCESS', payload: docRef});
    setTimeout(() => {
      Url= ''
    }, 1000);
  } catch (error: any) {
    console.error('Error adding item to Firestore:', error);
    dispatch({ type: 'UPLOAD_POST_FAILURE', payload: error.message });
  }
};
export const addToProfile = (Title: any,Content: any,Id: any) => async (dispatch:Dispatch) => {
  try {
    await setTimeout(() => {
      const Ref = addDoc(collection(db, `userdetails/posts/${Id}`), {
        Title,
        Url: Url,
        Content,
        post_id  : PostId
      });
    }, 3000);
  }
  catch (error: any) {
    console.log(error)
  }
}
export const getPost = (Id:any) => async (dispatch:Dispatch) => {
  try {
    const data:any =[]
  const documentRef = doc(db,'posts',  Id);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) {
            
    data.push(documentSnapshot.data())
    console.log('working')
    
  } 
  else {
  return null;
  }
  dispatch({ type: 'GET_POST_SUCCESS', payload: data});
} catch (error: any) {
  console.error('Error adding item to Firestore:', error);
  dispatch({ type: 'GET_POST_FAILURE', payload: error.message });
}
}

export const EditProfile = (Name:string, userName:string,email: string, phoneNumber:string, id: string) => async (dispatch: Dispatch) => {
  try {
    // Simulating an asynchronous operation with setTimeout (remove this in the actual implementation)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const docRef = await addDoc(collection(db, `userdetails/profile/${id}`), {
      Name,
      userName,
      email,
      phoneNumber
    });
    dispatch({ type: 'UPLOAD_PROFILE_SUCCESS', payload: docRef});
  } catch (error: any) {
    console.error('Error adding item to Firestore:', error);
    dispatch({ type: 'UPLOAD_PROFILE_FAILURE', payload: error.message });
  }
};
