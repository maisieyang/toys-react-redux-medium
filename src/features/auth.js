import {
    createAsyncThunk, createSlice, createSelector
} from '@reduxjs/toolkit';
import auth from '../api/auth';
import {
    Status, handleApiError
} from '../common/utils';


// export const { setToken, logout } = authSlice.actions;





/**
 * Send a register request
 *
 * @param {object} argument
 * @param {string} argument.username
 * @param {string} argument.email
 * @param {string} argument.password
 */
export const register = createAsyncThunk(
    'auth/register',
    async (values) => {
        const { username, email, password } = values;
        return await auth.register(username, email, password);
    }
);


/**
 * Send a login request
 *
 * @param {object} argument
 * @param {string} argument.email
 * @param {string} argument.password
 */
export const login = createAsyncThunk(
    'auth/login',
    async (values) => {
        const { email, password } = values;
        return  await auth.login(email, password);
    }
);

/**
 * Send a update User request
 * @param {object} argument
 * @param {string} argument.username
 * @param {string} argument.email
 * @param {string} argument.password
 * @param {string} argument.image
 * @param {string} argument.bio
 */
export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (values, thunkApi) => {
        const { username, email, password, image, bio } = values;
        try {
            return await auth.save(username, email, password, image, bio);
        } catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);

/**
 * get current User request
 */
export const getUser = createAsyncThunk(
    'auth/getUser',
    async () => {
        return await auth.current();
    }
);

/**
 * @param {import('@reduxjs/toolkit').Draft<AuthState>} state
 * @param {import('@reduxjs/toolkit').PayloadAction<{token: string, user: User}>} action
 */
function successReducer(state, action,setToken=false) {
    state.status = Status.SUCCESS;
    state.loading = false;
    state.user = action.payload.user;
    if (setToken) {
        localStorage.setItem('jwt', action.payload.user.token);
    }
    state.errors = null;
  }

  

function failureReducer(state, action) {
    state.loading = false;
    state.status = Status.FAILURE;
    state.errors = action.payload.errors;
  }


  /**
 * @type {AuthState}
 */
const initialState = {
    status: Status.IDLE,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action)=> successReducer(state, action, 
                { setToken:true }))
            .addCase(register.rejected, (state, action)=> failureReducer(state, true))

        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled,(state, action)=> successReducer(state, action, { setToken:true }))
            .addCase(login.rejected,(state, action)=> failureReducer(state, action));

        builder
            .addCase(updateUser.pending, (state) => {   
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action)=> successReducer(state, action))
            .addCase(updateUser.rejected, (state, action)=> failureReducer(state, action));
        
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action)=> successReducer(state, action))
            .addCase(getUser.rejected, (state, action)=> failureReducer(state, action))

    }
});



/**
 * Get is authenticated
 *
 * @param {object} state
 * @returns {boolean}
 */
export const isAuthenticated = localStorage.getItem('jwt') ? true : false;

/**
 * Get current user
 *
 * @param {object} state
 * @returns {User}
 */
export const selectUser = (state) => state.auth.user;


export const authReducer = authSlice.reducer
