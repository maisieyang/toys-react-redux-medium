const API_ROOT =
  process.env.REACT_APP_BACKEND_URL ?? 'https://conduit.productionready.io/api';

  /**
 * Serialize object to URL params
 *
 * @param {Record<string, unknown>} object
 * @returns {String}
 */
function serialize(object) {
    const params = [];
  
    for (const param in object) {
      if (Object.hasOwnProperty.call(object, param) && object[param] != null) {
        params.push(`${param}=${encodeURIComponent(object[param])}`);
      }
    }
  
    return params.join('&');
  }
  
  let token = null;

/**
 * API client
 *
 * @param {String} url The endpoint
 * @param {Object} body The request's body
 * @param {('GET'|'DELETE'|'PUT'|'POST')} [method='GET'] The request's method
 *
 * @throws {@link ApiError API Error}
 *
 * @returns {Promise<Object>} API response's body
 */
const agent = async (url, body, method = 'GET') => {
  const headers = new Headers();

  if (body) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Token ${token}`);
  }

  try {
    const response = await fetch(`${API_ROOT}${url}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    // Fetch 在 HTTP 错误状态（如 404 或 500）上不会拒绝。它只在网络问题或如果任何事情阻止了请求完成时拒绝。这就是为什么我们要检查 response.ok 来处理潜在的 HTTP 错误的原因。
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'An error occurred');
    }
    console.log(result);
    return result;
  }
  catch (error) {
    throw new Error('An error occurred');
  }
};

  const requests = {
    /**
     * Send a DELETE request
     *
     * @param {String} url The endpoint
     * @returns {Promise<Object>}
     */
    del: (url) => agent(url, undefined, 'DELETE'),
    /**
     * Send a GET request
     *
     * @param {String} url The endpoint
     * @param {Object} [query={}] URL parameters
     * @param {Number} [query.limit=10]
     * @param {Number} [query.page]
     * @param {String} [query.author]
     * @param {String} [query.tag]
     * @param {String} [query.favorited]
     * @returns {Promise<Object>}
     */
    get: (url, query = {}) => {
      if (Number.isSafeInteger(query?.page)) {
        query.limit = query.limit ? query.limit : 10;
        query.offset = query.page * query.limit;
      }
      delete query.page;
      const isEmptyQuery = query == null || Object.keys(query).length === 0;
  
      return agent(isEmptyQuery ? url : `${url}?${serialize(query)}`);
    },
    /**
     * Send a PUT request
     *
     * @param {String} url The endpoint
     * @param {Record<string, unknown>} body The request's body
     * @returns {Promise<Object>}
     */
    put: (url, body) => agent(url, body, 'PUT'),
    /**
     * Send a POST request
     *
     * @param {String} url The endpoint
     * @param {Record<string, unknown>} body The request's body
     * @returns {Promise<Object>}
     */
    post: (url, body) => agent(url, body, 'POST'),
  };


export default requests;