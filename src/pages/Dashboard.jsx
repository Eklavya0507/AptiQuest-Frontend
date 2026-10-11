import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BrainCircuit, Check, ChevronRight, CirclePlay, Crown, Flame, Gamepad2, Gem, Medal, Play, Rocket, Shield, Sparkles, Swords, Target, Trophy, WandSparkles, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses, games } from '../data/content';
import { ProgressBar } from '../components/Ui';

const objectives = [
  {title:'Learn a new skill',detail:'Complete your first lesson',icon:BookOpen,href:'/learn',check:s=>s.completedLessons.length>0,reward:20},
  {title:'Test your brain',detail:'Complete any practice quiz',icon:Target,href:'/learn',check:s=>s.quizResults.some(r=>r.kind==='practice'),reward:30},
  {title:'Enter the arena',detail:'Finish a brain challenge',icon:Swords,href:'/arena',check:s=>s.battleResults.length>0,reward:15}
];
const gameDecor={math:'∑',tables:'×',logic:'◈',sudoku:'▦'};
export default function Dashboard(){
  const {state}=useApp();
  const name=state.user?.name?.split(' ')[0]||'Explorer';
  const level=Math.floor(state.xp/250)+1;
  const xpInLevel=state.xp%250;
  const percent=Math.round(xpInLevel/250*100);
  const completed=state.completedLessons.filter(k=>k.startsWith('percentages:')).length;
  const missionsDone=objectives.filter(o=>o.check(state)).length;
  const wins=state.battleResults.filter(r=>r.won).length;
  return <div className="arcade-home">
    <section className="game-welcome"><span className="arcade-eyebrow"><span className="signal-dot"/> PLAYER HQ / SEASON 01</span><div className="game-welcome-line"><div><h1>Welcome back, <span>{name}!</span></h1><p>Your next adventure starts here. Choose a world and level up your mind.</p></div><span className="online-badge"><span/> ADVENTURE MODE</span></div></section>

    <section className="game-hero">
      <div className="game-hero-noise" aria-hidden="true"/>
      <div className="game-hero-copy">
        <div className="season-chip"><Crown size={15}/> SEASON 01 <i/> MINDVERSE</div>
        <h2>YOUR BRAIN.<br/><em>YOUR SUPERPOWER.</em></h2>
        <p>Unlock skills, win quick-fire battles and climb the ranks. Every question is a new quest.</p>
        <div className="game-hero-buttons"><Link className="arcade-action" to="/arena"><Gamepad2 size={20}/> PLAY NOW <ArrowRight size={18}/></Link><Link className="arcade-action alt" to="/learn"><BookOpen size={19}/> START LEARNING</Link></div>
        <div className="game-hero-bottom"><span><span className="hero-green-dot"/> 4 ARCADE GAMES</span><span>6 LEARNING WORLDS</span><span>REAL PROGRESS</span></div>
      </div>
      <div className="hero-game-art" aria-hidden="true"><div className="art-stars star-a">✦</div><div className="art-stars star-b">✧</div><div className="art-stars star-c">✦</div><div className="arcade-orbit outer"/><div className="arcade-orbit inner"/><div className="arcade-core"><BrainCircuit size={106} strokeWidth={1.65}/></div><span className="orbit-token token-one"><Zap size={18}/></span><span className="orbit-token token-two"><Gem size={19}/></span><span className="orbit-token token-three"><Trophy size={17}/></span><div className="art-platform"/><span className="power-banner"><Zap size={15}/> POWER UP!</span></div>
    </section>

    <section className="arcade-hud">
      <div className="arcade-player-rank"><div className="rank-seal"><Shield size={25}/><span>{level}</span></div><div><span className="hud-label">CURRENT LEVEL</span><strong>LVL {String(level).padStart(2,'0')} <span>EXPLORER</span></strong><div className="hud-level-track"><div style={{width:`${percent}%`}}/></div><small>{xpInLevel} / 250 XP TO NEXT LEVEL</small></div></div>
      <div className="hud-item"><span className="hud-emblem amber"><Zap size={22}/></span><div><small>TOTAL XP</small><strong>{state.xp.toLocaleString()}</strong></div></div>
      <div className="hud-item"><span className="hud-emblem yellow"><Gem size={22}/></span><div><small>COINS</small><strong>{state.coins.toLocaleString()}</strong></div></div>
      <div className="hud-item"><span className="hud-emblem orange"><Flame size={22}/></span><div><small>STREAK</small><strong>{state.streak} <small>days</small></strong></div></div>
    </section>

    <div className="arcade-heading"><div><span className="arcade-eyebrow">SELECT YOUR ADVENTURE</span><h2>Choose your <span>world</span></h2></div><span className="heading-accent">✦ KEEP EXPLORING ✦</span></div>
    <section className="world-choice">
      <Link className="world-card world-learn" to="/learn"><div className="world-bg-number">01</div><div className="world-card-top"><span className="world-symbol"><BookOpen size={24}/></span><span className="world-status">6 COURSES</span></div><div className="world-art world-art-learn"><div className="floating-book"><BookOpen size={80} strokeWidth={1.2}/><span>✦</span></div></div><div className="world-card-info"><span>WORLD 01 • KNOWLEDGE KINGDOM</span><h3>LEARNING <b>QUEST</b></h3><p>Master concepts. Beat quizzes. Unlock certificates.</p><span className="world-enter">ENTER WORLD <ArrowRight size={18}/></span></div></Link>
      <Link className="world-card world-arena" to="/arena"><div className="world-bg-number">02</div><div className="world-card-top"><span className="world-symbol"><Swords size={25}/></span><span className="world-status">4 GAMES</span></div><div className="world-art world-art-arena"><div className="cross-swords"><Swords size={104} strokeWidth={1.15}/><span>VS</span></div></div><div className="world-card-info"><span>WORLD 02 • CHALLENGE ZONE</span><h3>BRAIN <b>ARENA</b></h3><p>Think fast. Win battles. Become a champion.</p><span className="world-enter">ENTER ARENA <ArrowRight size={18}/></span></div></Link>
    </section>

    <div className="arcade-two-cols">
      <section className="arcade-panel quest-panel"><div className="arcade-panel-heading"><div><span className="arcade-eyebrow">YOUR MISSION BOARD</span><h2><Target size={21}/> Starter quests</h2></div><span className="mission-score">{missionsDone}/3 DONE</span></div><div className="quest-track"><div style={{width:`${missionsDone/3*100}%`}}/></div><div className="quest-list">{objectives.map((m,i)=><Link key={m.title} to={m.href} className={`quest-row ${m.check(state)?'quest-done':''}`}><span className="quest-icon"><m.icon size={20}/></span><span className="quest-text"><strong>{m.title}</strong><small>{m.detail}</small></span><span className="quest-reward"><Zap size={13}/> {m.reward} XP</span><span className="quest-status">{m.check(state)?<Check size={17}/>:<ChevronRight size={17}/>}</span></Link>)}</div><p className="quest-tip"><Sparkles size={15}/> These are one-time starter objectives. Their regular activity XP is credited during play.</p></section>
      <section className="arcade-panel chapter-panel"><div className="arcade-panel-heading"><div><span className="arcade-eyebrow">YOUR ADVENTURE MAP</span><h2><Rocket size={21}/> Level path</h2></div><Link to="/learn" className="arcade-panel-link">FULL MAP <ArrowRight size={15}/></Link></div><div className="adventure-path"><Link to="/learn/percentages" className="adventure-node done-node"><span><BookOpen size={24}/></span><strong>START</strong><small>Percentages</small></Link><span className="path-line"/><Link to="/quiz/percentages/practice" className="adventure-node"><span><Target size={23}/></span><strong>QUEST 2</strong><small>Practice</small></Link><span className="path-line"/><Link to="/arena/math" className="adventure-node boss-node"><span><Swords size={24}/></span><strong>BOSS</strong><small>Math Sprint</small></Link></div><div className="chapter-progress"><div><strong>Percentages journey</strong><span>{completed}/8 lessons completed</span></div><ProgressBar value={completed/8*100}/></div><Link className="chapter-cta" to="/learn/percentages">CONTINUE QUEST <ArrowRight size={17}/></Link></section>
    </div>

    <section className="arcade-games-section"><div className="arcade-heading"><div><span className="arcade-eyebrow">THE ARCADE</span><h2>Pick a <span>challenge</span></h2></div><Link to="/arena" className="arcade-panel-link">ALL GAMES <ArrowRight size={16}/></Link></div><div className="arcade-minigames">{games.map((g,i)=><Link className={`mini-game-card mini-${g.id}`} to={`/arena/${g.id}`} key={g.id}><div className="mini-pattern">{gameDecor[g.id]}</div><span className="mini-label">GAME 0{i+1}</span><div><h3>{g.name}</h3><small>{g.subtitle}</small></div><span className="mini-play"><Play fill="currentColor" size={17}/></span></Link>)}</div></section>

    <div className="arcade-two-cols arcade-bottom-row"><Link className="league-card" to="/leaderboard"><div className="league-emblem"><Trophy size={42}/></div><div><span className="arcade-eyebrow">YOUR NEXT DESTINATION</span><h3>CLIMB THE LEADERBOARD</h3><p>See how your score stacks up. You have {wins} demo {wins===1?'win':'wins'}!</p><span>VIEW RANKS <ArrowRight size={15}/></span></div></Link><Link className="collection-card" to="/rewards"><div className="collection-icon"><Medal size={38}/></div><div><span className="arcade-eyebrow">TROPHY ROOM</span><h3>COLLECT YOUR REWARDS</h3><p>Unlock badges and watch your level grow.</p><span>MY REWARDS <ArrowRight size={15}/></span></div></Link></div>
    <p className="arcade-fineprint"><Shield size={14}/> Frontend demo: progress is saved in this browser. Live multiplayer and online rankings need backend integration.</p>
  </div>;
}
