

# Gitcoin: 3) Issue A Smart Contract Call To The Deployed Smart Contract


## 1. A screenshot of the console output immediately after you have successfully issued a smart contract call.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-3/Workspace%202_209.png)


## 2. The transaction hash from the console output (in text format).

```
0x6323a136615d16f004a1b958fa514825b6f418cda64dad8d46f5df7f324daf87
```

## 3. The contract address that you called (in text format).

```
0x155D3a2cb7Ba2a0442FDc4F8F61412CbD1f8c366
```

## 4. The ABI for contract you made a call on (in text format).

```
[
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
]
```


## FAQ

### Require  SimpleStorage!


```
nvm use v14.17.0

cd src/examples/2-deploy-contract
yarn install
yarn compile

node index.js SimpleStorage.json

Found file: ./build/contracts/SimpleStorage.json
Deploying contract...
Transaction hash: 0x8543b9b4dd6fb6ee619bb38033413cd5f17e294d8dd9f5a93fd1d95ce2195632
Deployed contract address: 0x155D3a2cb7Ba2a0442FDc4F8F61412CbD1f8c366

[
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
]

```
