
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';


function App() {

  return (
      <ConnectionProvider endpoint={'https://solana-devnet.g.alchemy.com/v2/IDdLUV4bhQbMr0lXuqrQj7ErVO88EY1h'}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                <h1>hi there <b>AMit </b></h1>
                <span></span>
                <Airdrop />
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App