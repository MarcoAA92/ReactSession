import axios from 'axios';
import React,{useState} from 'react';

export function getUsers(){    
   return axios.get(`http://localhost:3001/users`) 
}

export function getUsersById(id:any){    
    return axios.get(`http://localhost:3001/users/` + id) 
}

export const deleteUser = (id:any) =>{
    return axios.delete('http://localhost:3001/users/' + id)
}

export const addUser =(body:any) =>{
    const headers = {
        'Content-Type': 'application/json', 
    }
    return axios.post('http://localhost:3001/users',body,{headers: headers})
}

export const editUser = (id:any, body:any) =>{
    const headers = {
        'Content-Type': 'application/json',    
    }
    return axios.put('http://localhost:3001/users/' + id,body,{headers: headers})
}



// export function getLists() {
//     this.setState({ loading: true }, () => {
//       fetch("http://localhost:3002/posts")
//         .then(res => res.json())
//         .then(result =>
//           this.setState({
//             loading: false,
//             alldata: result
//           })
//         )
//         .catch(console.log);
//     });
//   }

