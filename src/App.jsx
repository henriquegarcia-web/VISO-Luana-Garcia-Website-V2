import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MetaTags from "react-meta-tags";

import Home from './pages/Home'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './pages/AdminLogin'
import ContentsPage from './pages/Contents'
import DiscProfileAssessment from './pages/_tools/DiscProfileAssessment'

import 'swiper/css/bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      {/* <MetaTags>
        <title>Page 1</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="/thanks.png" />
      </MetaTags> */}

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/blog" element={<ContentsPage />} />

          <Route path="/analise-disc" element={<DiscProfileAssessment />} />
          <Route
            path="/analise-disc/:userId"
            element={<DiscProfileAssessment />}
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
