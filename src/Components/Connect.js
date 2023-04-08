import React from 'react'
import "/Users/macbook/lonenft/src/styles/Connect.css"
import Typewriter, { TypewriterClass } from 'typewriter-effect'
import {useEffect, useState} from 'react';
import Verify from '/Users/macbook/lonenft/src/Pages/Verify.js';
import Mint from '/Users/macbook/lonenft/src/Pages/Mint.js';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {MdVerified} from "react-icons/md"; 
import {IoMdWallet} from "react-icons/io"; 
import { render } from '@testing-library/react';


export default function Connect() {
    useEffect( () => {
    switchN();
  getConnectedWallet();
});
    const [walletAddress, setWalletAddress] = useState("")
    const [State, Setstate] = useState(false);
    const [page, setPage] = useState(0);
    const { ethers } = require("ethers");


async function   getConnectedWallet(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
    setWalletAddress(Accounts)
      } 
      catch(err){
      
      }
      else {
  
      }
      return true;
    
    }
async function connect(){
  if (typeof window.ethereum !== 'undefined') 
  try{
  const provider = new ethers.providers.Web3Provider(window.ethereum)            
  await provider.send("eth_requestAccounts", []);
  let signer = await provider.getSigner();
  let signature = await signer.signMessage ("Welcome to Our Free Mint, Be sure to join Our Social Media");
  console.log("Accounts address:", await signer.getAddress());
  let Accounts = await signer.getAddress();
  setWalletAddress(Accounts)
    } 
    catch(err){
     
    }
    else {
    }
    return true;
  
  }
  async function GetAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    let signature = await signer.signMessage ("Welcome to Our Free Mint, Be sure to join Our Social Media");
    const SignerAddrress = await ethers.utils.verifyMessage("Welcome to Our Free Mint, Be sure to join Our Social Media", signature)
    console.log(SignerAddrress)
  }
 async function switchN(){

      const provider = window.ethereum;
      const GoerliChainId = '0x5';
      
  if(!provider){
    
      console.log("Metamask is not installed, please install!");
  }else{
    
    const chainId = await provider.request({ method: 'eth_chainId' });
    
    if(chainId === GoerliChainId){
      
    console.log("Bravo!, you are on the correct network");
  }else{
    
  console.log("oulalal, switch to the correct network");
  try {
    
      await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: GoerliChainId}],
    });
    console.log("You have succefully switched to Binance Test network")
    
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
     console.log("This network is not available in your metamask, please add it")
     try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
          { chainId: '0x5', 
            chainName:'Goerli test network',
            rpcUrls:['https://goerli.infura.io/v3/'],
            blockExplorerUrls:['https://goerli.etherscan.io'],
            nativeCurrency: {
          symbol:'GoerliETH', // 2-6 characters long
      decimals: 18
        }
            
            }],
        });
      } catch (addError) {
        // handle "add" error
        console.log(addError);
      }
    }
  
  }
  }
    }
}  

if(page === 0) {
  return (
    <div className='Connect'>

           <div className='moving'>
           <Typewriter
   onInit={(typewriter) => {
    typewriter.typeString("Connect Your wallet to Explore!!").pauseFor(2000).deleteAll().typeString("You are Early to Mint!!").start();
   }}
    />
           </div>
        <div className='btn'>
        <button onClick={connect}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>

    {walletAddress.length > 0 ?  ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : "Connect Wallet"}<IoMdWallet    style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px" }} />
   </button>
        </div>


        { <div className='down'>
        <div  onClick={() => {
          Setstate(!State)}} > 
         <span></span>
          <span></span>
          <span></span>
          <span></span>
          {
           walletAddress.length > 0  ? <button  onClick={ () => {setPage(page + 1)}} >Verify<MdVerified    style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "3px", left: "" }} /></button> :""
          }
          </div>
           </div>} 
    </div>
  ) }
  
  
  if(page === 1) {
    return (
      <div><Verify /></div>
    )
  }

  }
  function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
      <li className= {isActive? "active": ""}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    )
  }
