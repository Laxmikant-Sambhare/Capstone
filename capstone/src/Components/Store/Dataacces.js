import { useState, useEffect } from "react";
import {
  getDownloadURL,
  ref,
  
} from "firebase/storage";
import { db, storage} from "../../firebase";

import { collection, getDocs } from "firebase/firestore/lite";

function Dataacces() {
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState([]);
  const usersCollerctionref =  collection (db,  "rescue");
  const [reff, setreff] = useState ( )

  useEffect(() => {
    const getUsers = async () => {
      const data =  await getDocs (usersCollerctionref);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
    setreff(users.map((doc) => (doc.imgUrl) ))
    console.log(reff)
    const func = async () => {

      const reference = ref(storage, `${reff}`);
      await getDownloadURL(reference).then((x) => {
          setUrl(x);
      })
  }


  func();
  }, []);

  return (
    <div className="imgupload">
    {users.map ((user) => {
      return <div> 
        <h1>{user.FirstName}{" "}{user.LastName}</h1>
        <h2>Iamageurl: {user.imgUrl}</h2>
        <img src={url} style = {{width: '300px' , margin: "20px"}} alt= "img" />;
      </div>
    } )}
    </div>
  );
}

export default Dataacces;