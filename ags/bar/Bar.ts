import { Microphone, Speaker } from './widgets/Audio'
import DateTime from './widgets/DateTime'
import FocusedTitle from './widgets/FocusedTitle'
import Media from './widgets/Media'
import NetworkIndicator from './widgets/NetworkIndicator'
import Power from './widgets/Power'
import SystemTray from './widgets/SystemTray'
import Workspaces from './widgets/Workspaces'

const Start = () => Widget.Box({
  class_name: 'bar-start',
  hpack: 'start',
  spacing: 8,
  children: [
    DateTime(),
    Workspaces(),
  ],
})

const Center = () => Widget.Box({
  class_name: 'bar-center',
  hpack: 'center',
  spacing: 8,
  children: [
    FocusedTitle(),
  ],
})

const End = () => Widget.Box({
  class_name: 'bar-end',
  hpack: 'end',
  spacing: 8,
  children: [
    SystemTray(),
    NetworkIndicator(),
    Microphone(),
    Speaker(),
    Media(),
    Power(),
  ],
})

export default (monitor: number) => Widget.Window({
  name: `bar-${monitor}`,
  class_name: 'bar',
  monitor,
  anchor: ['top', 'left', 'right'],
  exclusivity: 'exclusive',
  child: Widget.CenterBox({
    class_name: 'bar-center-box',
    vpack: 'center',
    start_widget: Start(),
    center_widget: Center(),
    end_widget: End(),
  }),
})
