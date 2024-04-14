import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const hasResult = useMemo(() => !Object.values(result).includes(""), [result])
  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}