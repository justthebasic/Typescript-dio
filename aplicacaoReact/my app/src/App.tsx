import { ChakraProvider } from '@chakra-ui/react'
import { Conta } from './pages/Conta'
import {Home} from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContaInfo } from './pages/ContaInfo'







function App() {
  

  return (
    <>
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/conta/:id' element={ <Conta/> }/>
            <Route path='/containfo' element={ <ContaInfo/> }/>
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
    </>
  )
}

export default App
