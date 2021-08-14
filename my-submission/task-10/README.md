

# Gitcoin: 10) Complete Withdrawal Process By Unlocking The Funds


## 1. A screenshot of the console output immediately after running the "unlock" command.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-10/Workspace%202_213.png)

* PS: withdrawal_block_number 15706n { last_finalized_block_number: 5720n } 
* 2021/08/14: withdrawal_block_number 15706n { last_finalized_block_number: 11591n } 
* It's many time to complete! (3D+)

## 2. The Ethereum address that you've used for your Layer 2 account (in text format).

```
0x7fda18fd4224b81563cab062c7f8d235c39edc58
```

## 3. The Nervos Layer 1 address associated with the private key passed to "unlock" command (in text format). This is "ckb address" in the console output.

```
ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
```


## FAQ

### Note ...!

```

nvm use v14.17.0

node ./packages/tools/lib/account-cli.js unlock -r http://3.235.223.161:18114 \
      -p <YOUR_LAYER_1_PRIVATE_KEY>

LUMOS_CONFIG_NAME: AGGRON4
current indexer data path: ./indexer-data-path/0x10639e0895502b5688a6be8cf69460d76541bfa4821629d86d62ba0aae3f9606
Indexer is syncing. Please wait.
Syncing 99.99% completed.
Indexer synchronized.
rollup_type_hash: 0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a
ckb address: ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
last_finalized_block_number 5720n
[DEBUG]: withdrawalCell: {
  cell_output: {
    capacity: '0x9502f9000',
    lock: {
      code_hash: '0x170ef156e9f6132dbca6069dfd3e436f7d91c29d3ac7332c4b33e633b6a299b5',
      hash_type: 'type',
      args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6ade0494b4af6485318e9fb61991b3d4b2ac677039f2619cfc5d67363c1ef66a78817311ebdb3fce63d6ca4b7c83d268538eca77f6187b867b63b43106ffdbfe2c413c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000902f5009000000daf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f0000000000000000000000000000000000000000000000000000000000000000'
    },
    type: undefined
  },
  out_point: {
    tx_hash: '0x127c4bb9fe46bdb1f87237b40eb7ea9a6568bd7fc772d5d7651f3bd85680013e',
    index: '0x3'
  },
  block_hash: '0x1abc630eddaa7279e4161666d028adeed5e4a13d239f7075fe4b110aa92963f5',
  block_number: '0x248d35',
  data: '0x'
}
withdrawal_block_number 15425n { last_finalized_block_number: 5720n }
[INFO]: withdrawal cell not finalized
[DEBUG]: withdrawalCell: {
  cell_output: {
    capacity: '0x9502f9000',
    lock: {
      code_hash: '0x170ef156e9f6132dbca6069dfd3e436f7d91c29d3ac7332c4b33e633b6a299b5',
      hash_type: 'type',
      args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6ade0494b4af6485318e9fb61991b3d4b2ac677039f2619cfc5d67363c1ef66a789408ed5c5bb45fc61bbc59254c8335f24c11cd64eef26eead80db03714765e66443d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000902f5009000000daf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f0000000000000000000000000000000000000000000000000000000000000000'
    },
    type: undefined
  },
  out_point: {
    tx_hash: '0xe81c2f6e9826f629a630f35c15560ded515a843462f9b7ccc4ea98b076cd5b4d',
    index: '0x3'
  },
  block_hash: '0x71db26d24595e4ba6f041a70fbef083754c1671a93cca3cc5504a85c8ca41919',
  block_number: '0x249447',
  data: '0x'
}
withdrawal_block_number 15684n { last_finalized_block_number: 5720n }
[INFO]: withdrawal cell not finalized
[DEBUG]: withdrawalCell: {
  cell_output: {
    capacity: '0x9502f9000',
    lock: {
      code_hash: '0x170ef156e9f6132dbca6069dfd3e436f7d91c29d3ac7332c4b33e633b6a299b5',
      hash_type: 'type',
      args: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6ade0494b4af6485318e9fb61991b3d4b2ac677039f2619cfc5d67363c1ef66a788847b781b72a2cba656f328ebeae1e9f98ddbcd72e756664ab2b24e10dd0cb275a3d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000902f5009000000daf38a441584f5ad8806f1784a30d1d2ae6345126955f9e7ef3bd9d8686eaf7f0000000000000000000000000000000000000000000000000000000000000000'
    },
    type: undefined
  },
  out_point: {
    tx_hash: '0xa918b41aa2e5ad2d75e4864ef4ad59c60cd2fbd0440f4c19b4c2632a4defa4c4',
    index: '0x3'
  },
  block_hash: '0x6b47f0b49de14476e0344bfe8092f308e3269f971f2a020de5d88d610f81f2bc',
  block_number: '0x2494eb',
  data: '0x'
}
withdrawal_block_number 15706n { last_finalized_block_number: 5720n }
[INFO]: withdrawal cell not finalized
[ERROR]: No valid withdrawal cell found


```