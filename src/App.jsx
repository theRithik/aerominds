
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Header from './Head'
import Error404 from './Errors/404'
import Services from './services'
import Aboutus from './aboutus'
import Contactus from './contactus'
import Terms from './policy/terms&cond'
import PrivcyandPolicy from './policy/privacyPolicy'
import RoutingSuspense from './Errors/suspense'
import FallbackRender from './Errors/errorBoundery'

function App() {


  return (
    <>
     <ErrorBoundary fallback={<FallbackRender/>}>
      <Suspense fallback={<RoutingSuspense/>} >
        <BrowserRouter>
        <Routes>
          <Route element={<Header/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/> 
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/terms&condition' element={<Terms/>}/>
          <Route path='/privacy-policy' element={<PrivcyandPolicy/>}/>
         
          </Route>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        </BrowserRouter>
      </Suspense>
     </ErrorBoundary>
    </>
  )
}

export default App
