import { Paper, Avatar, Tooltip, IconButton} from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';
import React from 'react'
// import UserContext from '../api/UserContext';
// import {useContext,useEffect} from 'react';
import { editUser} from '../api/Users';

function UserList({userData,onDelete, updateHandler, activeUsers, deactiveUsers}:any) {

    // const {getUsers} = useContext(UserContext);
    // useEffect(() => {
    //     getUsers();
    //   console.log("hola aqui")
    // }, []);

    return (
        <div className="users-list">
            {
                userData.map((userInfo: any)=> {
                // console.log("user eache", userInfo)
                    return(
                        <Paper key={userInfo.id} className="user-row" elevation={3}>
                            <div className="left-side"  >
                                <Avatar   src={userInfo.image}
                                style={ userInfo.isActive ? { border: '5px solid #00FF00' } : { border: '5px solid #ff0000 ' } }
                                >
                                </Avatar>
                                <div className="user-name-container">
                                    <span className="user-name">{userInfo.firstName}</span>
                                    <span className="user-lastname"> {userInfo.lastName}</span>
                                    <span className="user-email"> {userInfo.email}</span>
                                </div>
                            </div>
                            <div className="right-side">
                                {userInfo.isActive ? 
                                        <Tooltip onClick={() => activeUsers(userInfo.id)}  title="desactivar">
                                            <IconButton>
                                                <Close></Close>
                                            </IconButton>
                                        </Tooltip>
                                      :     
                                        <Tooltip onClick={() => activeUsers(userInfo.id)}  title="activar">
                                            <IconButton>
                                                <Done></Done>
                                            </IconButton>
                                        </Tooltip>
                                }  
                                <Tooltip onClick={() => onDelete(userInfo.id)}  title="eliminar">
                                    <IconButton>
                                        <Delete></Delete>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Paper>
                    )
                })
            }
      </div>
            

    )
}

export default UserList
