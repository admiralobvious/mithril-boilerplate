import { Grid } from 'construct-ui'

import Counter from '../../components/Counter'
import './styles.scss'

export default function() {
  return {
    view() {
      return m('div', [
        m(Grid, {
          align: 'middle',
        },
        m('h2', 'Mithril Boilerplate'),
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
