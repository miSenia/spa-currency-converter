import { useRoutes } from 'hookrouter';
import './App.css';
import  Converter from "./pages/SignUp/SignUp"
import Chat from "./pages/Chat/Chat"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
