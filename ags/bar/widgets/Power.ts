type PowerMenuOption = {
  class: string,
  icon: string,
  command: string,
}

const ShowPowerMenu = Variable(false)

export default () => {
  const PowerMenuOptions: PowerMenuOption[] = [
    {
      class: 'lock',
      icon: ' ',
      command: 'hyprlock',
    },
    {
      class: 'logout',
      icon: ' ',
      command: 'hyprctl dispatch exit 1',
    },
    {
      class: 'reboot',
      icon: ' ',
      command: 'reboot',
    },
  ]
  const PowerItem = (option: PowerMenuOption) => Widget.Button({
    class_name: option.class,
    child: Widget.Label({
      label: option.icon,
    }),
    onClicked: _ => Utils.exec(option.command),
  })

  const PowerMenu = () => Widget.Revealer({
    revealChild: ShowPowerMenu.bind(),
    transitionDuration: 550,
    transition: 'slide_left',
    child: Widget.Box({
      spacing: 8,
      children: PowerMenuOptions.map(option => PowerItem(option)),
    }),
  })

  return Widget.EventBox({
    onHover: _ => ShowPowerMenu.setValue(true),
    onHoverLost: _ => ShowPowerMenu.setValue(false),
    child: Widget.Box({
      class_name: 'bar-end-power',
      spacing: 8,
      hpack: 'end',
      hexpand: false,
      children: [
        PowerMenu(),
        PowerItem({
          class: 'shutdown',
          icon: ' ',
          command: 'shutdown now',
        }),
      ],
    }),
  })
}

