import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialState, loadState, saveState, getToday } from '../utils/storage';

const AppContext = createContext(null);
export function AppProvider({children}) {
  const [state, setState] = useState(loadState);
  useEffect(() => saveState(state), [state]);
  const actions = useMemo(() => ({
    login: (name, email) => setState(s => ({...s, user:{name:name.trim() || 'Quest Explorer', email:email.trim() || 'demo@aptiquest.app', institute:s.user?.institute||'', state:s.user?.state||''}})),
    logout: () => setState(s => ({...s,user:null})),
    updateProfile: (info) => setState(s => ({...s,user:{...s.user,...info}})),
    setLanguage: (language) => setState(s => ({...s,language})),
    completeLesson: (key) => setState(s => s.completedLessons.includes(key) ? s : ({...s,completedLessons:[...s.completedLessons,key],xp:s.xp+20,coins:s.coins+5,streak:Math.max(s.streak,1)})),
    saveQuiz: (result) => setState(s => {
      if (s.quizResults.some(r=>r.id===result.id)) return s;
      const reward = result.kind==='final' ? 100 : 30;
      const cert = result.kind==='final' && result.percentage>=60 ? {
        id:`AQ-${result.id.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(-12)}`,
        courseId:result.courseId, score:result.correct, max:result.total, percentage:result.percentage,date:getToday()
      } : null;
      return {...s, quizResults:[result,...s.quizResults],xp:s.xp+reward,coins:s.coins+Math.floor(reward/10),certificates:cert?[cert,...s.certificates.filter(c=>c.courseId!==result.courseId)]:s.certificates};
    }),
    saveBattle: (result) => setState(s => {
      if (s.battleResults.some(b=>b.id===result.id)) return s;
      return {...s,battleResults:[result,...s.battleResults],xp:s.xp+(result.won?50:15),coins:s.coins+(result.won?15:5)};
    }),
    claimDaily: (id) => setState(s => {
      const key=`${getToday()}:${id}`;
      return s.dailyChallenges.includes(key)?s:{...s,dailyChallenges:[...s.dailyChallenges,key],xp:s.xp+25,coins:s.coins+10};
    }),
    resetDemo: () => setState({...initialState,user:state.user}),
  }), [state.user]);
  return <AppContext.Provider value={{state, actions}}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);
