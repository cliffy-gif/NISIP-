(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  window.$ = $;
  window.$$ = $$;
  window.esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
  window.fmtInt = value => new Intl.NumberFormat('en-KE', { maximumFractionDigits: 0 }).format(value);
  window.fmtKES = value => new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(value);
  window.badge = status => {
    const classes = {
      Operational: 'operational',
      'Under construction': 'construction',
      Planned: 'planned',
      Rehabilitation: 'rehab'
    };
    const kind = classes[status] || 'planned';
    return `<span class="badge badge--${kind}">${window.esc(status)}</span>`;
  };

  const toggle = $('.menu-toggle');
  const nav = $('#nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  const navList = $('nav[aria-label="Primary"] ul');
  if (navList && !$('a[href="integrated-design.html"]', navList)) {
    const item = document.createElement('li');
    item.innerHTML = '<a href="integrated-design.html">System design</a>';
    navList.append(item);
  }

  const brandName = $('.brand-text strong');
  if (brandName) brandName.textContent = 'NISIP-MIS';

})();
