

# Gitcoin: 10) Complete Withdrawal Process By Unlocking The Funds

## 1. A screenshot of the accounts you created (account list) in ckb-cli.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-11/Workspace%202_226.png)


## 2. A link to the Layer 1 address you funded on the Testnet Explorer.

Link: https://explorer.nervos.org/aggron/address/ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4


## 3. A screenshot of the console output immediately after you have successfully submitted a CKByte deposit to your Tron account on Layer 2.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-11/Workspace%202_227.png)


## 4. A screenshot of the console output immediately after you have successfully issued a smart contract calls on Layer 2.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-2/Workspace%202_228.png)


## 5. The transaction hash of the "Contract call" from the console output (in text format).
```
0x8543b9b4dd6fb6ee619bb38033413cd5f17e294d8dd9f5a93fd1d95ce2195632
```

## 6. The contract address that you called (in text format).
```
0x155D3a2cb7Ba2a0442FDc4F8F61412CbD1f8c366
```

## 7. The ABI for contract you made a call on (in text format).
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

## 8 . Your Tron address (in text format).
```
TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2
```

## FAQ

### DEPOSIT to TRON Addr

```
node ./packages/tools/lib/account-cli.js deposit \
    -p <> --tron-address TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2 \
    -c 100000000000 -r http://3.235.223.161:18114 

LUMOS_CONFIG_NAME: AGGRON4
current indexer data path: ./indexer-data-path/0x10639e0895502b5688a6be8cf69460d76541bfa4821629d86d62ba0aae3f9606

Syncing 99.98% completed.
Syncing 99.99% completed.
Indexer synchronized.
using tron address: TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2
using ckb address: ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
rollup type hash: 0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a
Layer 2 lock script hash: 0xf80a0feccdfc13fb0e70c877eef12a4d65505489e9b911000f75b05bf23c5dee {
  layer2Lock: {
    code_hash: '0x28380fadb43a6f139d61a2509b69ecd2fbb2f61847ef6d39371b4f906c151ab5',
    hash_type: 'type',
    args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a823AA638E238839AF6691FE06A06812EFF29709D'
  }
}
Your Tron address as hex string (decoded from base58): 0x823AA638E238839AF6691FE06A06812EFF29709D
Your Polyjuice address: 0xf80a0feccdfc13fb0e70c877eef12a4d65505489
deposit lock: {
  code_hash: '0x5a2506bb68d81a11dcadad4cb7eae62a17c43c619fe47ac8037bc8ce2dd90360',
  hash_type: 'type',
  args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6aa1000000100000003000000099000000daf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f6900000010000000300000003100000028380fadb43a6f139d61a2509b69ecd2fbb2f61847ef6d39371b4f906c151ab501340000004cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a823aa638e238839af6691fe06a06812eff29709d00a30200000000c0'
}
txHash: 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c
--------- wait for tx deposit ----------
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 0 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 3 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 6 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 9 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 12 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 15 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 18 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is pending, waited for 21 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is proposed, waited for 24 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is committed, waited for 27 seconds
tx 0xe06a4ea1b24d2194e107834a9e7f9fd4d2bdc239af42c1dbb1a245377651f06c is committed!
waiting for layer 2 block producer collect the deposit cell ... 0 seconds
waiting for layer 2 block producer collect the deposit cell ... 5 seconds
waiting for layer 2 block producer collect the deposit cell ... 10 seconds
Your account id: 3342
ckb balance in godwoken is: 100000000000
deposit success!

```

### Call SmartContract

```
node index.mjs 
Using Tron address: TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2
Calling contract...
Read call result: 737
>> Random:  766
{
  tx: {
    from: '0x823AA638E238839AF6691FE06A06812EFF29709D',
    to: '0x155D3a2cb7Ba2a0442FDc4F8F61412CbD1f8c366',
    nonce: '0x0',
    gasPrice: '0x0',
    gas: '0x271110',
    value: '0x0',
    data: '0x60fe47b100000000000000000000000000000000000000000000000000000000000002fe'
  }
}
Write call transaction hash: 0xde3452b70b442b9cdba7f025674761c5391df8f4f611702262703af296739ecf
Waiting for tx receipt doesn't work for Tron calls, but if transaction was submitted then you can check the smart-contract state after 120s and the state should be changed successfully. Waiting 2 minutes...
Write call finished.
Read call result: 766

```

### !!! WAIT Godwoken (TEST) weakup
```
Using Tron address: TMqo72Ej8YGJCtAqnJrHiPbB3vAinM2SL2
Calling contract...
(node:20117) UnhandledPromiseRejectionWarning: Error: Returned error: {"jsonrpc":"2.0","id":1,"error":"Cannot read property 'result' of undefined"}
    at Object.ErrorResponse (/home/warun/WorkspaceX/2021/gitcoin-nervos-broaden-the-spectrum/src/examples/11-tron/node_modules/web3-core-helpers/lib/errors.js:28:19)
    at /home/warun/WorkspaceX/2021/gitcoin-nervos-broaden-the-spectrum/src/examples/11-tron/node_modules/web3-core-requestmanager/lib/index.js:303:36
    at PolyjuiceHttpProvider.send (/home/warun/WorkspaceX/2021/gitcoin-nervos-broaden-the-spectrum/src/examples/11-tron/node_modules/@polyjuice-provider/web3/lib/providers.js:159:21)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20117) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:20117) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

```