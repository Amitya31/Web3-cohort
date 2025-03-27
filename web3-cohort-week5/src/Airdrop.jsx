import { useConnection, useWallet } from "@solana/wallet-adapter-react";
const Airdrop = () => {

    const wallet = useWallet()
    const {connection} = useConnection()

    async function sendAirDrop(){
    console.log("Requesting Airdrop...");
    try{
        await connection.requestAirdrop(wallet.publicKey, 10 * 1e9);
        console.log("Airdrop requested")
    }catch(err){
        console.log(err);
    }

    }
    return ( 
        <div>
            <input type="text" placeholder="Enter amount" />
            <button onClick={sendAirDrop}>Request Airdrop</button>
        </div>
     );
}
 
export default Airdrop;