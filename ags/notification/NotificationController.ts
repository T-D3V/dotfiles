import { Notification as NotificationType } from 'types/service/notifications'

const notifications = await Service.import('notifications')

const NotificationIcon = ({ app_entry, app_icon, image }) => {
  if (image) {
    return Widget.Box({
      css: `background-image: url("${image}");`
        + 'background-size: contain;'
        + 'background-repeat: no-repeat;'
        + 'background-position: center;',
    })
  }

  let icon = 'dialog-information-symbolic'
  if (Utils.lookUpIcon(app_icon))
    icon = app_icon

  if (app_entry && Utils.lookUpIcon(app_entry))
    icon = app_entry

  return Widget.Box({
    child: Widget.Icon(icon),
  })
}

const Notification = (n: NotificationType) => {
  const icon = Widget.Box({
    vpack: 'start',
    class_name: 'notification-icon',
    child: NotificationIcon(n),
  })

  const title = Widget.Label({
    class_name: 'notification-title',
    xalign: 0,
    justification: 'left',
    hexpand: true,
    max_width_chars: 24,
    truncate: 'end',
    wrap: true,
    label: n.summary,
    use_markup: true,
  })

  const body = Widget.Label({
    class_name: 'notification-body',
    hexpand: true,
    use_markup: true,
    xalign: 0,
    justification: 'left',
    label: n.body,
    wrap: true,
  })

  const actions = Widget.Box({
    class_name: 'notification-actions',
    children: n.actions.map(({ id, label }) => Widget.Button({
      class_name: 'notification-actions-button',
      on_clicked: () => {
        n.invoke(id)
        n.dismiss()
      },
      hexpand: true,
      child: Widget.Label(label),
    })),
  })

  return Widget.EventBox({
    attribute: { id: n.id },
    on_primary_click: n.dismiss,
  },
  Widget.Box({
    class_name: `notification ${n.urgency}`,
    vertical: true,
  },
  Widget.Box([
    icon,
    Widget.Box(
      {
        vertical: true,
      },
      title,
      body,
    ),
  ]),
  actions,
  ),
  )
}

export default (monitor = 0) => Widget.Window({
  monitor,
  name: `notifications${monitor}`,
  class_name: 'notification-popups',
  anchor: ['top', 'right'],
  child: Widget.Box({
    css: 'min-width: 2px; min-height: 2px;',
    class_name: 'notifications',
    vertical: true,
    children: notifications.bind('popups')
      .as(popups => popups.map(Notification)),
  }),
})
