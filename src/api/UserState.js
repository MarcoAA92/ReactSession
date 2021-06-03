import React,{useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {   
    const initialState ={
        users:[]
    }
    // const [state, setState] = useState(initialState)
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = () =>{
    //    const res=  await axios.get('http://localhost:3001/users')
       console.log("res getUsers");
    }

    const deleteUser = async (id) =>{
        const res=  await axios.get('http://localhost:3001/' + id)
        console.log("res delete Users");
     }

    // return(
    //     <UserContext.Provider value={{
    //         users: state.users,
    //         getUsers
    //     }}>
    //         {props.children}
    //     </UserContext.Provider>
    // )
    return (
        <UserContext.Provider
            value={
                {
                    users: state.users,
                    getUsers,
  
                    deleteUser, 
          
                }
            }
        >
            {props.children}

        </UserContext.Provider>

    )
}
export default UserState
