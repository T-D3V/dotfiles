const network = await Service.import('network')
const WifiIndicator = () => Widget.Box({
  spacing: 4,
  children: [
    Widget.Icon({
      icon: network.wifi.bind('icon_name'),
    }),
  ],
})

const WiredIndicator = () => Widget.Box({
  spacing: 4,
  children: [
    Widget.Icon({
      icon: network.wired.bind('icon_name'),
    }),
  ],
})

export default () => Widget.EventBox({
  onPrimaryClick: () => Utils.execAsync('nm-connection-editor'),
  child: Widget.Stack({
    class_name: 'bar-end-network-indicator',
    children: {
      wifi: WifiIndicator(),
      wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
  }),
})
