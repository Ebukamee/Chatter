import { Dispatch } from "redux";
import { db, storage } from "../firebase/firebase";
import { collection,getDocs,doc,addDoc,getDoc,orderBy,query, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";



export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    const data:any = [];
    const latest = query(collection(db,'posts'), orderBy('PostedOn',"desc"));
const Ref = await getDocs(latest)
    Ref.forEach((doc) => {
      console.log(doc)
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data)
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error:any) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
export const fetchMyPost = (Id : any) => async (dispatch: Dispatch) => {
  try {
    const data:any = [];
    const latest = query(collection(db,`userdetails/posts/${Id}`), orderBy('PostedOn',"desc"));
const Ref = await getDocs(latest)
    Ref.forEach((doc) => {
      console.log(doc)
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data)
    dispatch({ type: 'FETCH_MY_POST_SUCCESS', payload: data });
  } catch (error:any) {
    dispatch({ type: 'FETCH_MY_POST_FAILURE', payload: error.message });
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

export const createPost = (Title: any, Content: any, Author:string,AuthorImage:string, AuthorId: any) => async (dispatch: Dispatch) => {
  try {

    const docRef = await addDoc(collection(db, 'posts'), {
      Title,
      Url: Url,
      Content,
      Author,
      AuthorImage,
      AuthorId,
      PostedOn: new Date()
    });
    PostId = docRef.id
    console.log(PostId)
    dispatch({ type: 'UPLOAD_POST_SUCCESS', payload: docRef});
  } catch (error: any) {
    console.error('Error adding item to Firestore:', error);
    dispatch({ type: 'UPLOAD_POST_FAILURE', payload: error.message });
  }
};
export const addToProfile = (Title: any,Content: any,Id: any) => async () => {
  try {
    await setTimeout(() => {
      const Ref = addDoc(collection(db, `userdetails/posts/${Id}`), {
        Title,
        Url: Url,
        Content,
        PostedOn: new Date(),
        post_id  : PostId
      });
      console.log(Ref)

      setTimeout(() => {
        Url= ''
      }, 1000);
    }, 3000);

  }
  catch (error: any) {
    console.log(error)
  }
}

export const  deleteFromProfile = (Id : any,id:any) => async ()  =>  {
  const documentRef = doc(db, `userdetails/posts/${Id}`,id);
  try {
           deleteDoc(documentRef);
           console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting Item', error);
    }
}
export const deletePosts = (Id:any) => async () => {
  const Ref = doc(db,'posts',Id)
  try {
      deleteDoc(Ref)
      console.log('Succes')
  }
  catch(error) {
      console.log('Error happened during deleting process', error)
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

