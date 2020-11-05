import m from 'mithril'

import Layout from './views/Layout'
import Counter from './components/Counter'

const Routes = {
  '/': {
    render() {
      return m(Layout, m(Counter))
    },
  },
}

const DefaultRoute = '/'

export { Routes, DefaultRoute }
