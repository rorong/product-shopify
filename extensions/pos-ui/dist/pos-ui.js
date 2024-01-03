(() => {
  // node_modules/@shopify/retail-ui-extensions/build/esm/extend.mjs
  var extend = (...args) => globalThis.shopify.extend(...args);

  // node_modules/@remote-ui/core/build/esm/component.mjs
  function createRemoteComponent(componentType) {
    return componentType;
  }

  // node_modules/@shopify/retail-ui-extensions/build/esm/components/Text/Text.mjs
  var Text = createRemoteComponent("Text");

  // node_modules/@shopify/retail-ui-extensions/build/esm/components/ScrollView/ScrollView.mjs
  var ScrollView = createRemoteComponent("ScrollView");

  // node_modules/@shopify/retail-ui-extensions/build/esm/components/Screen/Screen.mjs
  var Screen = createRemoteComponent("Screen");

  // node_modules/@shopify/retail-ui-extensions/build/esm/components/Navigator/Navigator.mjs
  var Navigator = createRemoteComponent("Navigator");

  // extensions/pos-ui/src/index.js
  extend("pos.home.tile.render", (root, api) => {
    const tileProps = {
      title: "My app",
      subtitle: "SmartGrid Extension",
      enabled: true,
      onPress: () => {
        api.smartGrid.presentModal();
      }
    };
    const tile = root.createComponent("Tile", tileProps);
    root.appendChild(tile);
    root.mount();
  });
  extend("pos.home.modal.render", (root, _api) => {
    const navigator = root.createComponent(Navigator, {});
    const screen = root.createComponent(Screen, { name: "HelloWorld", title: "Hello World" });
    navigator.appendChild(screen);
    root.appendChild(navigator);
    const scrollView = root.createComponent(ScrollView, {});
    scrollView.appendChild(root.createComponent(Text, {}, "Welcome to the extension!"));
    screen.appendChild(scrollView);
    root.mount();
  });
})();
//# sourceMappingURL=pos-ui.js.map
