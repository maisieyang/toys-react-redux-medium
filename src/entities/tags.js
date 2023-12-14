import requests from '../shared/api/agent';

const tags = {
    /**
     * Get all tags
     *
     * @returns {Promise<Tags>}
     */
    getAll: () => requests.get('/tags'),
    create: () => requests.create('/tags'),
  };



  export default tags;