import { SystemTray as SystemTrayService, TrayItem } from 'types/service/systemtray'
const systemtray: SystemTrayService = await Service.import('systemtray')

const SysTrayItem = (item: TrayItem) => Widget.Button({
  child: Widget.Icon().bind('icon', item, 'icon'),
  tooltipMarkup: item.bind('tooltip_markup'),
  onPrimaryClick: (_, event) => item.activate(event),
  onSecondaryClick: (_, event) => item.openMenu(event),
})

export default () => Widget.Box({
  class_name: 'bar-end-system-tray',
  children: systemtray.bind('items').as(i => i.map(SysTrayItem)),
})
