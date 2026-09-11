(()=>{
  const APP='https://kitsetups.xyz';
  const apply=()=>{
    document.querySelectorAll('body *').forEach(el=>{
      if(el.children.length===0&&el.textContent.includes('KitSetuop')){
        el.textContent=el.textContent.replaceAll('KitSetuop','KitSetups');
      }
    });
    document.querySelectorAll('header .brandMark, footer .brandMark').forEach(el=>{
      if(el.dataset.logoApplied)return;
      el.dataset.logoApplied='1';
      el.innerHTML='<img src="/kitsetups-logo.svg" alt="KitSetups">';
    });
    document.querySelectorAll('header .navActions .primary.small').forEach(a=>{
      if(a.getAttribute('href')!==APP)a.setAttribute('href',APP);
      if(a.textContent.trim()!=='Open KitSetups')a.textContent='Open KitSetups';
    });
    document.querySelectorAll('header .navActions .login').forEach(a=>{
      const href=APP+'/?auth=signin';
      if(a.getAttribute('href')!==href)a.setAttribute('href',href);
      if(a.textContent.trim()!=='Sign in')a.textContent='Sign in';
    });
    document.querySelectorAll('a').forEach(a=>{
      const t=(a.textContent||'').trim().toLowerCase();
      if(t.includes('join the affiliate programme')){
        const href=APP+'/?auth=signup&affiliate=1';
        if(a.getAttribute('href')!==href)a.setAttribute('href',href);
        if(a.textContent.trim()!=='Register as affiliate')a.textContent='Register as affiliate';
      }
      if(t==='get started'&&a.getAttribute('href')!==APP+'/?auth=signup')a.setAttribute('href',APP+'/?auth=signup');
      if(t.includes('go premium')&&a.getAttribute('href')!==APP+'/?auth=signup')a.setAttribute('href',APP+'/?auth=signup');
      if(t.includes('start using kitsetups')&&a.getAttribute('href')!==APP+'/?auth=signup')a.setAttribute('href',APP+'/?auth=signup');
    });
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});
})();