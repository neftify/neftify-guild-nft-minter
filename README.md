# Neftify Guild NFT Minter

![ezgif-3-c5078b8329](https://user-images.githubusercontent.com/25227327/163280140-b3797380-5a2d-4893-9f04-85eafe2bb006.gif)

## Quick Start

Clone or fork `neftify-guild-nft-minter`:
```sh
git clone https://github.com/neftify/neftify-guild-nft-minter
```
Install all dependencies:
```sh
cd neftify-guild-nft-minter
yarn install 
```
Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)), plus some other Biconomy API Keys:
```jsx
REACT_APP_MORALIS_APPLICATION_ID=xxx
REACT_APP_MORALIS_SERVER_URL=xxx
```
Run your App:
```sh
yarn start
```

