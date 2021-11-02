import { setupApp } from './app'

const port = process.env.PORT || 3000

setupApp().then((app) => {
  app.listen(port, () => {
    console.log('Listening on port ', port)
  })
})
