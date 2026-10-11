import { ArrowRight, Sparkles, CheckCircle2, Clock3, LockKeyhole, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Eyebrow({children}) {return <span className="eyebrow">{children}</span>;}
export function PageHeading({eyebrow,title,subtitle,action}) {return <header className="page-heading"><div>{eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}<h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>{action&&<div className="heading-action">{action}</div>}</header>;}
export function SectionHeading({title,subtitle,action,href}) {return <div className="section-head"><div><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>{action&&<Link to={href} className="text-link">{action}<ArrowRight size={16}/></Link>}</div>;}
export function Pill({children,tone='violet'}) {return <span className={`pill pill-${tone}`}>{children}</span>;}
export function ProgressBar({value=0}) {return <div className="progress-track"><div className="progress-fill" style={{width:`${Math.min(100,Math.max(0,value))}%`}}/></div>;}
export function Empty({icon:Icon=Sparkles,title,description,action,href}) {return <div className="empty"><span className="empty-icon"><Icon size={27}/></span><h3>{title}</h3><p>{description}</p>{action&&href&&<Link className="btn btn-primary" to={href}>{action}<ArrowRight size={17}/></Link>}</div>;}
export function Notice({children}) {return <div className="notice"><Info size={17}/><span>{children}</span></div>;}
export function FeatureStatus({ready=true}) {return <span className={`feature-status ${ready?'ready':'later'}`}>{ready?<CheckCircle2 size={13}/>:<Clock3 size={13}/>} {ready?'Demo ready':'Backend later'}</span>;}
export function LockedNote({children}) {return <div className="locked-note"><LockKeyhole size={17}/>{children}</div>;}
export function StatCard({icon:Icon,label,value,note,accent='violet'}) {return <div className="stat-card"><div className={`stat-icon icon-${accent}`}><Icon size={21}/></div><p>{label}</p><strong>{value}</strong><small>{note}</small></div>;}
