import { useEffect } from "react"

export default function Messaje() {

    useEffect(() => {
        console.log("Message Mounted");

        return () => {
            console.log("Message UnMounted");
        }
    })

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
