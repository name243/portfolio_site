<<<<<<< HEAD
(function () {
  var ICONS = {
    'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    'code-2': '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    'key-round': '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'layout': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    'server': '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    'gauge': '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    'rocket': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.350 22.350 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.790 19.790 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.790 19.790 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.840 12.840 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.840 12.840 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  };

  document.querySelectorAll('[data-lucide]').forEach(function (el) {
    var name = el.getAttribute('data-lucide');
    if (!ICONS[name]) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', ('lucide ' + (el.getAttribute('class') || '')).trim());
    svg.innerHTML = ICONS[name];
    el.replaceWith(svg);
  });

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeMenu() {
    header.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    var open = header.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      closeMenu();
      scrollToId(id);
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  var form = document.getElementById('briefForm');
  var success = document.getElementById('success');
  var toast = document.getElementById('toast');
  var toastTimer;

  function selectChip(group, value) {
    form.querySelectorAll('[data-group="' + group + '"] .chip').forEach(function (chip) {
      chip.classList.toggle('is-active', chip.textContent.trim() === value);
    });
  }

  function chipValue(group) {
    var active = form.querySelector('[data-group="' + group + '"] .chip.is-active');
    return active ? active.textContent.trim() : '';
  }

  form.querySelectorAll('.chips').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (chip) selectChip(group.getAttribute('data-group'), chip.textContent.trim());
    });
  });

  document.querySelectorAll('[data-service]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!success.hidden) resetForm();
      selectChip('type', btn.getAttribute('data-service'));
      scrollToId('contacts');
    });
  });

  function setError(name, text) {
    var field = form.elements[name];
    var box = form.querySelector('[data-error="' + name + '"]');
    box.textContent = text || '';
    field.classList.toggle('is-invalid', !!text);
    field.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  ['name', 'contact', 'message'].forEach(function (name) {
    form.elements[name].addEventListener('input', function () { setError(name, ''); });
  });

  function validate() {
    var ok = true;
    var name = form.elements.name.value.trim();
    var contact = form.elements.contact.value.trim();
    var message = form.elements.message.value.trim();

    if (name.length < 2) { setError('name', 'РЈРєР°Р¶РёС‚Рµ РёРјСЏ'); ok = false; }

    var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    var isPhone = contact.replace(/\D/g, '').length >= 10;
    var isTg = /^@\w{3,}$/.test(contact);
    if (!isEmail && !isPhone && !isTg) { setError('contact', 'РўРµР»РµС„РѕРЅ, email РёР»Рё @telegram'); ok = false; }

    if (message.length < 10) { setError('message', 'РџР°СЂР° СЃР»РѕРІ Рѕ Р·Р°РґР°С‡Рµ вЂ” РјРёРЅРёРјСѓРј 10 СЃРёРјРІРѕР»РѕРІ'); ok = false; }
    return ok;
  }

  function showToast() {
    toast.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-shown'); }, 4000);
  }

  function resetForm() {
    form.reset();
    ['name', 'contact', 'message'].forEach(function (n) { setError(n, ''); });
    selectChip('type', 'Р›РµРЅРґРёРЅРі');
    selectChip('budget', 'РґРѕ 50 000 в‚Ѕ');
    success.hidden = true;
    form.hidden = false;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    document.getElementById('successTitle').textContent = 'РЎРїР°СЃРёР±Рѕ, ' + form.elements.name.value.trim() + '!';
    document.getElementById('successText').textContent =
      'Р—Р°СЏРІРєР° РЅР° В«' + chipValue('type') + 'В» РїРѕР»СѓС‡РµРЅР°. РЎРІСЏР¶СѓСЃСЊ СЃ РІР°РјРё РїРѕ РєРѕРЅС‚Р°РєС‚Сѓ ' +
      form.elements.contact.value.trim() + ' РІ С‚РµС‡РµРЅРёРµ РґРЅСЏ.';
    form.hidden = true;
    success.hidden = false;
    showToast();
  });

  document.getElementById('again').addEventListener('click', resetForm);

  document.getElementById('year').textContent = new Date().getFullYear();
