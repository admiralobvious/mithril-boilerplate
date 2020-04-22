import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../node_modules/construct-ui/lib/index.css'

import { DefaultRoute, Routes } from 'routes'
import './app.scss'

if (module.hot) {
  module.hot.accept()
}

const $root = document.body.querySelector('#root')
m.route($root, DefaultRoute, Routes)
