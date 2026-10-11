const KEY = 'aptiquest-demo-v1';
export const initialState = {
  user: null,
  xp: 320,
  coins: 80,
  streak: 3,
  completedLessons: [],
  quizResults: [],
  certificates: [],
  battleResults: [],
  dailyChallenges: [],
  favourites: [],
  language: 'English'
};
export function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!saved || typeof saved !== 'object') return initialState;
    return {...initialState, ...saved};
  } catch { return initialState; }
}
export function saveState(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable */ }
}
export function getToday() {return new Date().toISOString().slice(0, 10);}
