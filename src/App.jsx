import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobList from './components/JobList'
import JobDetails from './components/JobDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="job/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
