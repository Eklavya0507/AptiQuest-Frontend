import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Course from './pages/Course';
import Quiz from './pages/Quiz';
import Arena from './pages/Arena';
import Battle from './pages/Battle';
import Leaderboard from './pages/Leaderboard';
import Rewards from './pages/Rewards';
import Certificates from './pages/Certificates';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import './styles.css';

function Authenticated({children}) { const {state}=useApp();return state.user?children:<Navigate replace to="/login"/>;}
function App() {return <AppProvider><HashRouter><Routes><Route path="/login" element={<Login/>}/><Route element={<Authenticated><Layout/></Authenticated>}><Route path="/" element={<Dashboard/>}/><Route path="/learn" element={<Learn/>}/><Route path="/learn/:id" element={<Course/>}/><Route path="/quiz/:id/:kind" element={<Quiz/>}/><Route path="/arena" element={<Arena/>}/><Route path="/arena/:game" element={<Battle/>}/><Route path="/leaderboard" element={<Leaderboard/>}/><Route path="/rewards" element={<Rewards/>}/><Route path="/certificates" element={<Certificates/>}/><Route path="/community" element={<Community/>}/><Route path="/profile" element={<Profile/>}/><Route path="/admin" element={<Admin/>}/></Route><Route path="*" element={<Navigate replace to="/"/>}/></Routes></HashRouter></AppProvider>}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
// Native WebViews package local assets; skip PWA service workers inside the APK.
if (import.meta.env.PROD && import.meta.env.VITE_APP_TARGET !== 'android' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(()=>{}));
}
