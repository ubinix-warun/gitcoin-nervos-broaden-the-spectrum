

# Gitcoin: 0) Setup A Local CKB Node And CKB Indexer For The Testnet


## 1. Run CKB Node

```
./ckb init --chain testnet
curl -sSf https://raw.githubusercontent.com/Kuzirashi/gw-gitcoin-instruction/master/scripts/install_ckb_node_snapshot_data.sh | sh

./ckb run


```

![CKB-NODE](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-0/Workspace%202_209.png)


## 2. Run CKB Indexer

```
curl -sSf https://raw.githubusercontent.com/Kuzirashi/gw-gitcoin-instruction/master/scripts/install_ckb_indexer_snapshot_data.sh | sh
RUST_LOG=info ./ckb-indexer -s ./indexer-data

```

![CKB-IDX](https://raw.githubusercontent.com/ubinix-warun/gitcoin-nervos-broaden-the-spectrum/master/my-submission/task-0/Workspace%202_210.png)


## FAQ

### Require 7z cmd for use snapshot!

```
apt install p7zip-full p7zip-rar

```

### Forgot to use '--chain testnet' param.

```

2021-08-06 17:27:43.833 +00:00 main INFO sentry  sentry is disabled
2021-08-06 17:27:43.833 +00:00 main INFO ckb_bin::helper  raise_fd_limit newly-increased limit: 1048576
2021-08-06 17:27:43.999 +00:00 main INFO ckb_bin::subcommand::run  ckb version: 0.43.1 (15427e0 2021-07-16)
2021-08-06 17:27:43.999 +00:00 main INFO ckb_launcher  Miner is disabled, edit ckb.toml to enable it
init_snapshot Spec(GenesisMismatch(expected: Byte32(0x92b197aa1fba0f63633922c61c92375c9c074a93e85963554f5499fe1450d0e5), actual: Byte32(0x10639e0895502b5688a6be8cf69460d76541bfa4821629d86d62ba0aae3f9606)))


```
