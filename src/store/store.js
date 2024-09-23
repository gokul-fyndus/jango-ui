// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { jango_app } from '../services/API/app';
import { jango_auth } from '../services/API/auth';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[jango_app.reducerPath]: jango_app.reducer,
		[jango_auth.reducerPath]: jango_auth.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([jango_app.middleware, jango_auth.middleware]),
});

setupListeners(store.dispatch);
