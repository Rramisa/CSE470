import React, {useState} from 'react'
import {v4 as uuidV4} from 'uuid';

const Home = () => {
  const [roomId,setRoomId] = useState();
  const [username, setUsername] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
  }
  return <div className="homePageWrapper">
    <div className="formWrapper">
      <img className="homepageLogo" src='code-sync.png' width={150} height={150} alt="code-sync-logo"/>
      <h4 className="mainLabel">Paste Join code</h4>
      <div className="inputGroup">
        <input type="text" className="inputBox" placeholder="Room Code" onChange={(e) => setRoomId(e.target.value)} value={roomId}/>
        <input type="text" className="inputBox" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
        <button className="btn joinBtn">Join</button>
        <span className="createInfo">
           Create &nbsp; 
          <a onClick={createNewRoom} href=" " className="createNewBtn">
            New Room
          </a>
        </span>
      </div>
    </div>
    <footer>
      <h4>
        Built by Ramisa
      </h4>
    </footer>
  </div>;
  
};

export default Home;
