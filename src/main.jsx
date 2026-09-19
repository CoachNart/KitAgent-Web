import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Command,ChevronDown} from 'lucide-react';
import './styles.css';import './privacy.css';import PrivacyPolicy from './PrivacyPolicy';

const APP_URL='https://kitsetups.xyz',X_URL='https://x.com/kitsetups';

function Mark(){return <span className="mark"><Command size={15}/></span>}
function App(){
return <div className="site">
<header className="nav">
<a className="brand" href="#top"><Mark/>KitSetups</a>
<nav><a href="#why">Why KitSetups</a><a href="#approach">Approach</a><a href="#pricing">Pricing</a></nav>
<div className="navEnd"><a href={X_URL} target="_blank" rel="noreferrer">X</a><a className="navButton" href={APP_URL}>Open app <ArrowUpRight size={14}/></a></div>
</header>

<main id="top">
<section className="hero">
<div className="heroCopy">
<p className="kicker">KITSETUPS / MARKET INTELLIGENCE</p>
<h1>Make sense<br/>of the <i>market.</i></h1>
<p className="heroText">A clearer way to read markets, find opportunities and understand risk — without turning trading into a screen full of noise.</p>
<div className="heroButtons"><a className="button dark" href={APP_URL}>Enter KitSetups <ArrowUpRight size={15}/></a><a className="textLink" href="#why">Discover the idea <ChevronDown size={14}/></a></div>
</div>
<div className="heroArt" aria-label="Abstract market structure visual">
<div className="artLabel">MARKET / 01</div>
<div className="artWord">SIGNAL</div>
<svg viewBox="0 0 800 650" preserveAspectRatio="none">
<defs><linearGradient id="wash" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b9e8ff"/><stop offset=".55" stopColor="#38c8ff"/><stop offset="1" stopColor="#087ca8"/></linearGradient></defs>
<path d="M-30 525 C90 510 110 420 190 445 S290 535 350 365 S440 405 505 270 S590 345 670 175 S735 205 835 70" fill="none" stroke="#061014" strokeWidth="3"/>
<path d="M-30 525 C90 510 110 420 190 445 S290 535 350 365 S440 405 505 270 S590 345 670 175 S735 205 835 70 L835 650 L-30 650Z" fill="url(#wash)" opacity=".9"/>
<path d="M0 555 L800 115" stroke="#fff" strokeOpacity=".32"/>
<circle cx="670" cy="175" r="7" fill="#fff"/><circle cx="350" cy="365" r="5" fill="#061014"/>
</svg>
<div className="artBottom"><span>READ THE MOVE</span><strong>01 — 04</strong></div>
</div>
</section>

<section className="statement" id="why">
<p className="kicker">01 / THE IDEA</p>
<h2>The chart is only<br/><i>the beginning.</i></h2>
<p className="statementText">KitSetups brings the important parts of a trading decision into one place. Not more information. A clearer view of what matters.</p>
</section>

<section className="editorialGrid">
<div className="editorialImage imageOne"><span>01</span><div>READ<br/><i>context.</i></div></div>
<div className="editorialCopy"><p className="kicker">MARKET CONTEXT</p><h3>Know what you are looking at.</h3><p>Understand the larger move before you focus on the next candle. KitSetups keeps the bigger picture close.</p></div>
<div className="editorialCopy second"><p className="kicker">THE SETUP</p><h3>Find the moment that matters.</h3><p>Clear opportunities, defined levels and a reason behind every idea — presented without unnecessary complexity.</p></div>
<div className="editorialImage imageTwo"><span>02</span><div>ACT<br/><i>with intent.</i></div></div>
</section>

<section className="approach" id="approach">
<div className="approachHead"><p className="kicker">02 / OUR APPROACH</p><h2>Less noise.<br/><i>More conviction.</i></h2></div>
<div className="principles">
<div><b>01</b><strong>Understand</strong><p>Read the market before reacting to it.</p></div>
<div><b>02</b><strong>Qualify</strong><p>Separate a real opportunity from a passing move.</p></div>
<div><b>03</b><strong>Define</strong><p>Know where the idea works — and where it does not.</p></div>
</div>
</section>

<section className="productMoment">
<div className="productScreen">
<div className="screenTop"><span>KitSetups</span><span>LIVE VIEW</span></div>
<div className="screenMain"><div className="screenChart"><svg viewBox="0 0 700 360" preserveAspectRatio="none"><path d="M0 300 C70 285 90 225 155 250 S220 315 285 215 S350 240 415 155 S485 190 545 105 S625 150 700 55" fill="none" stroke="#27c4ff" strokeWidth="3"/><path d="M0 300 C70 285 90 225 155 250 S220 315 285 215 S350 240 415 155 S485 190 545 105 S625 150 700 55 L700 360 L0 360Z" fill="#27c4ff" opacity=".09"/></svg></div><div className="screenNote"><small>THE VIEW</small><strong>Clear enough<br/>to act on.</strong><span>Market context · opportunity · risk</span></div></div>
</div>
<div className="productCopy"><p className="kicker">03 / INSIDE KITSETUPS</p><h2>Built around<br/><i>the decision.</i></h2><p>From the first look at a market to the moment you decide to act, KitSetups keeps the experience focused.</p><a className="textLink" href={APP_URL}>Explore the app <ArrowUpRight size={14}/></a></div>
</section>

<section className="pricing" id="pricing">
<div><p className="kicker">04 / ACCESS</p><h2>Start simple.<br/><i>Go deeper.</i></h2></div>
<div className="priceRow"><div><span>FREE</span><strong>$0</strong><p>The essential KitSetups experience.</p><a href={APP_URL}>Get started <ArrowUpRight size={14}/></a></div><div className="pricePremium"><span>PREMIUM</span><strong>$20 <small>/ month</small></strong><p>Deeper intelligence and advanced trading tools.</p><a href={APP_URL}>Go Premium <ArrowUpRight size={14}/></a></div></div>
</section>

<section className="closing"><p className="kicker">KITSETUPS</p><h2>Trade with a<br/><i>clearer view.</i></h2><a className="button light" href={APP_URL}>Open KitSetups <ArrowUpRight size={15}/></a></section>
</main>
<footer><div><a className="brand" href="#top"><Mark/>KitSetups</a><p>Market intelligence for modern traders.</p></div><div className="footerLinks"><a href="#why">Why KitSetups</a><a href="#approach">Approach</a><a href="#pricing">Pricing</a><a href={X_URL}>X</a><a href="/privacy">Privacy</a></div><small>© 2026 KitSetups</small></footer>
</div>}
createRoot(document.getElementById('root')).render(window.location.pathname==='/privacy'?<PrivacyPolicy/>:<App/>);