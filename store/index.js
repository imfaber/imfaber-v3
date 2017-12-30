/**
 * This our global store state for our app.
 */

export const strict = true

export const state = () => ({
  menuMobileIsOpened: false,
  navBarColor: 'transparent'
})

export const mutations = {
  setMenuMobileIsOpened (state, value) {
    state.menuMobileIsOpened = value
  },
  navBarColor (state, value) {
    state.navBarColor = value
  }
}

