import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../node_modules/construct-ui/lib/index.css'

import { DefaultRoute, Routes } from 'routes'
import './app.scss'

if (module.hot) {
  module.hot.accept()
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

const $root = document.body.querySelector('#root')
m.route($root, DefaultRoute, Routes)
