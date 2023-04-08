import { ethers } from "ethers";

export async function connect(){
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

  const SignerAddrress = await ethers.utils.verifyMessage("Welcome to Our Free Mint, Be sure to join Our Social Media", signature)
  console.log(SignerAddrress)