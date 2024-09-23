// import {
// 	BASE_URL,
// 	callRefreshToken,
// 	setHeaderstoFetchQuery,
//   } from "../constants/app-constants";
  import {
	BaseQueryApi,
	FetchArgs,
	createApi,
	fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  
  //Reference Code
  // initialize an empty api service that we'll inject endpoints into later as needed
  // export const interceptorsApiCall = createApi({
  // 	baseQuery: fetchBaseQuery({
  // 		baseUrl:process.env.REACT_APP_API_BASE_URI,
  // 		credentials: "same-origin",
  // 		// mode: 'no-cors',
  // 		prepareHeaders: (headers, { getState, endpoint }) => {
  // 			headers.set('Access-Control-Allow-Headers', '*');
  // 			headers.set('Access-Control-Allow-Origin', '*');
  // 			headers.set('user-tz', new Date().getTimezoneOffset().toString());
  // 			headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
  // 			setHeaderstoFetchQuery(headers);
  // 			return headers;
  // 		},
  // 	}),
  // 	tagTypes: '',
  // 	endpoints: () => ({}),
  // })
  
  const baseQuery = fetchBaseQuery({
	// baseUrl: BASE_URL,
	credentials: "same-origin",
	prepareHeaders: (headers, props) => {
	  const { endpoint } = props;
	  console.log(endpoint);
	  headers.set("Access-Control-Allow-Headers", "*");
	  headers.set("Access-Control-Allow-Origin", "*");
	  headers.set("user-tz", new Date().getTimezoneOffset().toString());
	  headers.set(
		"Access-Control-Allow-Methods",
		"POST, GET, PUT, OPTIONS, DELETE",
	  );
	//   setHeaderstoFetchQuery(headers, endpoint);
	  console.log(headers);
	  return headers;
	},
  });
  
  const baseQueryWithTokenRefresh:any = async (
	args: string | FetchArgs | any,
	api: BaseQueryApi,
	extraOptions: {},
  ) => {
	try {
	  // Perform the API call with the provided arguments
	  const result = await baseQuery(args, api, extraOptions);
	  if (!result?.meta?.response?.ok) {
		return result;
	  }
	  return result;
	} catch (responseError: any) {
	  // If the API call fails due to token expiration, attempt token refresh
	  if (responseError?.error?.status === 403) {
		const newArgs: string | FetchArgs | any = await callRefreshToken(
		  api,
		  extraOptions,
		  args,
		);
		if (newArgs) {
		  baseQuery(newArgs, api, extraOptions);
		}
	  }
	  throw responseError;
	}
  };
  
  export default baseQueryWithTokenRefresh;
  
  export const jango = createApi({
	baseQuery: baseQueryWithTokenRefresh,
	endpoints: () => ({}),
	reducerPath: "jango",
	keepUnusedDataFor: 0,
  });

function callRefreshToken(api: BaseQueryApi, extraOptions: {}, args: any): any {
	throw new Error("Function not implemented.");
}
  