

# Gitcoin: 9) Initiate Withdrawal Process From The Layer 2 Back To Layer 1

## 1. A screenshot of the console output immediately after running the withdraw command.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-9/Workspace%202_213.png)


## 2. The Ethereum address that you've used for your Layer 2 account (in text format).

```
0x7fda18fd4224b81563cab062c7f8d235c39edc58
```

## 3. The Nervos Layer 1 address that you passed to withdraw command (in text format).

```
ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4
```


## FAQ

### Note ...!

```

nvm use v14.17.0

ETH
node ./packages/tools/lib/account-cli.js to-short-address -a 0x7fDa18fd4224b81563cab062c7f8D235c39edc58

node ./packages/tools/lib/account-cli.js get-balance --account 0xde0494b4af6485318e9fb61991b3d4b2ac677039
Your balance: 239999979899
Easy to read: 239,999,979,899

node ./packages/tools/lib/account-cli.js withdraw -r http://3.235.223.161:18114 -p  <INSERT_PRIVATE_KEY> -o ckt1qyqvdzp39vsryyw9z4dj5s52n58jvztkyvtqp7jfk4 -c 40000000000

```