import { useEffect, useState } from "react";
import { collection, getDocs,addDoc,updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";
function App() {
  const [newname, setNewName] = useState('');
  const [newlastname, setNewLastName] = useState('');
  const [newheight, setNewHeight] = useState(0);
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db,'users');

  useEffect(() => {
    getUsers();
  }, []);


  const createNewUser = async () =>{
     await addDoc(userCollectionRef , {first_name: newname, last_name: newlastname, height: Number(newheight) })
  }

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
      console.log(users, data);
  };

  const updateUser = async (id,height) => {
    const userDoc = doc(db,"users",id);
    const newField = {height: height +1}
    await updateDoc(userDoc, newField)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);
  }
  // const getUsers = async () => {
  //   await getDocs(userCollectionRef).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUsers(newData);
  //     console.log(users, newData);
  //   });
  // };

  return (
    <div>

    <input type='text' placeholder="First Name" value={newname} onChange={(e)=>setNewName(e.target.value)} />
    <input type='text' placeholder="Last Name" value={newlastname} onChange={(e)=>setNewLastName(e.target.value)} />
    <input type='number' placeholder="Age..." value={newheight} onChange={(e)=>setNewHeight(e.target.value)} />
    <button onClick={createNewUser} >Submit</button>

      {users.map((user) => (
        <div key={user.id}>
          {user.first_name}
          {user.last_name} {user.height}
          <button onClick = {()=>updateUser(user.id, user.height)} >update height</button>
          <button onClick = {()=>deleteUser(user.id)} >delete User</button>
        </div>
      ))}
    </div>
  );
}

export default App;
