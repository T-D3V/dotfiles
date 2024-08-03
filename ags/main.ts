import Bar from 'bar/Bar'
import NotificationController from 'notification/NotificationController'

App.config({
  style: './style.css',
  windows: [
    Bar(0),
    NotificationController(),
  ],
})

export { }
