import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'tw-elements'
import 'flowbite'
import 'flowbite/dist/flowbite.js'
import 'flowbite/dist/datepicker.js'
import 'tw-elements/dist/js/index.min.js'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

library.add(fab)
library.add(fas)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
