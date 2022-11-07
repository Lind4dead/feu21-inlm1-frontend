


const actiontypes = () => {
  return {
    users: {
      login: 'LOGIN',
      logout: 'LOGOUT',
      register: 'REGISTER',
      checkToken: 'CHECK_TOKEN'
    },
    issues: {
      getComments: 'GET_COMMENTS'
    },
    modals: {
      toggleModal: 'TOGGLE_MODAL'
    }
  }
}

 export default actiontypes