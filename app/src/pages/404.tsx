import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

const Error = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <h1 className="text-8xl font-bold">404</h1>
        <h2>Something is going wrong...</h2>
      </div>
    </>
  )
}

export default Error