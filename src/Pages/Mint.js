import React from 'react'
import "/Users/macbook/lonenft/src/styles/Mint.css"
import {useEffect, useState} from 'react';
export default function Mint() {

  const [page, setPage] = useState(0)
    const Number = 0;
  return (
    <div className='Mint'>
        <h1 className='h1'>EVOLUTION APES MINT</h1>
        <p>Congratulations, you are one of the lucky few who made it to our WhiteList! <br />
       You are able to mint up to 3 NFTs at the price of ( TBA ) ETH.</p>
      <div className='big-box'>
        <div className='box'>
        <h2>MINT</h2>
        <label> { Number} NFT's Minted</label>
        <div className='content'>
        <span>Balance </span> <hr />
        <div className='Second-Content'>
        <span>Amount</span> &nbsp; &nbsp;  
        <button >-</button> 
        <span> <>{Number}</></span>
        <button >+</button>
         <hr />
        </div>
        <button >Mint</button>
        </div>
        </div>
        <div className= "vertical-1"> 
            <div className='container'>
        <div class="boxes">
            <div className='card' id='front'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            <div className='card' id='back'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            <div className='card' id='left'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            <div className='card' id='right'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            <div className='card' id='top'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            <div className='card' id='bottom'><img  style={{width: "245px", top: "-100px", height: "244px"}} src={(require("/Users/macbook/lonenft/src/assets/example.gif"))} /></div>
            </div>
</div>
        </div>
      </div>
    </div>
  )
}
