

# Gitcoin: 7) Port An Existing Ethereum DApp To Polyjuice

## 1. Screenshots or video of your application running on Godwoken.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-7/Workspace%202_213.png)

## 2. Link to the GitHub repository with your application which has been ported to Godwoken. This must be a different application than the one covered in this guide.

* https://github.com/ubinix-warun/blockchain-workshop
* https://github.com/ubinix-warun/nervoszombies

## 3. If you deployed any smart contracts as part of this tutorial, please provide the transaction hash of the deployment transaction, the deployed contract address, and the ABI of the deployed smart contract. (Provide all in text format.)

```
Deployed contract address: 0x39AE21F50cd4F16B0387098243aA2895Afe4b80d
Deploy transaction hash: 0x39ee2926eeb3089d1c684b99a2cbfc95fb108451afc194a0ef2329a805317240
```

```
[
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "zombieId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "dna",
              "type": "uint256"
          }
      ],
      "name": "NewZombie",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "zombies",
      "outputs": [
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "dna",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          }
      ],
      "name": "createRandomZombie",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getZombiesSize",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getLatestZombie",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "dna",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct ZombieFactory.Zombie",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]
```

## FAQ

### Note ...!

```

nvm use v14.17.0

yarn 
yarn build
yarn start:ganache

yarn ui

```