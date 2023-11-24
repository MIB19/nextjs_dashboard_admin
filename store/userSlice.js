import { createSlice } from '@reduxjs/toolkit'

const userList = [
  { user: 'admin', password: 'admin', name: 'Admin User' },
  { user: 'superadmin', password: 'superadmin', name: 'Superadmin User' },
  { user: 'owner', password: 'owner', name: 'Dashboard Owner' }
]

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = payload.payload
    },
    logout: (state) => {
      state.user = {}
    }
  },
})

export const login = (username, password) => (dispatch) => {
  let usr = {}
  userList.map((map) => {
    if (map.user === username && map.password === password) {
      usr = map
    }
  })
  if (!usr.name) {
    return { success: false, message: 'User tidak ditemukan!' }
  } else {
    dispatch(setUser(usr))
    return { success: true, message: 'Login berhasil!' }
  }
}

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer