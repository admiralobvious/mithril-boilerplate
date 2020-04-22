import m from 'mithril'

import Layout from './views/Layout'
import Sample from './components/Counter'

const Routes = {
  '/': {
    render() {
      return m(Layout, m(Sample))
    },
  },
}

const DefaultRoute = '/'

export { Routes, DefaultRoute }
