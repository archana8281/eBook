import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
  return (
    <div>
        <div className="container">
            <div className="header">
                <a href="/" style={{textDecoration:'none'}}><img src="/images/logo.png" alt="loading" style={{height:'50px'}}/>
                <span className='icon-head'>eBook</span></a>
                <input type="search" name="search" id="" placeholder=' &#128269;  Search for anything'/>
                <button onClick={()=>{navigate('/login')}}>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Header