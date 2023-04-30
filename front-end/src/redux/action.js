import {
	SET_USER_CONFIG,
	SET_USER_PREF,
	SET_MASTER_APP_LOADING,
	SET_LOGIN_USER,
} from "./action-types";

const setUserConfig = (userConfig) => ({ type: SET_USER_CONFIG, userConfig });
const setUserPref = (userPref) => ({ type: SET_USER_PREF, userPref });
const setIsMasterAppLoading = (isMasterAppLoading) => ({
	type: SET_MASTER_APP_LOADING,
	isMasterAppLoading,
});

const setLoginUser = (loginUser) => ({ type: SET_LOGIN_USER, loginUser });

export default {
	setUserConfig,
	setUserPref,
	setIsMasterAppLoading,
	setLoginUser,
};
