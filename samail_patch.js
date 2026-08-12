/* Turkish Garden Samail — minimal requested patch only.
   This file intentionally does NOT replace the existing design,
   distance/delivery calculation, or the original WhatsApp message builder.
*/
(() => {
  'use strict';

  const DESIGNER = 'WAIL ELZAIN';
  const SKEWERS = [
    ['تكة لحم','Meat Tikka'],
    ['تكة دجاج','Chicken Tikka'],
    ['كباب لحم','Meat Kebab'],
    ['كباب دجاج','Chicken Kebab']
  ];
  const KINZA = [
    {cat:'العصائر والمشروبات',name:'كينزا ليمون',price:.300,en:'Kinza Lemon'},
    {cat:'العصائر والمشروبات',name:'كينزا كولا',price:.300,en:'Kinza Cola'},
    {cat:'العصائر والمشروبات',name:'كينزا توت',price:.300,en:'Kinza Berry'},
    {cat:'العصائر والمشروبات',name:'كينزا برتقال',price:.300,en:'Kinza Orange'},
    {cat:'العصائر والمشروبات',name:'كينزا حمضيات',price:.300,en:'Kinza Citrus'},
    {cat:'العصائر والمشروبات',name:'كينزا كولا دايت',price:.300,en:'Kinza Cola Diet'},
    {cat:'العصائر والمشروبات',name:'كينزا ليمون دايت',price:.300,en:'Kinza Lemon Diet'}
  ];

  const CHOICE_RULES = [
    {aliases:['صحن مشاوي صغير'], count:2},
    {aliases:['صحن مشكل الحديقة متوسط','مشاوي الحديقة متوسط','صحن الحديقة متوسط'], count:2},
    {aliases:['صحن مشكل الحديقة كبير','مشاوي الحديقة كبير','صحن الحديقة كبير'], count:4}
  ];

  const isEnglish = () => (document.documentElement.lang || '').toLowerCase().startsWith('en');

  function getMenu(){
    try { return (typeof menu !== 'undefined' && Array.isArray(menu)) ? menu : null; }
    catch (_) { return null; }
  }
  function getCart(){
    try { return (typeof cart !== 'undefined' && cart && typeof cart === 'object') ? cart : null; }
    catch (_) { return null; }
  }
  function persistCart(){
    try {
      if (typeof saveCart === 'function') { saveCart(); return; }
    } catch (_) {}
  }

  function patchOne(items, aliases, changes, addIfMissing=false){
    let item = items.find(x => aliases.includes(x.name));
    if (item) {
      Object.assign(item, changes);
      return item;
    }
    if (addIfMissing) {
      item = {cat:'المشاوي', name:aliases[0], ...changes};
      items.push(item);
      return item;
    }
    return null;
  }

  function applyRequestedMenuChanges(){
    const items = getMenu();
    if (!items || !items.length) return false;

    // Kinza: only add the requested varieties if an exact item is missing.
    const drinksCat = items.some(x => x.cat === 'العصائر والمشروبات')
      ? 'العصائر والمشروبات'
      : (items.some(x => x.cat === 'المشروبات والروب') ? 'المشروبات والروب' : 'العصائر والمشروبات');
    KINZA.forEach(k => {
      if (!items.some(x => x.name === k.name)) items.push({...k, cat:drinksCat});
    });

    // Only the grill items explicitly requested receive descriptions/price changes.
    patchOne(items, ['صحن مشاوي صغير'], {
      price:2,
      en:'Small Mixed Grill Plate',
      detail:'سيخان من اختيار العميل.',
      detailEn:'2 skewers chosen by the customer.'
    }, true);

    patchOne(items, ['صحن مشاوي','صحن مشاوي عادي'], {
      price:3.5,
      detail:'4 أسياخ: تكة لحم، تكة دجاج، كباب لحم، كباب دجاج + حبة عرائس + سلطة خضراء + حمص + متبل.',
      detailEn:'4 skewers: meat tikka, chicken tikka, meat kebab and chicken kebab + 1 arayes + green salad + hummus + mutabbal.'
    });

    patchOne(items, ['صحن مشاوي متوسط','مشاوي متوسط'], {
      detail:'دبل كمية صحن المشاوي: 8 أسياخ + حبتان عرائس + دبل المقبلات: سلطة خضراء + حمص + متبل.',
      detailEn:'Double the mixed grill plate: 8 skewers + 2 arayes + double appetizers: green salad + hummus + mutabbal.'
    });

    patchOne(items, ['صحن مشاوي كبير','مشاوي كبير'], {
      price:10,
      detail:'12 سيخ مشاوي منوعة.',
      detailEn:'12 assorted grill skewers.'
    });

    patchOne(items, ['صحن مشاوي عائلي','مشاوي عائلي'], {
      price:13,
      detail:'16 سيخ مشاوي منوعة.',
      detailEn:'16 assorted grill skewers.'
    });

    patchOne(items, ['صحن مشكل الحديقة متوسط','مشاوي الحديقة متوسط','صحن الحديقة متوسط'], {
      detail:'نصف دجاجة + سيخان من اختيار العميل.',
      detailEn:'Half chicken + 2 skewers chosen by the customer.'
    });

    patchOne(items, ['صحن مشكل الحديقة كبير','مشاوي الحديقة كبير','صحن الحديقة كبير'], {
      detail:'دبل المتوسط: دجاجة كاملة + 4 أسياخ من اختيار العميل.',
      detailEn:'Double the medium: whole chicken + 4 skewers chosen by the customer.'
    });

    try { if (typeof renderCategories === 'function') renderCategories(); } catch (_) {}
    try { if (typeof renderCats === 'function') renderCats(); } catch (_) {}
    try { if (typeof renderMenu === 'function') renderMenu(); } catch (_) {}
    return true;
  }

  function fixDesigner(){
    const footer = document.querySelector('footer');
    if (!footer) return;
    const walker = document.createTreeWalker(footer, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (/wail\s+elzain/i.test(node.nodeValue || '')) {
        node.nodeValue = (node.nodeValue || '').replace(/wail\s+elzain/ig, DESIGNER);
      }
    });
  }

  function ensureGeneralNote(){
    if (document.getElementById('generalNote')) return;
    const phone = document.getElementById('customerPhone');
    if (!phone) return;
    const note = document.createElement('textarea');
    note.id = 'generalNote';
    note.className = 'field';
    note.rows = 2;
    note.placeholder = isEnglish() ? 'General order note (optional)' : 'ملاحظة عامة للطلب (اختياري)';
    phone.insertAdjacentElement('afterend', note);
  }

  function choiceRule(name){
    return CHOICE_RULES.find(r => r.aliases.includes(name)) || null;
  }

  function injectChoices(){
    const c = getCart();
    if (!c) return;

    const notes = document.querySelectorAll('#cartItems [data-note], #cartBody [data-note]');
    notes.forEach(noteArea => {
      const name = noteArea.dataset.note;
      const rule = choiceRule(name);
      if (!rule || !c[name]) return;

      const host = noteArea.closest('.cart-item,.cartLine') || noteArea.parentElement;
      if (!host || host.querySelector('.tg-grill-choices')) return;

      if (!Array.isArray(c[name].choices)) c[name].choices = Array(rule.count).fill('');

      const box = document.createElement('div');
      box.className = 'fields tg-grill-choices';
      box.dataset.grillFor = name;

      const label = document.createElement('small');
      label.textContent = isEnglish() ? 'Choose skewer types:' : 'اختر أنواع الأسياخ:';
      box.appendChild(label);

      for (let n=0; n<rule.count; n++) {
        const select = document.createElement('select');
        select.className = 'field';

        const empty = document.createElement('option');
        empty.value = '';
        empty.textContent = isEnglish() ? `Skewer ${n+1} — choose type` : `السيخ ${n+1} — اختر النوع`;
        select.appendChild(empty);

        SKEWERS.forEach(([ar,en]) => {
          const option = document.createElement('option');
          option.value = ar;
          option.textContent = isEnglish() ? en : ar;
          select.appendChild(option);
        });

        select.value = c[name].choices[n] || '';
        select.addEventListener('change', () => {
          const liveCart = getCart();
          if (!liveCart?.[name]) return;
          if (!Array.isArray(liveCart[name].choices)) liveCart[name].choices = Array(rule.count).fill('');
          liveCart[name].choices[n] = select.value;
          persistCart();
        });
        box.appendChild(select);
      }

      noteArea.insertAdjacentElement('beforebegin', box);
      persistCart();
    });
  }

  function missingRequiredChoices(){
    const c = getCart();
    if (!c) return null;
    for (const [name, entry] of Object.entries(c)) {
      const rule = choiceRule(name);
      if (!rule || !entry?.qty) continue;
      const choices = Array.isArray(entry.choices) ? entry.choices.slice(0, rule.count) : [];
      if (choices.length !== rule.count || choices.some(v => !v)) return name;
    }
    return null;
  }

  function choicesText(){
    const c = getCart();
    if (!c) return '';
    const lines = [];

    Object.entries(c).forEach(([name, entry]) => {
      const rule = choiceRule(name);
      if (!rule || !entry?.qty || !Array.isArray(entry.choices)) return;
      const choices = entry.choices.slice(0, rule.count);
      if (choices.length !== rule.count || choices.some(v => !v)) return;

      const shown = isEnglish()
        ? choices.map(v => (SKEWERS.find(([ar]) => ar === v) || [v,v])[1])
        : choices;
      lines.push(`• ${name}: ${shown.join(isEnglish() ? ', ' : '، ')}`);
    });

    if (!lines.length) return '';
    return `${isEnglish() ? '*🔥 Grill skewer choices*' : '*🔥 اختيارات أسياخ المشاوي*'}\n${lines.join('\n')}`;
  }

  function installFunctionWrappers(){
    // Preserve choices when the site's original quantity function rewrites a cart entry.
    try {
      if (typeof changeQty === 'function' && !changeQty.__tgChoicesWrapped) {
        const originalChangeQty = changeQty;
        const wrapped = function(name, delta){
          const c = getCart();
          const saved = Array.isArray(c?.[name]?.choices) ? [...c[name].choices] : null;
          const result = originalChangeQty(name, delta);
          const live = getCart();
          if (saved && live?.[name]) {
            live[name].choices = saved;
            persistCart();
          }
          return result;
        };
        wrapped.__tgChoicesWrapped = true;
        changeQty = wrapped;
      }
    } catch (_) {}

    // Re-inject selection fields after the site's original cart renderer runs.
    try {
      if (typeof renderCart === 'function' && !renderCart.__tgChoicesWrapped) {
        const originalRenderCart = renderCart;
        const wrapped = function(...args){
          const result = originalRenderCart.apply(this,args);
          setTimeout(injectChoices,0);
          return result;
        };
        wrapped.__tgChoicesWrapped = true;
        renderCart = wrapped;
      }
    } catch (_) {}

    // Keep the site's ORIGINAL WhatsApp message (including distance/fee/total)
    // and append only skewer choices / general note when needed.
    try {
      if (typeof buildMessage === 'function' && !buildMessage.__tgChoicesWrapped) {
        const originalBuildMessage = buildMessage;
        const wrapped = function(...args){
          let base = originalBuildMessage.apply(this,args);
          const extras = [];

          const chosen = choicesText();
          if (chosen && !String(base).includes('اختيارات أسياخ المشاوي') && !String(base).includes('Grill skewer choices')) {
            extras.push(chosen);
          }

          const note = document.getElementById('generalNote')?.value?.trim() || '';
          if (note && !String(base).includes(note)) {
            extras.push(`${isEnglish() ? '📝 General note' : '📝 ملاحظة عامة'}: ${note}`);
          }

          if (extras.length) base += '\n\n' + extras.join('\n');
          return base;
        };
        wrapped.__tgChoicesWrapped = true;
        buildMessage = wrapped;
      }
    } catch (_) {}
  }

  function installSendValidation(){
    document.addEventListener('click', e => {
      const button = e.target.closest?.('#sendBtn,#sendOrder,.send');
      if (!button) return;

      const missing = missingRequiredChoices();
      if (!missing) return;

      e.preventDefault();
      e.stopImmediatePropagation();
      const msg = isEnglish()
        ? `Choose all required skewers for: ${missing}`
        : `اختر جميع الأسياخ المطلوبة للصنف: ${missing}`;
      try {
        if (typeof toast === 'function') toast(msg);
        else alert(msg);
      } catch (_) { alert(msg); }
    }, true);
  }

  function start(){
    fixDesigner();
    ensureGeneralNote();
    installFunctionWrappers();
    installSendValidation();

    // Wait only for the existing asynchronous menu load; do not replace it.
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      installFunctionWrappers();
      fixDesigner();
      ensureGeneralNote();
      injectChoices();
      if (applyRequestedMenuChanges() || tries >= 80) clearInterval(timer);
    }, 250);

    const cartRoot = document.getElementById('cartItems') || document.getElementById('cartBody');
    if (cartRoot) {
      new MutationObserver(() => setTimeout(injectChoices,0))
        .observe(cartRoot,{childList:true,subtree:true});
    }

    new MutationObserver(fixDesigner)
      .observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {once:true});
  } else {
    start();
  }
})();
