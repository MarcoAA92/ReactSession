
import { Delete, Close, Done } from '@material-ui/icons';
//Components
import AppHeader from './components/UI/AppHeader';
import UserList from './components/UserList';
import AddUserModal from './components/AddUserModal';
import { getUsers, editUser, deleteUser } from './api/Users';

//UseState
import React,{useState, useEffect} from 'react';
import './App.css';

//Context
import UserState from './api/UserState';

function App() {

  const [users, setUsers]= useState<any[]>([]);
  const [isOpen, setIsOpen]= useState(false);
  const handleShow = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [refresh,setState]=useState({});

  function updateHandler() {
    getUsers()
      .then(res => {
          const usersGet = res.data;
          // console.log("usersGet", usersGet);
          setUsers(usersGet);
        })
        .catch( err =>{
          console.log(err);
      }) 
  }

  function find(id:any,objs:any){
    const theObj = objs.find((x:any) => x.id === id);
    return theObj;
  }
  // const startData = [
  //   {
  //     id: 1,
  //     firstName: 'Fang',
  //     lastName: 'Yen',
  //     email: 'fang.yen@gmail.com',
  //     image: '',
  //     isActive: true,
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Marco ',
  //     lastName: 'Arredondo',
  //     email: 'marco.arredondo@gmail.com',
  //     image: '',
  //     isActive: true,
  //   },
  //   {
  //     id: 3,
  //     firstName: 'Eli ',
  //     lastName: 'Arellano',
  //     email: 'eli_arellano@gmail.com',
  //     image: '',
  //     isActive: true,
  //   }  
  // ]
  
  

  useEffect(() => {
   // Update the document title using the browser API
   getUsers()
    .then(res => {
        const usersGet = res.data;
        // console.log("usersGet", usersGet);
        setUsers(usersGet);
      })
      .catch( err =>{
        console.log(err);
    })
  },[setUsers]);

  // console.log("ANTES DE mandar users", users);

  //Delete Row
  // const deleteRow=(id:any)=>{
  // }
 
    const deleteRow=(id:any)=>{
      deleteUser(id)
        .then(res => {
          const usersGet = res.data;
          // console.log("usersGet", usersGet);
          setUsers(users.filter((user:any) => user.id !== id));    
        })
        .catch( err =>{
          console.log(err);
        })
      // console.log("Delete", id)
    }

    
  //Active User
  const activeUser=(id:any)=>{
    // console.log("activeUser", id)
    const body= users.filter((user:any) => {
      if(user.id===id){
        user.isActive=!user.isActive
       return {...user,}
      }
    })
    // const body = users.map((user:any) => user.id === id?{...user,isActive:!user.isActive}:undefined);
    console.log(body);
    editUser(id,body[0])
    .then(res => {
      const userModified = res.data;
      // console.log("userModified", userModified);

      updateHandler();
    })
    .catch( err =>{
      console.log(err);
    })
  };
  
  
  //Retrieve Data
  // const retrieveUsers = async () => {
  //   const response = await api.get("/users")
  //   return response;
  // }
  //Deactive User
  // const deactiveUser=(id:any)=>{
  //   console.log("deasctiveUser", id)
  //   // state.users.map((item) => item.id == user.id ? {...item, isActive: !item.isActive} : item)
  //   setUsers(users.map((user:any) => user.id === id?{...user,isActive:user.isActive}:user));
  // };
  // const activeUser=(id:any,name:any, value:any)=>{
    //   const newItems = [...users];
  //   newItems[name] = value;
  //   console.log(newItems)
  //   setUsers(current => [...current, newItems]);
  // };

  return (
    <>
     
        <AppHeader userData ={users} openWin={handleShow} />
        <UserList  updateHandler={updateHandler}  activeUsers={activeUser} onDelete={deleteRow} userData ={users}/>
        <AddUserModal  updateHandler={updateHandler} setData ={setUsers} userData ={users}  isOpen={isOpen} setIsOpen={setIsOpen} closeWin={handleClose}/>

    </>
  );
}

export default App;

