import { extend, Navigator, Text, Screen, ScrollView } from '@shopify/retail-ui-extensions'

extend('pos.home.tile.render', (root, api) => {
  const tileProps = {
    title: 'My app',
    subtitle: 'SmartGrid Extension',
    enabled: true,
    onPress: () => {
      api.smartGrid.presentModal()
    }
  }

  const tile = root.createComponent('Tile', tileProps)

  root.appendChild(tile)
  root.mount()
})

extend('pos.home.modal.render', (root, _api) => {
  const navigator = root.createComponent(Navigator, {})
  const screen = root.createComponent(Screen, { name: 'HelloWorld', title: 'Hello World' })
  navigator.appendChild(screen)
  root.appendChild(navigator)

  const scrollView = root.createComponent(ScrollView, {})
  scrollView.appendChild(root.createComponent(Text, {}, 'Welcome to the extension!'))
  screen.appendChild(scrollView)

  root.mount()
})