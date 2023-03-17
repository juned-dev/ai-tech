import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";

const useFirebase = () => {
  const uploadResume = async (file, setPercent, item) => {
    try {
      const folderName = item.title;
      const storageRef = ref(storage, `${folderName}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            // console.log(url);
          });
        }
      );
    } catch (e) {
      console.error("Error subscribing to newsletter: ", e);
    }
  };
  const postEmail = async (email) => {
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: `${email}`,
      });
    } catch (e) {
      console.error("Error subscribing to newsletter: ", e);
    }
  };

  const postContactDetails = async (name, email, msg) => {
    try {
      const docRef = await addDoc(collection(db, "contactUs"), {
        name: `${name}`,
        email: `${email}`,
        msg: `${msg}`,
      });
    } catch (err) {
      console.error("Error submitting form: ", err);
    }
  };

  return {
    uploadResume,
    postEmail,
    postContactDetails,
  };
};

export default useFirebase;
