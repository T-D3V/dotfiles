const entry = App.configDir + '/main.ts'
const outfile = '/tmp/ags/main.js'

try {
  // @ts-ignore
  await Utils.execAsync([
    'bun', 'build', entry,
    '--outfile', outfile,
    '--external', 'resource://*',
    '--external', 'gi://*',
  ])
  // @ts-ignore
  await import(`file://${outfile}`)
} catch (error) {
  console.error(error)
}

export { }
