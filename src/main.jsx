import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Command,Menu} from 'lucide-react';
import './styles.css';import './privacy.css';import PrivacyPolicy from './PrivacyPolicy';

const APP_URL='https://kitsetups.xyz',X_URL='https://x.com/kitsetups';
const IMAGES={
hero:'https://images.unsplash.com/photo-1768055105681-7d2096c5165f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=2200',
desk:'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1800',
chart:'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600'
};
const Mark=()=> <span className="mark"><Command size={15}/></span>;

function App(){
return <div className="site">
<header className="nav">
<a className="brand" href="#top"><Mark/>KitSetups</a>
<nav><a href="#why">Why</a><a href="#product">Product</a><a href="#pricing">Pricing</a></nav>
<div className="navEnd"><a className="xLink" href={X_URL} target="_blank" rel="noreferrer">X</a><a className="navButton" href={APP_URL}>Open app <ArrowUpRight size={14}/></a><button className="menuButton" aria-label="Menu"><Menu size={19}/></button></div>
</header>

<main id="top">
<section className="hero">
<div className="heroCopy">
<p className="eyebrow">MARKET INTELLIGENCE / KITSETUPS</p>
<h1>See the<br/><em>market.</em><br/>clearly.</h1>
<p className="heroLead">A focused trading workspace that helps you understand the market, find the opportunity and act with a clearer view.</p>
<div className="heroActions"><a className="primaryCta" href={APP_URL}>Enter KitSetups <ArrowUpRight size={15}/></a><a className="quietLink" href="#why">Discover KitSetups</a></div>
</div>
<div className="heroImage">
<img src={IMAGES.hero} alt="Trader studying financial markets on multiple screens"/>
<div className="imageShade"></div><div className="heroImageMeta"><span>01 / MARKET VIEW</span><span>READ BEFORE ACTION</span></div>
<div className="heroImageTitle"><small>THE MARKET IS LOUD.</small><strong>YOUR VIEW<br/>DOESN'T HAVE TO BE.</strong></div>
</div>
</section>

<section className="intro" id="why">
<div className="sectionTag">01</div>
<div className="introBody"><p className="eyebrow">WHY KITSETUPS</p><h2>Trading is easier<br/>when the important<br/><em>things are obvious.</em></h2><p>KitSetups brings context, opportunities and risk into one focused experience. No maze of screens. No need to decode a wall of information before you know what matters.</p></div>
</section>

<section className="imageSpread">
<div className="spreadPhoto"><img src={IMAGES.desk} alt="Modern trading workspace with market charts"/><span>02 / THE WORKSPACE</span></div>
<div className="spreadText"><p className="eyebrow">START WITH CONTEXT</p><h3>Understand<br/>before you<br/><em>react.</em></h3><p>The market has a bigger story than the last candle. KitSetups puts market structure first, then brings the actionable detail into focus.</p><div className="ruleNote">MARKET STRUCTURE<br/><span>→</span> OPPORTUNITY<br/><span>→</span> DECISION</div></div>
</section>

<section className="darkSection">
<div className="darkInner"><p className="eyebrow">02 / THE DIFFERENCE</p><h2>Less screen.<br/><em>More signal.</em></h2><p>Designed to feel calm when markets aren't. Every part of the experience has one job: help you see what deserves attention.</p></div>
<div className="darkImage"><img src={IMAGES.chart} alt="Close view of financial market charts"/><span>MARKET DATA / IN FOCUS</span></div>
</section>

<section className="product" id="product">
<div className="productHeader"><p className="eyebrow">03 / INSIDE KITSETUPS</p><h2>One place to<br/><em>make the call.</em></h2><p>Market analysis, trade ideas and the tools around them — brought together without making the interface feel heavy.</p><a className="quietLink" href={APP_URL}>Explore the app <ArrowUpRight size={14}/></a></div>
<div className="productFrame">
<div className="frameBar"><span>KITSETUPS</span><span>MARKET ANALYSIS / LIVE</span></div>
<div className="frameContent"><div className="fakeChart"><span>XAU / USD</span><svg viewBox="0 0 760 430" preserveAspectRatio="none"><path d="M0 345 C70 330 95 270 155 290 S240 355 305 245 S380 280 450 190 S520 235 595 125 S670 175 760 55" fill="none" stroke="#28c7ff" strokeWidth="3"/><path d="M0 345 C70 330 95 270 155 290 S240 355 305 245 S380 280 450 190 S520 235 595 125 S670 175 760 55 L760 430 L0 430Z" fill="#28c7ff" opacity=".07"/></svg></div><div className="frameSide"><span>THE VIEW</span><strong>Clear enough<br/>to act on.</strong><small>Context / setup / risk</small></div></div>
</div>
</section>

<section className="pricing" id="pricing">
<div className="pricingTitle"><p className="eyebrow">04 / ACCESS</p><h2>Simple<br/><em>pricing.</em></h2><p>Start with the core experience. Go further when you need more.</p></div>
<div className="plans"><div className="plan"><span>FREE</span><strong>$0</strong><p>Core market intelligence and the essential KitSetups experience.</p><a href={APP_URL}>Get started <ArrowUpRight size={14}/></a></div><div className="plan premium"><span>PREMIUM</span><strong>$20<small>/ month</small></strong><p>Deeper intelligence and advanced trading tools.</p><a href={APP_URL}>Go Premium <ArrowUpRight size={14}/></a></div></div>
</section>

<section className="closing"><p className="eyebrow">KITSETUPS</p><h2>See the market.<br/><em>Clearly.</em></h2><p>Trade with a better view of what matters.</p><a className="primaryCta light" href={APP_URL}>Open KitSetups <ArrowUpRight size={15}/></a></section>
</main>

<footer><div><a className="brand" href="#top"><Mark/>KitSetups</a><p>Market intelligence for modern traders.</p></div><div className="footerLinks"><a href="#why">Why</a><a href="#product">Product</a><a href="#pricing">Pricing</a><a href={X_URL}>X</a><a href="/privacy">Privacy</a></div><small>© 2026 KitSetups</small></footer>
</div>}

createRoot(document.getElementById('root')).render(window.location.pathname==='/privacy'?<PrivacyPolicy/>:<App/>);