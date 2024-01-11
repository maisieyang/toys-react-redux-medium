/**
 * States of the slice
 * @readonly
 * @enum {string}
 */
export const Status = {
    /** The initial state */
    IDLE: 'idle',
    /** The loading state */
    LOADING: 'loading',
    /** The success state */
    SUCCESS: 'success',
    /** The error state */
    FAILURE: 'failure',
  };
  
  /**
   * Check if error is an ApiError
   *
   * @param {object} error
   * @returns {boolean} error is ApiError
   */
  export function isApiError(error) {
    console.log(error)
    return typeof error === 'object' && error !== null && 'errors' in error;
  }

    // Helper function to check API errors
  export const handleApiError = (error, thunkApi) => {
  if (isApiError(error)) {
    return thunkApi.rejectWithValue(error);
  }
  throw error;
};

