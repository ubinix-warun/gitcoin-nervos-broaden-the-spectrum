

# Gitcoin: 1) Create A Godwoken Account On The EVM Layer 2 Testnet


## 1. A screenshot of the accounts you created (account list) in ckb-cli.



## 2. Create and Fund an Account with CKBytes on Layer 1

https://explorer.nervos.org/aggron/address/ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4


![CKB-L1](..)


## Deposit some CKBytes on Layer 2



![CKB-L2](..)


## FAQ

### Create acc on nervos L1 & Export key.

```
./ckb-cli --url http://3.235.223.161:18114
CKB> account new

./ckb-cli account list
address:
  mainnet: <>
  testnet: <>
lock_arg: <YOUR_LOCK_ARG>
lock_hash: <>

./ckb-cli account export --lock-arg <YOUR_LOCK_ARG> --extended-privkey-path ./privkey.txt

cat ./privkey.txt
<YOUR_PRIVATE_KEY>
<>  -- chain code for the BIP44 standard

```

### Create acc on nervos L2 & Deposit.

```
git clone https://github.com/Kuzirashi/godwoken-examples -b testnet-script
cd godwoken-examples

nvm use v14.17.0

yarn && yarn build-all
yarn generate-testnet-configs

chmod +x get-testnet-snapshot-data.sh
./get-testnet-snapshot-data.sh

wget https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-linux-amd64 -O lumos-config-generator
chmod +x ./lumos-config-generator
./lumos-config-generator config.json http://3.235.223.161:18114

node ./packages/tools/lib/account-cli.js --help

node ./packages/tools/lib/account-cli.js to-short-address -a <YOUR_ETHEREUM_ADDRESS>
godwoken short address: <>

node ./packages/tools/lib/account-cli.js deposit -r http://3.235.223.161:18114 -p <YOUR_PRIVATE_KEY> -l 0x7fDa18fd4224b81563cab062c7f8D235c39edc58 -c 100000000000

```

### Reconfig nvm v14.17.0 & lumos config.

```

node ./packages/tools/lib/account-cli.js to-short-address -a 0x7fDa18fd4224b81563cab062c7f8D235c39edc58
internal/modules/cjs/loader.js:1127
  return process.dlopen(module, path.toNamespacedPath(filename));
                 ^

Error: /gitcoin-nervos-broaden-the-spectrum/my-submission/task-1/godwoken-examples/node_modules/@ckb-lumos/indexer/native/index.node: undefined symbol: _ZN2v816FunctionTemplate3NewEPNS_7IsolateEPFvRKNS_20FunctionCallbackInfoINS_5ValueEEEENS_5LocalIS4_EENSA_INS_9SignatureEEEiNS_19ConstructorBehaviorENS_14SideEffectTypeE
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1127:18)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/gitcoin-nervos-broaden-the-spectrum/my-submission/task-1/godwoken-examples/node_modules/@ckb-lumos/indexer/lib/index.js:4:59)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)



```
