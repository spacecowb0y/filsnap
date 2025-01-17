import { FilecoinNumber } from "@glif/filecoin-number/dist";
import { SnapProvider } from "@metamask/snap-types";
import { getKeyPair } from "../filecoin/account";
import { LotusRpcApi } from "../filecoin/types";

export async function getBalance(
  wallet: SnapProvider,
  api: LotusRpcApi,
  address?: string
): Promise<string> {
  if (!address) {
    address = (await getKeyPair(wallet)).address;
  }
  const balance = await api.walletBalance(address);
  return new FilecoinNumber(balance, "attofil").toFil();
}
