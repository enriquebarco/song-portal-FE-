import * as React from "react";
import { ethers } from "ethers";
import './App.scss';

export default function App() {

  const song = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🎸 Welcome to Song Portal 🎵
        </div>

        <div className="bio">
        You've just landed on a decentralized application that allows you to share your favorite music using the blockchain! <strong>Connect your Ethereum wallet to post a song!</strong> 

        </div>

        <button className="songButton" onClick={song}>
          Post a Song 
        </button>
      </div>
    </div>
  );
}
