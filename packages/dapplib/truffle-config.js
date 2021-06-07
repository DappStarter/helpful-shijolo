require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soap artwork heavy kiwi bridge genuine'; 
let testAccounts = [
"0x8d36ce2fde5297bdb8a20fe52753dfc5869f4f999af0c10b7165c2bf41ceb0a9",
"0x58339dc9b7c8b539a9ed87b09d1003acc3ed8cec915aa941ba08fd95b6be3976",
"0xbf149e5a28c6409127981c55b2f73dc08c7fced262497d29f2770d8f8d396a03",
"0xed2e83cf05ff6cee3a0c084dd8f03ff4be6fbe8f958713b643889bc50cc8b9de",
"0xd8cea3678df81d5c234500536c642becba6fe3b474bd71bd0b0064584631bf11",
"0x75bee8ffd93f043f2b8e3364817842b9595f2dd4caf167b664c45fc9a11d1391",
"0x4b50009f44dbe50d4d97ec7c17a52b96c3fd8fe5573d0e191e29405d6fe49b07",
"0xa2dfb70d05f71bd016fd15682fb8b812f47ff4b321467fb2879893c28f90922d",
"0xab342dd379fa3af305b1c813ea3562866ebf60f5d06ea81caf41a7df27c05abc",
"0x2a762a0946ffef0116159aeb6fe61a450c747b685dc15155e83ce1caf33f0137"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

