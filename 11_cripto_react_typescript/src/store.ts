import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { Cryptocurrency, Pair } from "./types"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[]
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],  
  fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos()
      set(() => ({
          cryptocurrencies
      }))
  },
  fetchData: async (pair) => {
      await fetchCurrentCryptoPrice(pair)
  }
})))