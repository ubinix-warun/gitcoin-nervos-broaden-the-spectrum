const Web3 = require('web3');
const { PolyjuiceHttpProvider } = require("@polyjuice-provider/web3");
const { AddressTranslator } = require('nervos-godwoken-integration');

const CompiledContractArtifact = require(`./build/contracts/ERC20.json`);

const ETHEREUM_ADDRESS = '0x7fDa18fd4224b81563cab062c7f8D235c39edc58';
const SUDT_PROXY_CONTRACT_ADDRESS = '0x790e17a78d94f2210D903Abf2EE6E07C0C039D1C';

const GODWOKEN_RPC_URL = 'http://godwoken-testnet-web3-rpc.ckbapp.dev';
const polyjuiceConfig = {
    rollupTypeHash: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a',
    ethAccountLockCodeHash: '0xdeec13a7b8e100579541384ccaf4b5223733e4a5483c3aec95ddc4c1d5ea5b22',
    web3Url: GODWOKEN_RPC_URL
};

const provider = new PolyjuiceHttpProvider(
    GODWOKEN_RPC_URL,
    polyjuiceConfig,
);

const web3 = new Web3(provider);

(async () => {
    console.log(`Using Ethereum address: ${ETHEREUM_ADDRESS}`);
    const addressTranslator = new AddressTranslator();
    const polyjuiceAddress = addressTranslator.ethAddressToGodwokenShortAddress(ETHEREUM_ADDRESS);
    console.log(`Corresponding Polyjuice address: ${polyjuiceAddress}`);

    console.log(`Checking SUDT balance using proxy contract with address: ${SUDT_PROXY_CONTRACT_ADDRESS}...`);

    const contract = new web3.eth.Contract(CompiledContractArtifact.abi, SUDT_PROXY_CONTRACT_ADDRESS);
    console.log(await contract.methods.balanceOf(polyjuiceAddress).call({
        from: ETHEREUM_ADDRESS
    }));
})();