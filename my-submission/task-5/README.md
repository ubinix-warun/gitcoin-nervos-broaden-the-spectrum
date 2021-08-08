

# Gitcoin: 5) Deploy The ERC20 Proxy Contract For The Deposited SUDT

## 1. A screenshot of the console output immediately after deploying smart contract.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-5/Workspace%202_212.png)

## 2. The address of the ERC20 Proxy Contract you deployed (in text format).

```
0x790e17a78d94f2210D903Abf2EE6E07C0C039D1C
```

## 3. A screenshot of the console output immediately after checking your SUDT balance.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-5/Workspace%202_213.png)

## 4. The Ethereum address that was checked (in text format).

```
0x7fDa18fd4224b81563cab062c7f8D235c39edc58
```

## BONUS GET SUDT ID WITH 'Issuer Lock Hash'

```
node get-sudt-id.js 
Fetching SUDT ID for SUDT with Type Args: 0xdaf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f
Layer 1 SUDT script hash: 0x0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd
Layer 2 SUDT script: {
  code_hash: '0xb6d6a2882d3d08cea565047bfe901cb2afe0cb790ea5e1b61e0532ef237c4a02',
  hash_type: 'type',
  args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd'
}
Layer 2 SUDT script hash: 0xb2f89028599ff697187689f914017521809fe248b35cc11d6b3873be8e134475

        >>>>> SUDT ID: 319
...

```

## FAQ

### Note ERC20!

```

nvm use v14.17.0

cd src/examples/5-erc20-proxy
yarn install

yarn compile

node index.js
Using Ethereum address: 0x7fDa18fd4224b81563cab062c7f8D235c39edc58
Deploying contract...
Transaction hash: 0xf3cd6d1e40f50920b8529df23fb1c83f465509547c7dd0b85735183c572a8b58
Deployed SUDT-ERC20 Proxy contract address: 0x790e17a78d94f2210D903Abf2EE6E07C0C039D1C


node check-sudt-balance.js
Using Ethereum address: 0x7fDa18fd4224b81563cab062c7f8D235c39edc58
Corresponding Polyjuice address: 0xde0494b4af6485318e9fb61991b3d4b2ac677039
Checking SUDT balance using proxy contract with address: 0x790e17a78d94f2210D903Abf2EE6E07C0C039D1C...
20


```