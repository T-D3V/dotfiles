import { Mpris } from 'types/service/mpris'
const mpris: Mpris = await Service.import('mpris')

export default () => Widget.EventBox({
  onScrollUp: () => mpris.getPlayer('playerctld')?.next(),
  onScrollDown: () => mpris.getPlayer('playerctld')?.previous(),
  onPrimaryClick: () => mpris.getPlayer('playerctld')?.playPause(),
  onSecondaryClick: () => mpris.getPlayer('playerctld')?.playPause(),
  child: Widget.Box({
    class_name: 'bar-end-media',
    spacing: 8,
    children: [
      Widget.CircularProgress({
        rounded: false,
        inverted: false,
        startAt: 0.75,
        setup: self => {
          function update() {
            const player = mpris.getPlayer('playerctld')
            if (!player)
              return
            const value = player.position / player.length
            self.value = value > 0 ? value : 0
          }
          self.hook(mpris, update)
          self.poll(1000, update)
        },
        child: Widget.Label({

        }).hook(mpris, label => {
          const player = mpris.getPlayer('playerctld')
          if (!player)
            return
          if (player.play_back_status === 'Playing')
            label.label = ''
          else
            label.label = ''
        }),
      }),
      Widget.Label({})
        .hook(mpris, label => {
          const player = mpris.getPlayer('playerctld')
          if (player)
            label.label = `${player.track_title} - ${player.track_artists.join(', ')}`
          else
            label.label = 'No Music'
        }),
    ],
  }),
})

