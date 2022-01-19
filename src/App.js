import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUserName } from './features/Users';
import {useState} from 'react'

function App() {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.users.value)
    
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [updUsername, setUpdUserName] = useState('')
    return (
        <div className="App">
            <h1>All data</h1>
            <div className='addUser' >
                <input type='text' placeholder='name...' onChange={(event) => {
                    setName(event.target.value)
                }} />
                <input type='text' placeholder='username...'
                    onChange={(event) => {
                        setUserName(event.target.value)
                    }}
                />
                <button
                    onClick = {() => {
                        dispatch(addUser({
                            id: Number(userList[userList.length - 1].id) + 1,
                            name: name,
                            username: userName,
                        }))
                    }} 
                >Add User</button>
            </div>
            <div className='displayUsers' >
                {userList.map(user => {
                    return <div>
                                <h1>{user.id}</h1>
                                <h1>{user.name}</h1> 
                                <h1>{user.username}</h1>
                                <input 
                                    type='text'
                                    placeholder='newUserName...'
                                    onChange={(event) => {
                                        setUpdUserName(event.target.value)
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        dispatch(updateUserName({
                                            id: user.id,
                                            username: updUsername
                                        }))
                                    }}
                                >update user</button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteUser({ id: user.id }))
                                    }}
                                >delete user</button>
                            </div>
                })}
            </div>
        </div>
    );
}

export default App;
