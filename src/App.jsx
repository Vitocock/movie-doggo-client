import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home.jsx'
import Movie from "./pages/Movie/Movie.jsx"
import Tv from "./pages/Tv/Tv.jsx"
import Person from "./pages/Person/Person.jsx"
import SearchResults from "./pages/SearchResults/SearchResults.jsx"
import PageContainer from "./components/PageContainer.jsx"

import "./App.css"

const App = () => {
  return (
  <PageContainer>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="tv/:id" element={<Tv />} />
      <Route path="person/:id" element={<Person />} />
      <Route path="search/:query" element={<SearchResults />} />
    </Routes>
  </PageContainer>
  )
}

export default App
