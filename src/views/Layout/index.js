import { Grid } from 'construct-ui'

import Counter from '../../components/Counter'
import './styles.scss'

export default function() {
  return {
    view() {
      return m('.content', [
        m(Grid, {
          justify: 'center',
        },
        m('.header',
          m('h1', 'Mithril Boilerplate'),
        ),
        ),
        m(Grid, {
          class: 'counter',
          align: 'middle',
          justify: 'center',
        },
        m(Counter),
        ),
      ])
    },
  }
}
