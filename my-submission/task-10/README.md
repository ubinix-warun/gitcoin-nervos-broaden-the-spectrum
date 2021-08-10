

# Gitcoin: 10) Complete Withdrawal Process By Unlocking The Funds


## 1. A screenshot of the console output immediately after running the "unlock" command.

![CKB-SMARTCONTACT](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-9/Workspace%202_213.png)


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

```