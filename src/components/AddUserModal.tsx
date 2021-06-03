import { Modal, TextField,Button} from '@material-ui/core';
import { useForm } from "react-hook-form";
import React,{useState} from 'react';
import { useCallback } from 'react';
import { AnyARecord } from 'dns';
import { addUser} from '../api/Users';

const AddUserModal = ({isOpen,setIsOpen,closeWin, updateHandler,setData,userData}:any)=> {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => { 
    // console.log("maaantracker",data);
    data.id=parseInt(userData.length + 1);    
    // console.log("maaantracker222",data);
    // var json1 = userData;
    // var json2 = data;
    // var jsons = json1.concat(json2);
    // console.log("JASONS", data)

    addUser(data)
    .then(res => {
      const userAdded = res.data;
      // console.log("userAdded", userAdded);
      updateHandler();

    })
    .catch( err =>{
      console.log(err);

    })
    setIsOpen(false);
  }

  return (
    
    <Modal open={isOpen} >
      <div className="add-user-modal">
        <h1>Agregar Usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register("firstName")} className="user-modal-input" variant="outlined" placeholder="FirstName" name="firstName" label="First Name"></TextField>
          <TextField {...register("lastName")} className="user-modal-input" variant="outlined" placeholder="Last Name" name="lastName" label="Last Name"></TextField>
          <TextField {...register("email")} className="user-modal-input" variant="outlined" placeholder="Email" name="email" label="Email"></TextField>
          <TextField {...register("image")} className="user-modal-input" variant="outlined" placeholder="Image" name="image"  label="Image"></TextField>
          <div>
          <label>
          isActive?
          <input
                type="checkbox"
                value="true"
                className="user-modal-input" 
                {...register("isActive")}
            />
          </label>
          </div>
          <input type="submit"/>
        </form>
      </div>
  </Modal>
  )
}

export default AddUserModal
