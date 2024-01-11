import {
    createAsyncThunk, createSlice, createSelector
} from '@reduxjs/toolkit';
import auth from '../../../entities/auth';
import {
    Status,
} from '../../../shared/utils/utils';


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
    async (values,thunkApi) => {
        try {
            const { username, email, password } = values;
            return await auth.register(username, email, password);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
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
    async (values,thunkApi) => {
        const { email, password } = values;
        try {
            return await auth.login(email, password);
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
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
            return thunkApi.rejectWithValue(error);
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
            .addCase(register.fulfilled, (state, action)=> {
                state.status = Status.SUCCESS;
                state.loading = false;
                state.user = action.payload.user;
                localStorage.setItem('jwt', action.payload.user.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                state.errors = null;

            })
            .addCase(register.rejected, (state, action)=> {
                state.loading = false;
                state.status = Status.FAILURE;
                state.errors = action.payload.errors;
            })

        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled,(state, action)=> {
                state.status = Status.SUCCESS;
                state.loading = false;
                state.user = action.payload.user;
                localStorage.setItem('jwt', action.payload.user.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                state.errors = null;
            })
            .addCase(login.rejected,(state, action)=> {  
                state.loading = false;
                state.status = Status.FAILURE;
                state.errors = action.payload.errors;
            });

        builder
            .addCase(updateUser.pending, (state) => {   
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action)=> {
                state.status = Status.SUCCESS;
                state.loading = false;
                state.user = action.payload.user;
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                state.errors = null;
            })
            .addCase(updateUser.rejected, (state, action)=> {
                state.loading = false;
                state.status = Status.FAILURE;
                state.errors = action.payload.errors;
            });
        
        builder
            .addCase(getUser.fulfilled, (state, action)=> {
                state.status = Status.SUCCESS;
                state.loading = false;
                state.user = action.payload.user;
                state.errors = null;
            })
    }
});



/**
 * Get is authenticated
 *
 * @param {object} state
 * @returns {boolean}
 */
export const isAuthenticated = localStorage.getItem('jwt') ? true : false;


export const authReducer = authSlice.reducer
