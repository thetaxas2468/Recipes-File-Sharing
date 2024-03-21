import React from 'react';
import { useSelector } from "react-redux"
import "./UserLogo.css"
import axios from 'axios';
import {serverUrl, accountRoute, logOutAccount} from "../../constants";
import { Link } from 'react-router-dom';
const UserLogo = () => {
    const avatarStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',

    };
    const style = {
        position: "absolute",
        right: "5%",
        top: "5%"
    }
    const shortCut = useSelector(({ user: { email } }) => {
        if (!email) {
            return ""
        }
        return email[0] + email[1];
    });
    return (
        <div>
            {
                !shortCut && <div style={style}> <Link className='logout-button mt-2' to={"/signup"}>Sign up</Link> <Link className='logout-button mt-2' to={"/login"}>Sign in</Link></div>
            }
            { shortCut &&
                <div style={style}>
                    <h5>Welcome</h5>
                    <span style={avatarStyle}>
                        {shortCut}
                    </span>
                    <button className='logout-button mt-2' onClick={()=>{
                        axios.get(serverUrl + accountRoute + logOutAccount,{ withCredentials: true }).catch((err)=>{
                            alert(err.message);
                        });
                    }}>Log out</button>
                </div>
            }
        </div>
    );
};

export default UserLogo;