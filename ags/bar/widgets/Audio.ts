const audio = await Service.import('audio')

const Speaker = () => Widget.EventBox({
  onScrollUp: () => audio.speaker.volume += 0.01,
  onScrollDown: () => audio.speaker.volume -= 0.01,
  onPrimaryClick: () => audio.speaker.is_muted = !audio.speaker.is_muted,
  onSecondaryClick: () => audio.speaker.volume = 1,
  child: Widget.Icon({
    class_name: 'bar-end-speaker',
  }).hook(audio.speaker, self => {
    const volume = audio.speaker.volume * 100
    const icon = [
      {
        threshhold: 101,
        icon: 'overamplified',
      },
      {
        threshhold: 67,
        icon: 'high',
      },
      {
        threshhold: 34,
        icon: 'medium',
      },
      {
        threshhold: 1,
        icon: 'low',
      },
      {
        threshhold: 0,
        icon: 'muted',
      },
    ].find(elem => elem.threshhold <= volume)
    if (!audio.speaker.is_muted && icon?.threshhold !== 0)
      self.icon = `audio-volume-${icon?.icon}-symbolic`
    else
      self.icon = 'audio-volume-muted-symbolic'
    self.tooltip_text = `Volume: ${Math.round(volume)}%`
  }),
})

const Microphone = () => Widget.EventBox({
  onScrollUp: () => audio.microphone.volume + 0.01 <= 1 ? audio.microphone.volume += 0.01 : false,
  onScrollDown: () => audio.microphone.volume -= 0.01,
  onPrimaryClick: () => audio.microphone.is_muted = !audio.microphone.is_muted,
  child: Widget.Icon({
    class_name: 'bar-end-microphone',
  }).hook(audio.microphone, self => {
    const volume = audio.microphone.volume * 100
    const icon = [
      {
        threshhold: 67,
        icon: 'high',
      },
      {
        threshhold: 34,
        icon: 'medium',
      },
      {
        threshhold: 1,
        icon: 'low',
      },
      {
        threshhold: 0,
        icon: 'muted',
      },
    ].find(elem => elem.threshhold <= volume)
    if (!audio.microphone.is_muted && icon?.threshhold !== 0)
      self.icon = `audio-input-microphone-${icon?.icon}-symbolic`
    else
      self.icon = 'audio-input-microphone-muted-symbolic'
    self.tooltip_text = `Sensitivity: ${Math.round(volume)}%`
  }),
})

export { Speaker, Microphone }
