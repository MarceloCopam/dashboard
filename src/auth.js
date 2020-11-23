const defaultUser = {
  email: 'marcelo@copam.com',
  avatarUrl: 'https://media.fstatic.com/PghQZR9oQlp2np7yLIiCiOOmMwc=/full-fit-in/640x480/media/accounts/avatar/2014/04/28344c64-8702-49ba-807f-d72dfcef8b77.jpg'
};

export default {
  _user: defaultUser,
  loggedIn() {
    return !!this._user;
  },

  async logIn(email, password) {
    return alert(email + password)
    // try {
    //   // Send request
    //   console.log(email, password);
    //   this._user = { ...defaultUser, email };

    //   return {
    //     isOk: true,
    //     data: this._user
    //   };
    // }
    // catch {
    //   return {
    //     isOk: false,
    //     message: "Authentication failed"
    //   };
    // }
  },

  async logOut() {
    this._user = null;
  },

  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false
      };
    }
  },

  async resetPassword(email) {
    try {
      // Send request
      console.log(email);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to reset password"
      };
    }
  },

  async changePassword(email, recoveryCode) {
    try {
      // Send request
      console.log(email, recoveryCode);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to change password"
      }
    }
  },

  async createAccount(email, password) {
    try {
      // Send request
      console.log(email, password);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to create account"
      };
    }
  }
};