=======
(function () {
  var ICONS = {
    'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'zap': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    'code-2': '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    'key-round': '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'layout': '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    'server': '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    'gauge': '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    'rocket': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.350 22.350 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    'send': '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.790 19.790 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.790 19.790 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.840 12.840 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.840 12.840 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  };

  document.querySelectorAll('[data-lucide]').forEach(function (el) {
    var name = el.getAttribute('data-lucide');
    if (!ICONS[name]) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', ('lucide ' + (el.getAttribute('class') || '')).trim());
    svg.innerHTML = ICONS[name];
    el.replaceWith(svg);
  });

  var header = document.getElementById('header');
  var burger = document.getElementById('burger');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeMenu() {
    header.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', function () {
    var open = header.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      closeMenu();
      scrollToId(id);
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  var form = document.getElementById('briefForm');
  var success = document.getElementById('success');
  var toast = document.getElementById('toast');
  var toastTimer;

  function selectChip(group, value) {
    form.querySelectorAll('[data-group="' + group + '"] .chip').forEach(function (chip) {
      chip.classList.toggle('is-active', chip.textContent.trim() === value);
    });
  }

  function chipValue(group) {
    var active = form.querySelector('[data-group="' + group + '"] .chip.is-active');
    return active ? active.textContent.trim() : '';
  }

  form.querySelectorAll('.chips').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (chip) selectChip(group.getAttribute('data-group'), chip.textContent.trim());
    });
  });

  document.querySelectorAll('[data-service]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!success.hidden) resetForm();
      selectChip('type', btn.getAttribute('data-service'));
      scrollToId('contacts');
    });
  });

  function setError(name, text) {
    var field = form.elements[name];
    var box = form.querySelector('[data-error="' + name + '"]');
    box.textContent = text || '';
    field.classList.toggle('is-invalid', !!text);
    field.setAttribute('aria-invalid', text ? 'true' : 'false');
  }

  ['name', 'contact', 'message'].forEach(function (name) {
    form.elements[name].addEventListener('input', function () { setError(name, ''); });
  });

  function validate() {
    var ok = true;
    var name = form.elements.name.value.trim();
    var contact = form.elements.contact.value.trim();
    var message = form.elements.message.value.trim();

    if (name.length < 2) { setError('name', 'РЈРєР°Р¶РёС‚Рµ РёРјСЏ'); ok = false; }

    var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    var isPhone = contact.replace(/\D/g, '').length >= 10;
    var isTg = /^@\w{3,}$/.test(contact);
    if (!isEmail && !isPhone && !isTg) { setError('contact', 'РўРµР»РµС„РѕРЅ, email РёР»Рё @telegram'); ok = false; }

    if (message.length < 10) { setError('message', 'РџР°СЂР° СЃР»РѕРІ Рѕ Р·Р°РґР°С‡Рµ вЂ” РјРёРЅРёРјСѓРј 10 СЃРёРјРІРѕР»РѕРІ'); ok = false; }
    return ok;
  }

  function showToast() {
    toast.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-shown'); }, 4000);
  }

  function resetForm() {
    form.reset();
    ['name', 'contact', 'message'].forEach(function (n) { setError(n, ''); });
    selectChip('type', 'Р›РµРЅРґРёРЅРі');
    selectChip('budget', 'РґРѕ 50 000 в‚Ѕ');
    success.hidden = true;
    form.hidden = false;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    document.getElementById('successTitle').textContent = 'РЎРїР°СЃРёР±Рѕ, ' + form.elements.name.value.trim() + '!';
    document.getElementById('successText').textContent =
      'Р—Р°СЏРІРєР° РЅР° В«' + chipValue('type') + 'В» РїРѕР»СѓС‡РµРЅР°. РЎРІСЏР¶СѓСЃСЊ СЃ РІР°РјРё РїРѕ РєРѕРЅС‚Р°РєС‚Сѓ ' +
      form.elements.contact.value.trim() + ' РІ С‚РµС‡РµРЅРёРµ РґРЅСЏ.';
    form.hidden = true;
    success.hidden = false;
    showToast();
  });

  document.getElementById('again').addEventListener('click', resetForm);

  document.getElementById('year').textContent = new Date().getFullYear();
>>>>>>> d541077 (add size)
})();