//DOCS https://alpinejs.dev/globals/alpine-store#registering-a-store
//Check main.js file how to register store

export const mobileMenu = {
  visible: false,
  hide() {
    this.visible = false;
  },
  show() {
    this.visible = true;
  },
  toggle() {
    this.visible = !this.visible;
  }
}