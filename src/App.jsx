import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EntryForm from './pages/EntryForm';
import DrApp from './pages/DrApp';
import PatientDetails from './pages/PatientDetails';
function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/new-entry' element={<EntryForm />} />
          <Route path='/dr-app' element={<DrApp />} />
          <Route path='/patient-details' element={<PatientDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
