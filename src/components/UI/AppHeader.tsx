import { Button} from '@material-ui/core';
import React from 'react'

const AppHeader = ({openWin, userData}:any) => {
console.log("openwinsss", openWin)
console.log("users", userData)
    return (
        <div>
            <div className="app-header">      
                <h1>User Manager ({userData.length})</h1>  
                <Button variant="contained" color="primary" onClick={openWin}>Agregar</Button>
            </div>
        </div>
    )
}

export default AppHeader
