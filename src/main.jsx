import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../src/pages/Home/App.jsx'
import Survey from './pages/Survey/Survey.jsx'
import Header from './components/Header/Header.jsx'
import ClientForm from './components/ClientForm/ClientForm.jsx'
import FreelanceForm from './components/FreelanceForm/FreelanceForm.jsx'
import Results from './pages/Results/Results.jsx'
import Freelances from './pages/Freelances/Freelances.jsx'
import Footer from './components/Footer/Footer.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Error from './components/Error/Error.jsx'
import { ThemeProvider, SurveyProvider } from './utils/Context/Context.jsx'
import GlobalStyle from './utils/style/GlobalStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/survey/:questionNumber" element={<Survey />}>
              <Route path="clientForm" element={<ClientForm />} />
              <Route path="freelanceForm" element={<FreelanceForm />} />
            </Route>
            <Route path="results" element={<Results />} />
            <Route path="freelances" element={<Freelances />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </StrictMode>
)
