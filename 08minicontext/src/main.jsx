
import App from './App.jsx'
import Usercontextprovider from './Context/Usercontextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <Usercontextprovider>
    <App />
  </Usercontextprovider>,
)
