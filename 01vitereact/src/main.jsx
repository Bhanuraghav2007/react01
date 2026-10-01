import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//const anotheruse='chai aur code'
 //const reactelement=React.createElement(
// 'a',{
//   href:'https://google.com',target:'_blank'},
//   'click me to visit a google'
//anotheruser
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    //reactelement
  </StrictMode>,
)
