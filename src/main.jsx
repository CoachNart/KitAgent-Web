import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight,Command} from 'lucide-react';
import './styles.css';import './privacy.css';import PrivacyPolicy from './PrivacyPolicy';

const APP_URL='https://kitsetups.xyz',X_URL='https://x.com/kitsetups';
const Mark=()=> <span className="mark"><Command size={15}/></span>;

function App(){
return <div className="site">
<header className="nav">
<a className="brand" href="#top"><Mark/>KitSetups</a>
<nav><a href="#intelligence">Intelligence</a><a href="#product">Product</a><a href="#pricing">Pricing</a></nav>
<div className="navEnd"><a href={X_URL} target="_blank" rel="noreferrer">X</a><a className="navButton" href={APP_URL}>Enter app <ArrowUpRight size={14}/></a></div>
</header>

<main id="top">
<section className="hero">
<div className="heroMeta"><span>01</span><span>MARKET INTELLIGENCE / 2026</span></div>
<div className="heroTitle"><p className="eyebrow">FOR TRADERS WHO WANT THE SIGNAL, NOT THE NOISE.</p><h1>READ<br/><span>THE</span><em>MARKET.</em></h1><p className="heroLead">KitSetups turns market structure, opportunity and risk into a view you can actually use.</p><a className="heroCta" href={APP_URL}>Open KitSetups <ArrowUpRight size={16}/></a></div>
<div className="heroVisual">
<div className="visualTop"><span>KIT / 001</span><span>LIVE STRUCTURE</span></div>
<svg viewBox="0 0 900 760" preserveAspectRatio="none" aria-hidden="true">
<defs><linearGradient id="cyan" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#0a718e"/><stop offset=".48" stopColor="#24c5f4"/><stop offset="1" stopColor="#dff8ff"/></linearGradient></defs>
<path className="gridPath" d="M0 570H900M0 390H900M0 210H900M180 0V760M450 0V760M720 0V760"/>
<path className="mountain" d="M-20 620 C80 600 115 505 195 535 S305 650 385 455 S485 490 565 330 S650 410 735 220 S820 265 930 75 L930 760 L-20 760Z"/>
<path className="line" d="M-20 620 C80 600 115 505 195 535 S305 650 385 455 S485 490 565 330 S650 410 735 220 S820 265 930 75"/>
<circle cx="735" cy="220" r="8"/><circle cx="385" cy="455" r="6"/>
</svg>
<div className="visualStamp">CONTEXT<br/><strong>BEFORE<br/>ACTION.</strong></div>
<div className="visualBottom"><span>STRUCTURE / MOMENT / RISK</span><span>01—03</span></div>
</div>
</section>

<section className="manifesto" id="intelligence">
<div className="sectionNo">02</div><div className="manifestoCopy"><p className="eyebrow">THE KITSETUPS IDEA</p><h2>Trading gets noisy<br/>when <em>everything</em><br/>looks important.</h2><p>We built KitSetups around a simpler question: what actually deserves your attention right now?</p></div>
</section>

<section className="spread">
<div className="spreadVisual darkVisual"><span className="pageNo">03</span><div className="hugeWord">CONTEXT</div><div className="axisLine"></div><div className="caption">THE BIGGER MOVE CHANGES<br/>HOW THE NEXT MOVE READS.</div></div>
<div className="spreadCopy"><p className="eyebrow">01 / SEE THE MARKET</p><h3>Start with<br/><em>context.</em></h3><p>Market structure first. The immediate opportunity second. A cleaner sequence for making sense of what price is doing.</p><div className="sideNote">MARKET<br/>→ STRUCTURE<br/>→ OPPORTUNITY</div></div>
<div className="spreadCopy lower"><p className="eyebrow">02 / FIND THE MOMENT</p><h3>Know when<br/><em>it matters.</em></h3><p>KitSetups surfaces actionable ideas with defined levels, so a setup is more than a coloured arrow on a chart.</p><div className="sideNote">ENTRY<br/>→ INVALIDATION<br/>→ TARGET</div></div>
<div className="spreadVisual lightVisual"><span className="pageNo">04</span><div className="lightArc"></div><div className="hugeWord">INTENT</div><div className="caption">LESS REACTION.<br/>MORE DELIBERATION.</div></div>
</section>

<section className="darkStatement">
<div className="sectionNo">05</div><div><p className="eyebrow">THE PRINCIPLE</p><h2>Don't add more<br/>screens. <em>Remove<br/>the distance.</em></h2><p>From market read to trade decision, the experience should feel like one continuous thought.</p></div></section>

<section className="product" id="product">
<div className="productLabel"><span>06</span><p className="eyebrow">INSIDE KITSETUPS</p></div>
<div className="productFrame"><div className="frameBar"><span>KITSETUPS</span><span>MARKET / LIVE</span></div><div className="frameBody"><div className="fakeChart"><div className="chartLabel">XAU / USD</div><svg viewBox="0 0 760 430" preserveAspectRatio="none"><path d="M0 350 C75 335 90 275 155 292 S235 360 305 250 S380 285 450 190 S520 240 595 125 S665 175 760 55" fill="none" stroke="#27c4ff" strokeWidth="3"/><path d="M0 350 C75 335 90 275 155 292 S235 360 305 250 S380 285 450 190 S520 240 595 125 S665 175 760 55 L760 430 L0 430Z" fill="#27c4ff" opacity=".08"/></svg><div className="chartMarker">●</div></div><aside><span>THE VIEW</span><strong>Clear enough<br/>to act on.</strong><p>Structure / opportunity / risk</p></aside></div></div>
<div className="productCopy"><p className="eyebrow">A TRADING WORKSPACE, NOT A TERMINAL.</p><h2>One view.<br/><em>Better decisions.</em></h2><p>Built for traders who want the market explained clearly — without burying the decision under layers of interface.</p><a href={APP_URL} className="lineCta">Explore the app <ArrowUpRight size={15}/></a></div>
</section>

<section className="pricing" id="pricing">
<div className="sectionNo">07</div><div className="pricingHead"><p className="eyebrow">ACCESS</p><h2>Start where<br/><em>you are.</em></h2><p>Use the core experience for free. Go deeper when you need more.</p></div>
<div className="priceList"><div className="price"><span>FREE</span><strong>$0</strong><p>Core market intelligence and the essential KitSetups experience.</p><a href={APP_URL}>Get started <ArrowUpRight size={14}/></a></div><div className="price premium"><span>PREMIUM</span><strong>$20<small>/MO</small></strong><p>Deeper intelligence and advanced trading tools.</p><a href={APP_URL}>Go Premium <ArrowUpRight size={14}/></a></div></div>
</section>

<section className="closing"><p className="eyebrow">08 / KITSETUPS</p><h2>THE MARKET<br/>WILL ALWAYS<br/><em>BE LOUD.</em></h2><p>Give yourself a clearer way to read it.</p><a href={APP_URL} className="heroCta light">Enter KitSetups <ArrowUpRight size={16}/></a></section>
</main>
<footer><div><a className="brand" href="#top"><Mark/>KitSetups</a><p>Market intelligence for modern traders.</p></div><div className="footerLinks"><a href="#intelligence">Intelligence</a><a href="#product">Product</a><a href="#pricing">Pricing</a><a href={X_URL}>X</a><a href="/privacy">Privacy</a></div><small>© 2026 KitSetups</small></footer>
</div>}

createRoot(document.getElementById('root')).render(window.location.pathname==='/privacy'?<PrivacyPolicy/>:<App/>);