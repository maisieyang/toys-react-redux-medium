import {
    createAsyncThunk,
} from '@reduxjs/toolkit';
import agent from '../../api/agent';

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
        try {
            const {
                user: { token, user },
            } = await agent.Auth.register(username, email, password);

            return { token, user };
        } catch (error) {
            // if (isApiError(error)) {
            //   return thunkApi.rejectWithValue(error);
            // }

            throw error;
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
    async (values) => {
        const { email, password } = values;
        try {
            const {
                user: { token, user },
            } = await agent.Auth.login(email, password);

            return { token, user };
        } catch (error) {
            // if (isApiError(error)) {
            //   return thunkApi.rejectWithValue(error);
            // }

            throw error;
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
    async (values) => {
        debugger
        const { username, email, password, image, bio } = values;
        try {
            const {
                user: { token, user },
            } = await agent.Auth.save(username, email, password, image, bio);

            return { token, user };
        } catch (error) {
            // if (isApiError(error)) {
            //   return thunkApi.rejectWithValue(error);
            // }

            throw error;
        }
    }
);