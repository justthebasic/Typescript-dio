import { ChakraProvider } from '@chakra-ui/react'
import { Conta } from './pages/Conta'
import {Home} from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContaInfo } from './pages/ContaInfo'
import { createContext } from 'react'
import { AppContextProvider } from './components/AppContext'






function App() {
  

  return (
    <>
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/conta/:id' element={ <Conta/> }/>
              <Route path='/containfo' element={ <ContaInfo/> }/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
