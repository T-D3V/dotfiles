import { Hyprland } from 'types/service/hyprland'
const hyprland: Hyprland = await Service.import('hyprland')


export default () => Widget.Label({
  class_name: 'bar-center-focused-title',
  label: hyprland.active.client.bind('title'),
  visible: hyprland.active.client.bind('address')
    .as(addr => !!addr),
})

