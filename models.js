import { dispatch } from '@rematch/core'; // Version can be specified in package.json
import Expo from 'expo';

/*
  This is a basic rematch structure that manages the single permission. 
  We wrap our calls just in case we need to do anything else on a global level.
*/
export const locationPermission = {
  state: null,
  reducers: {
    update: (state, payload) => payload,
  },
  effects: {
    getAsync: async () => {
      const { status } = await Expo.Permissions.getAsync(
        Expo.Permissions.LOCATION,
      );
      dispatch.locationPermission.update(status);
    },
    askAsync: async () => {
      const { status } = await Expo.Permissions.askAsync(
        Expo.Permissions.LOCATION,
      );
      dispatch.locationPermission.update(status);
    },
  },
};

export const auth = {
  state: null,
  reducers: {
    update: (state, payload) => {
      return { ...state, ...payload };
    },
    set: (state, payload) => {
      return payload;
    },
  },
  effects: {},
};
