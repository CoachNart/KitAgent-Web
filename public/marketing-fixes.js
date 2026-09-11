(()=>{
  const APP='https://kitsetups.xyz';
  const apply=()=>{
    document.querySelectorAll('header .brandMark, footer .brandMark').forEach(el=>{
      if(el.dataset.logoApplied)return;
      el.dataset.logoApplied='1';
      el.innerHTML='<img src="/kitsetups-logo.svg" alt="KitSetups">';
    });
    document.querySelectorAll('header .navActions .primary.small').forEach(a=>{a.href=APP;a.textContent='Open KitSetups';});
    document.querySelectorAll('header .navActions .login').forEach(a=>{a.href=APP+'/?auth=signin';a.textContent='Sign in';});
    document.querySelectorAll('a').forEach(a=>{
      const t=(a.textContent||'').trim().toLowerCase();
      if(t.includes('join the affiliate programme'))a.href=APP+'/?auth=signup';
      if(t==='get started')a.href=APP+'/?auth=signup';
      if(t.includes('go premium'))a.href=APP+'/?auth=signup';
    });
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});
})();