const icons = {
  '00': '󱑖 ',
  '01': '󱑋 ',
  '02': '󱑌 ',
  '03': '󱑍 ',
  '04': '󱑎 ',
  '05': '󱑏 ',
  '06': '󱑐 ',
  '07': '󱑑 ',
  '08': '󱑒 ',
  '09': '󱑓 ',
  '10': '󱑔 ',
  '11': '󱑕 ',
  '12': '󱑖 ',
  '13': '󱑋 ',
  '14': '󱑌 ',
  '15': '󱑍 ',
  '16': '󱑎 ',
  '17': '󱑏 ',
  '18': '󱑐 ',
  '19': '󱑑 ',
  '20': '󱑒 ',
  '21': '󱑓 ',
  '22': '󱑔 ',
  '23': '󱑕 ',
}

export default () => Widget.Box({
  class_name: 'bar-start-date-time',
  children: [
    Widget.Label({

    })
      .poll(1000, self => {
        const currHour = Utils.exec('date "+%H"')
        self.label = `${icons[currHour]}`
      }),
    Widget.Label({
      class_name: 'bar-start-time',
    })
      .poll(1000, self => {
        const currtime = Utils.exec('date "+%H:%M"')
        self.label = `${currtime}`
      }),
    Widget.Label({
      label: ' ',
    }),
    Widget.Label({
      class_name: 'bar-start-date',
    })
      .poll(1000, self => {
        const currdate = Utils.exec('date "+%d.%m.%Y"')
        self.label = `${currdate}`
      }),
  ],
})
