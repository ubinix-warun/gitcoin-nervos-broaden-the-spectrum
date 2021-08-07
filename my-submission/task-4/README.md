

# Gitcoin: 4) Issue An SUDT Token On Layer 1 And Deposit It To Layer 2

## 1. A link to the Layer 1 address you funded on the Testnet Explorer.

https://explorer.nervos.org/aggron/transaction/0x2a2dc709caabef6fe6f5c2540ee4764477cd7fbfa2665e1ac6514daf246e3dfb

## 2. A screenshot of the console output immediately after using sudt-cli to create your SUDT tokens on Layer 1.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-4/Workspace%202_210.png)


## 3. A link to the transaction ID created by sudt-cli on the Testnet Explorer.

https://explorer.nervos.org/aggron/transaction/0x2a2dc709caabef6fe6f5c2540ee4764477cd7fbfa2665e1ac6514daf246e3dfb

## 4. A screenshot of the console output immediately after you have successfully submitted a deposit to Layer 2 using the account-cli tool.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-4/Workspace%202_211.png)


## 5. The SUDT ID from the console output after executing the deposit script (in text format).

```
Your sudt id: 319
```

## FAQ

### Note L1!

```
nvm use v14.17.0
npm i -g sudt-cli

sudt-cli --help
sudt-cli balance -k <PRIVATE_KEY>

Network Type:	   testnet
SUDT Token ID:	   0x0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd
Issuer Lock Hash:  0xdaf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f (AKA SUDT Type Args)
Balance Address:   ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
Balance:	   0 Tokens


sudt-cli issue -k <PRIVATE_KEY> -m 100

Network Type:	   testnet
SUDT Token ID:	   0x0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd
Issuer Lock Hash:  0xdaf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f (AKA SUDT Type Args)
Issuer Address:	   ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
Dest Address:	   ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
Amount:		   100 Tokens
Fee:		   10000 Shannons

Transaction:	   0x2a2dc709caabef6fe6f5c2540ee4764477cd7fbfa2665e1ac6514daf246e3dfb
Explorer URL:	   https://explorer.nervos.org/aggron/transaction/0x2a2dc709caabef6fe6f5c2540ee4764477cd7fbfa2665e1ac6514daf246e3dfb
Note:		   It may take 1-2 minutes before the transaction is visible on the Explorer.


sudt-cli balance -k <PRIVATE_KEY>

...

Balance Address:   ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
Balance:	   100 Tokens


```

### Note L2!

```

node ./packages/tools/lib/account-cli.js deposit-sudt -m 20 -r http://3.235.223.161:18114 \
     -s 0xdaf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f \
     -p <INSERT_PRIVATE_KEY> -l 0x7fDa18fd4224b81563cab062c7f8D235c39edc58


LUMOS_CONFIG_NAME: AGGRON4
current indexer data path: ./indexer-data-path/0x10639e0895502b5688a6be8cf69460d76541bfa4821629d86d62ba0aae3f9606
Indexer is syncing. Please wait.
Syncing 99.88% completed.
Syncing 99.89% completed.
Syncing 99.9% completed.
Syncing 99.91% completed.
Syncing 99.92% completed.
Syncing 99.93% completed.
Syncing 99.94% completed.
Syncing 99.95% completed.
Syncing 99.96% completed.
Syncing 99.97% completed.
Syncing 99.98% completed.
Syncing 99.99% completed.
Indexer synchronized.
using eth address: 0x7fDa18fd4224b81563cab062c7f8D235c39edc58
using ckb address: ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
Layer 2 lock script hash: 0xde0494b4af6485318e9fb61991b3d4b2ac677039f2619cfc5d67363c1ef66a78
Your address: 0xde0494b4af6485318e9fb61991b3d4b2ac677039
Layer 1 sudt script hash: 0x0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd
layer 2 sudt script: {
  code_hash: '0xb6d6a2882d3d08cea565047bfe901cb2afe0cb790ea5e1b61e0532ef237c4a02',
  hash_type: 'type',
  args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a0e7835259cf25e8529b5b25498426f73462b9d8170a4e27c6fb265d50afb7ccd'
}
Layer 2 sudt script hash: 0xb2f89028599ff697187689f914017521809fe248b35cc11d6b3873be8e134475
↑ Using this script hash to get sudt account id ↑
txHash: 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c
--------- wait for tx deposit ----------
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is pending, waited for 0 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is pending, waited for 3 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is pending, waited for 6 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is proposed, waited for 9 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is proposed, waited for 12 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is committed, waited for 15 seconds
tx 0xee6a4f3b79c86cd79c39a0362ff5b872abf2a7f7838fce5e1796b06d926aa16c is committed!
waiting for layer 2 block producer collect the deposit cell ... 0 seconds
Your account id: 298
waiting for layer 2 block producer collect the deposit cell ... 5 seconds
waiting for layer 2 block producer collect the deposit cell ... 10 seconds
waiting for layer 2 block producer collect the deposit cell ... 15 seconds
waiting for layer 2 block producer collect the deposit cell ... 20 seconds
waiting for layer 2 block producer collect the deposit cell ... 25 seconds
waiting for layer 2 block producer collect the deposit cell ... 30 seconds
waiting for layer 2 block producer collect the deposit cell ... 35 seconds
waiting for layer 2 block producer collect the deposit cell ... 40 seconds
waiting for layer 2 block producer collect the deposit cell ... 45 seconds
waiting for layer 2 block producer collect the deposit cell ... 50 seconds
Your sudt id: 319
ckb balance in godwoken is: 200000000000
sudt balance in godwoken is: 20
deposit success!


```