import { Button, Card, Icon, Icons, Toaster, Tooltip } from 'construct-ui'

import Clicks from '../../models/Clicks'
import './styles.scss'

const toaster = new Toaster()

export default function() {
  return {
    view() {
      return m(Card, {
        elevation: 1,
        style: 'min-width: 300px;',
      },
      m('h4', 'Click Counter'),
      m('.count', `${Clicks.count} clicks`),
      m('.buttons', [
        m(Tooltip, {
          content: 'Click me!',
          trigger: m(Button, {
            label: m(Icon, {
              name: Icons.PLUS,
            }),
            intent: 'primary',
            onclick() {
              Clicks.count++
            },
          }),
        }),
        m(Button, {
          label: m(Icon, {
            name: Icons.MINUS,
          }),
          intent: 'primary',
          onclick() {
            Clicks.count--
          },
        }),
        m(Button, {
          label: 'reset',
          intent: 'primary',
          onclick() {
            Clicks.reset()
            const existing = toaster.getToasts()
            if (existing.length < 1) { // only show one toast maximum
              toaster.show({ message: 'Counter reset!', timeout: 1500 })
            }
          },
        }),
        m(toaster),
      ]),
      )
    },
  }
}
