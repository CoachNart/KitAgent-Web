import React from 'react';
import {ArrowLeft,Command} from 'lucide-react';

export default function PrivacyPolicy(){
  return <div className="privacyPage">
    <header className="privacyHeader">
      <a className="brand" href="/"><span className="brandMark"><Command size={18}/></span><span>KitSetups</span></a>
      <a className="ghost" href="/"><ArrowLeft size={15}/> Back to KitSetups</a>
    </header>
    <main className="privacyContent">
      <span className="kicker">LEGAL</span>
      <h1>Privacy Policy</h1>
      <p className="privacyUpdated">Effective date: September 13, 2026</p>
      <p>This Privacy Policy explains how KitSetups (“KitSetups”, “we”, “us”, or “our”) collects, uses, stores, and protects information when you use the KitSetups website, application, and related services.</p>
      <h2>1. Information we collect</h2>
      <p>We may collect information you provide when you create an account, use the application, contact us, subscribe to updates, participate in the affiliate programme, or purchase a Premium plan. This may include your email address, account identifiers, referral information, subscription and payment verification records, and information you choose to provide.</p>
      <p>When you use trading or blockchain features, the service may process public blockchain addresses, transaction hashes, exchange connection information, market data, and action or execution details needed to provide the requested functionality.</p>
      <h2>2. How we use information</h2>
      <p>We use information to provide and secure KitSetups, authenticate accounts, verify subscriptions and payments, operate referrals and affiliate commissions, provide requested market and trading functionality, respond to support requests, improve the service, prevent abuse, and comply with legal obligations.</p>
      <h2>3. Payments</h2>
      <p>Payment information is handled through the payment or blockchain mechanisms used for the relevant transaction. We do not intentionally store your full payment-card credentials. For crypto payments, we may verify transaction hashes, token transfers, network information, wallet addresses, and payment amounts to confirm eligibility for paid services.</p>
      <h2>4. Connected accounts and permissions</h2>
      <p>Some KitSetups features may require a connection to an exchange, wallet, or other third-party service. You control whether you connect those services. We process the information and permissions necessary to provide the feature you request. Never share private keys, seed phrases, passwords, or other secret credentials with KitSetups.</p>
      <h2>5. Cookies and local storage</h2>
      <p>KitSetups may use browser storage, cookies, or similar technologies to keep you signed in, remember referral information, preserve preferences, and support essential application functionality. You can manage browser storage and cookie controls through your browser settings, although disabling essential storage may affect the service.</p>
      <h2>6. Analytics and service providers</h2>
      <p>We may use infrastructure, authentication, database, hosting, analytics, communications, and security providers to operate KitSetups. These providers may process information on our behalf and are expected to use it only for the services they provide to us.</p>
      <h2>7. Data retention</h2>
      <p>We retain information for as long as reasonably necessary to provide the service, maintain account and transaction records, prevent fraud or abuse, resolve disputes, and meet legal or accounting requirements. Retention periods can vary depending on the type of information.</p>
      <h2>8. Security</h2>
      <p>We use reasonable technical and organisational measures intended to protect information against unauthorised access, loss, misuse, or alteration. No internet service can guarantee absolute security, so please use strong account credentials and protect your private keys and other secrets.</p>
      <h2>9. Third-party services and links</h2>
      <p>KitSetups may link to or integrate with third-party websites, exchanges, wallets, and services. Their privacy practices are governed by their own policies. We are not responsible for the privacy or security practices of third parties.</p>
      <h2>10. Your choices</h2>
      <p>You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law and legitimate record-keeping requirements. You may also stop using the service and disconnect supported third-party accounts at any time.</p>
      <h2>11. Children</h2>
      <p>KitSetups is not intended for children who are not legally permitted to use financial or trading-related services in their jurisdiction. We do not knowingly collect personal information from children.</p>
      <h2>12. Changes to this policy</h2>
      <p>We may update this Privacy Policy as KitSetups changes. When we make material changes, we will update the effective date and, where appropriate, provide additional notice through the service.</p>
      <h2>13. Contact</h2>
      <p>If you have a privacy question or request, contact the KitSetups team through the contact channel provided in the application or official website.</p>
    </main>
    <footer className="privacyFooter"><div className="brand"><span className="brandMark"><Command size={17}/></span>KitSetups</div><div><a href="/">Home</a><a href="/privacy">Privacy Policy</a><a href="https://x.com/kitsetups" target="_blank" rel="noreferrer">X</a></div><small>© 2026 KitSetups. Trading involves risk.</small></footer>
  </div>
}
