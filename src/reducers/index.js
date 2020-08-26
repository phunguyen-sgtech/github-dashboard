import {
  FETCHING_REPOS_INIT,
  FETCHING_REPOS_SC,
  FETCHING_REPOS_FAILED
} from "../actions";
const initialState = {
  loading: false,
  repos: [],
  orgs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REPOS_INIT:
      return {
        ...state,
        loading: true,
        repos: [],
        orgs: []
      };

    case FETCHING_REPOS_SC:
      const { payload } = action;
      return {
        ...state,
        loading: false,
        repos: [...state.repos, ...payload.reposList],
        orgs: [...state.repos, ...payload.orgsList]
      };
    case FETCHING_REPOS_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
