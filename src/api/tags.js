import requests from '../shared/api/agent';

const tags = {
    /**
     * Get all tags
     *
     * @returns {Promise<Tags>}
     */
    getAll: () => requests.get('/tags'),
  };



  export default tags;