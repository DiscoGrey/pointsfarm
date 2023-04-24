import { useState, memo, useEffect } from 'react'

import { SocketContext, socket } from '../context/socket'

//import Layout from '../components/Layout'
import Signin from '../components/Signin'
import Dashboard from '../components/Dashboard'

const App = () => {
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized')
    if(isAuthorized === '1') setSigned(true)
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      {/* <Layout> */}
        {
          signed
            ? <Dashboard setSigned={setSigned} />
            : <Signin setSigned={setSigned} />
        }
      {/* </Layout> */}
    </SocketContext.Provider>
  )
}

export default memo(App) 