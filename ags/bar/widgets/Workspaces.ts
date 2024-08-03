import { Hyprland } from 'types/service/hyprland'
const hyprland: Hyprland = await Service.import('hyprland')

const wsId = hyprland.active.workspace.bind('id')
const dispatch = (ws: string) => hyprland.messageAsync(`dispatch workspace ${ws}`)

export default () => Widget.Box({
  class_name: 'bar-start-workspaces',
  children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
    attribute: i,
    label: `${i}`,
    class_name: wsId.as(id => `${id === i ? 'focused' : ''}`),
    onClicked: () => dispatch(`${i}`),
  })),
  setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
    btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute)
  })),
})
