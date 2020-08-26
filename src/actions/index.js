export const FETCHING_REPOS_INIT = "FETCHING_REPOS_INIT";
export const FETCHING_REPOS_SC = "FETCHING_REPOS_SC";
export const FETCHING_REPOS_FAILED = "FETCHING_REPOS_FAILED";

const REPOS_API_URL = userName =>
  `https://api.github.com/users/${userName}/repos?order=desc&page=1&per_page=10&sort=updated_at`;
const ORGS_API_URL = userName =>
  `https://api.github.com/users/${userName}/orgs?order=desc&page=1&per_page=10&sort=updated_at`;

export const fetchRepos = () => ({
  type: FETCHING_REPOS_INIT
});

export const fetchReposSC = data => ({
  type: FETCHING_REPOS_SC,
  payload: data
});

export const fetchReposFailed = () => ({
  type: FETCHING_REPOS_FAILED
});

export const fetchReposAPI = userName => dispatch => {
  dispatch(fetchRepos());
  Promise.all([fetch(REPOS_API_URL(userName)), fetch(ORGS_API_URL(userName))])
    .then(async ([reposRs, orgsRs]) => {
      const reposData = await reposRs.json();
      const orgsData = await orgsRs.json();
      return [reposData, orgsData];
    })
    .then(([reposList, orgsList]) => {
      
      let convertedReposList = (reposList || []).map(r => ({
        name: r.name,
        description: r.description || 'description',
        htmlUrl: r.html_url
      }))

      let convertedOrgsList = (orgsList || []).map(o => ({
        description: o.description || 'description',
        avatarUrl: o.avatar_url,
        url: `https://github.com/${o.login}`
      }))
      dispatch(fetchReposSC({ reposList: convertedReposList, orgsList: convertedOrgsList }));
    })
    .catch(err => {
      console.error("err", err);
      dispatch(fetchReposFailed());
    });
};
