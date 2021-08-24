import Web3 from "web3";
import { PolyjuiceHttpProvider } from "@polyjuice-provider/web3";

import { POLYJUICE_CONFIG } from "./config.mjs";
import { sendTronTransaction } from "./helpers.mjs";

const ACCOUNT_PRIVATE_KEY = '...'; // Replace this with your Tron private key with funds on Layer 2.
const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; // this should be an Array []
const CONTRACT_ADDRESS = '0x155D3a2cb7Ba2a0442FDc4F8F61412CbD1f8c366';
const TRON_ADDRESS = 'TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2';

const provider = new PolyjuiceHttpProvider(
  POLYJUICE_CONFIG.web3Url,
  POLYJUICE_CONFIG,
);

const web3 = new Web3(provider);

async function readCall() {
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  const callResult = await contract.methods.get().call();

  console.log(`Read call result: ${callResult}`);
}

async function writeCall() {
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  const rset = Math.floor(Math.random() * 1000);

  console.log('>> Random: ', rset);

  const callData = contract.methods.set(rset).encodeABI();

  const txHash = await sendTronTransaction(
    { address: TRON_ADDRESS, privateKey: ACCOUNT_PRIVATE_KEY },
    CONTRACT_ADDRESS,
    callData
  );

  console.log(`Write call transaction hash: ${txHash}`);

  console.log(`Waiting for tx receipt doesn't work for Tron calls, but if transaction was submitted then you can check the smart-contract state after 120s and the state should be changed successfully. Waiting 2 minutes...`);
  await new Promise(r => setTimeout(r, 120 * 1000));

  console.log(`Write call finished.`);
}

(async () => {
  console.log(`Using Tron address: ${TRON_ADDRESS}`);
  console.log("Calling contract...");

  // Check smart contract state before state change.
  await readCall();

  // Change smart contract state.
  await writeCall();

  // Check smart contract state after state change.
  await readCall();
})();
