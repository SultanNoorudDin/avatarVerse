import {
	SET_USER_CONFIG,
	SET_USER_PREF,
	SET_MASTER_APP_LOADING,
	SET_LOGIN_USER,
} from "./action-types";

import { REHYDRATE } from "redux-persist/src/constants";
import Constants from "../comp/utils/Constants";

const {
	MasterDrawerMenuType,
	CoordinateFormat,
	SearchPlaceSectionType,
	PlaceType,
} = Constants;

const initial = {
	userConfig: {
		selectedMenuType: MasterDrawerMenuType.Search,
	},
	userPref: {
		appSettings: {
			coordinateFormat: CoordinateFormat.DecDeg,
			searchPlaceFrom: [
				PlaceType.City,
				PlaceType.State,
				PlaceType.Country,
			],
			searchPlaceSectionArray: [
				SearchPlaceSectionType.InputCoordinates,
				SearchPlaceSectionType.PlaceDetails,
				SearchPlaceSectionType.CountryDetails,
				SearchPlaceSectionType.TimeZoneDetails,
				SearchPlaceSectionType.FavouritePlaces,
			],
			enableDayNightMode: true,
		},
		favPlaceArray: [],
		isMasterAppLoading: false,
	},
	LoginUser: {
		UserName: null,
		Avatar: null,
		passworrd: null,
	},
};

const reducer = (state = initial, action) => {
	switch (action.type) {
		case SET_USER_CONFIG:
			return Object.assign({}, state, { userConfig: action.userConfig });

		case SET_USER_PREF:
			return Object.assign({}, state, { userPref: action.userPref });

		case SET_MASTER_APP_LOADING:
			return Object.assign({}, state, {
				isMasterAppLoading: action.isMasterAppLoading,
			});

		case SET_LOGIN_USER:
			return Object.assign({}, state, { LoginUser: action.loginUser });

		case REHYDRATE:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

export default reducer;
