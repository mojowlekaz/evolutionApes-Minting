import React, { useState, useEffect } from 'react'
import "/Users/macbook/lonenft/src/styles/Verify.css";
import {TbNumber1, TbNumber2} from "react-icons/tb"; 
import {MdVerified} from "react-icons/md"; 
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Mint from '/Users/macbook/lonenft/src/Pages/Mint.js';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export default function Verify() {
    useEffect( () => {


      
        setInterval(() => {
            setShowComponent(true);
        } , 1000)
    }, []);

    const [showComponent, setShowComponent] = useState(false)
    const [page, setPage]= useState(0)
    const [click , setClick] = useState(0);


    const handleclick = () => {
      setClick(click + 1)
    }
    const handleclick_2 = () => {
      setClick(click + 1)
    }
    const handleclick_3 = () => {
      setClick(click + 1)
    }

    if(page === 1) {
      return (
        <div><Mint /></div>
      )
    }

    if( click == 1) {
        <div>
          <button>THH</button>
        </div>
    }

    if(page === 0) {
  return (
    <div className='verify'>
                <h1> <h2>< TbNumber1 /></h2>Follow</h1>
        <div className='twitter'>
        <div className= "vertical">
       <div className='pad'>
       <h1> <h2><TbNumber2 /></h2>Join Discord</h1>
       <iframe className='iframe' src="https://discord.com/widget?id=1055618509020864514&theme=dark" width="500" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> 
        {click === 1 ?  <button onClick={ () => {setPage(page + 1)}}> Start Engine <MdVerified    
       style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "3px", left: "" }} /></button> : <div className='show'> 
        Follow our Social Us, send us a message and twet about us with the available button to enter the Mint!</div>} 

       </div>
        </div>
        
        
        
   <TwitterTweetEmbed
       options={{height: 400, color: "white"}}
  tweetId={'1578330984831152130'}
       />
       

{/* <button  onClick={handleclick} type="button" >hh</button> */}

<a onClick={handleclick } > 
<TwitterFollowButton 
    screenName={'coinAnalisis'}
    options={{height: 400,
    }}
  />
  </a> <br />
 
<a  onClick={handleclick}
  >
    <TwitterDMButton  
    id={1364031673}
    options={{ size: "large", backgroundColor: "black", text:'Hey there, I just give you a follow' }}
    
  />
  </a>
<br />
{/* <a class="twitter-mention-button"
  href="https://twitter.com/intent/tweet?screen_name=TwitterDev"
  options={{text:'Hey there, I just give you a follow' }}
  >
Tweet to @TwitterDev</a>
   */}

<a  onClick={handleclick}>
<TwitterMentionButton 
  screenName={'coinAnalisis'}
  options={{ text:'Hey guys, Free Mint is Available here #NFT #FreeMint @(Your friends)' }}
  backgroundColor= "green"
/>
  </a><br />
  
        </div>
    
    </div>
  )
  
} else{
  <div>
    folow us
  </div>
}
      
} 
