const ACCESS_KEY = 'access';
const REFRESH_KEY = 'refresh';

// Своё событие: «токены поменялись». На него подписан AuthProvider
export const AUTH_CHANGE_EVENT = 'auth-change';

const notify = () => window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));

// Единственное место, которое знает, где лежат токены
export const tokens = {
  getAccess: () => localStorage.getItem(ACCESS_KEY),
  getRefresh: () => localStorage.getItem(REFRESH_KEY),

  // после логина приходят оба токена, после refresh — только access
  save: (access: string, refresh?: string) => {
    localStorage.setItem(ACCESS_KEY, access);
    if (refresh) localStorage.setItem(REFRESH_KEY, refresh);
    notify();
  },

  clear: () => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    notify();
  },
};
