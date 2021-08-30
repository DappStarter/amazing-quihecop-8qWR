require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note shift pudding half climb swift throw'; 
let testAccounts = [
"0x40192854d7ee5b0194cd62ae608f820916b3cb38092f723f78857eb369d2c677",
"0x2556b0c359b8f59e8bcdfdb273996846aae846ab703e213b1065e5f78de780b7",
"0x7927e5ebb9b2224d0a4f6cf106f62e971207810326c3c7e29e4c61e497cbf495",
"0x0bfe18e9ded1e96e25b2851a00a948fb84c4367a3d208c16791117733f03c58c",
"0x4a63611808ac65e5a6997dd203a69f6f7913c4eb96939a551f0e2984cc461918",
"0xe5d0babc2bcfe22a94a2c578f86bb5f18f86953e28d9a26a2a36a0abf540f591",
"0x4a3e51adc5d58ec0fbe41d5d8fa153d552aad63085144fa17f9fa065457f3e3d",
"0x7d7e05acdd17e3c2ae2b25878a3f7cc09ac9c5d973c5b7ac750b968beae7442a",
"0xcee4a141c43b7db0b54c52fc5f365854c3d557546eb384064ca87d3fc48b7e67",
"0xdb50b0d36b0748f3b4673205c18a6b9b5a5ad4a981e27da01ff841d0a0f8a1ef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


