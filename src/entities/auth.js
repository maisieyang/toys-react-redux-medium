import requests from '../shared/api/agent';


const auth = {
    /**
     * Get current user
     *
     * @returns {Promise<UserAuth>}
     */
    current: () => requests.get('/user'),
    /**
     * Login with email and password
     *
     * @param {String} email
     * @param {String} password
     * @returns {Promise<UserAuth>}
     */
    login: (email, password) =>
      requests.post('/users/login', { user: { email, password } }),
    /**
     * Register with username, email and password
     *
     * @param {String} username
     * @param {String} email
     * @param {String} password
     * @returns {Promise<UserAuth>}
     */
    register: (username, email, password) =>
      requests.post('/users', { user: { username, email, password } }),
    /**
     * Update user
     *
     * @param {Object}  user
     * @param {String} [user.email]
     * @param {String} [user.username]
     * @param {String} [user.bio]
     * @param {String} [user.image]
     * @param {String} [user.password]
     * @returns {Promise<UserAuth>}
     */
    save: (user) => requests.put('/user', { user }),
  };

  export default auth;