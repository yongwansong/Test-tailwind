// DOCS https://alpinejs.dev/globals/alpine-data
// Check main.js file how to register components

export const templateSwitch = (initialValue = '') => ({
  active: initialValue, //type: String
  show(payload) {
    this.active = payload
  }
})