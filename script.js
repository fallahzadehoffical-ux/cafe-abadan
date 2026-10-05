(() => {
  'use strict';

  const CATEGORY_NAMES = {
    southern: 'غذاهای جنوبی',
    iranian: 'غذاهای ایرانی',
    fastfood: 'فست‌فود',
    cafe: 'کافه',
    drinks: 'نوشیدنی و دسر'
  };

  // All prices and menu descriptions are illustrative demo content.
  const PRODUCTS = [
    { id: 1, name: 'قلیه ماهی', category: 'southern', image: '1.jpg', price: 385000, description: 'ماهی، سبزی معطر و چاشنی تمرهندی با حال‌وهوای جنوب.', badge: 'امضای جنوب' },
    { id: 2, name: 'ماهی صبور', category: 'southern', image: '2.jpg', price: 680000, description: 'ماهی صبور کبابی با عطر لیمو و سبزی‌های تازه.' },
    { id: 3, name: 'میگو سوخاری', category: 'southern', image: '3.jpg', price: 495000, description: 'میگوی ترد و طلایی، همراه با چاشنی و لیموی تازه.' },
    { id: 4, name: 'ماهی سرخ‌شده', category: 'southern', image: '4.jpg', price: 570000, description: 'ماهی برشته با برنج زعفرانی و دورچین جنوبی.' },
    { id: 5, name: 'هواری میگو', category: 'southern', image: '5.jpg', price: 460000, description: 'برنج خوش‌عطر با میگو و ادویه‌های گرم جنوب.', badge: 'پیشنهاد سرآشپز' },

    { id: 6, name: 'چلو کباب', category: 'iranian', image: '6.jpg', price: 520000, description: 'کباب گریل‌شده با برنج ایرانی و گوجه کبابی.' },
    { id: 7, name: 'جوجه کباب', category: 'iranian', image: '7.jpg', price: 420000, description: 'جوجه زعفرانی، برنج دانه‌بلند و دورچین تازه.' },
    { id: 8, name: 'قورمه سبزی', category: 'iranian', image: '8.jpg', price: 370000, description: 'خورش سبزی جاافتاده با لوبیا و لیموعمانی.' },
    { id: 9, name: 'زرشک پلو', category: 'iranian', image: '9.jpg', price: 430000, description: 'برنج زعفرانی با زرشک و مرغ خوش‌پخت.' },
    { id: 10, name: 'کباب کوبیده', category: 'iranian', image: '10.jpg', price: 450000, description: 'کوبیده‌ی گریل‌شده با برنج، گوجه و سماق.' },

    { id: 11, name: 'برگر مخصوص', category: 'fastfood', image: '11.jpg', price: 440000, description: 'برگر گریل‌شده با پنیر، سبزی تازه و سس نخلستان.', badge: 'محبوب' },
    { id: 12, name: 'چیزبرگر', category: 'fastfood', image: '12.jpg', price: 385000, description: 'پنیر چدار، گوجه و سس مخصوص در نان برشته.' },
    { id: 13, name: 'مرغ سوخاری', category: 'fastfood', image: '13.jpg', price: 420000, description: 'مرغ سوخاری ترد با ادویه و دورچین گرم.' },
    { id: 14, name: 'سیب‌زمینی ویژه', category: 'fastfood', image: '14.jpg', price: 185000, description: 'سیب‌زمینی طلایی با ادویه‌ی دست‌ساز و سس.' },
    { id: 15, name: 'پاستا', category: 'fastfood', image: '15.jpg', price: 390000, description: 'پاستای خامه‌ای با سبزی تازه و قارچ.' },

    { id: 16, name: 'اسپرسو', category: 'cafe', image: '16.jpg', price: 95000, description: 'شات کوتاه و خوش‌عطر از دانه‌های قهوه.' },
    { id: 17, name: 'آمریکانو', category: 'cafe', image: '17.jpg', price: 110000, description: 'اسپرسو و آب داغ؛ ساده و متعادل.' },
    { id: 18, name: 'کافه لاته', category: 'cafe', image: '18.jpg', price: 155000, description: 'اسپرسو با شیر بخارداده و لایه‌ای لطیف.' },
    { id: 19, name: 'کاپوچینو', category: 'cafe', image: '19.jpg', price: 145000, description: 'قهوه‌ی متعادل با فوم شیر و بافت ابریشمی.' },
    { id: 20, name: 'موکا', category: 'cafe', image: '20.jpg', price: 175000, description: 'ترکیب قهوه و شکلات با شیر گرم.' },

    { id: 21, name: 'موهیتو', category: 'drinks', image: '21.jpg', price: 180000, description: 'نوشیدنی خنک با لیمو، نعناع تازه و یخ.' },
    { id: 22, name: 'لیموناد', category: 'drinks', image: '22.jpg', price: 145000, description: 'لیموترش تازه، نعناع و شیرینی ملایم.' },
    { id: 23, name: 'شیک شکلات', category: 'drinks', image: '23.jpg', price: 220000, description: 'شیک غلیظ شکلاتی برای عصرهای گرم.' },
    { id: 24, name: 'کیک شکلاتی', category: 'drinks', image: '24.jpg', price: 195000, description: 'کیک شکلاتی نرم با لایه‌ای از گاناش.' },
    { id: 25, name: 'چیزکیک', category: 'drinks', image: '25.jpg', price: 205000, description: 'چیزکیک لطیف با تاپینگ میوه‌ای.' }
  ];

  const grid = document.getElementById('menuGrid');
  const liveCount = document.getElementById('menuLive');
  const emptyState = document.getElementById('menuEmpty');
  const searchInput = document.getElementById('menuSearch');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let activeCategory = 'all';
  let searchTerm = '';

  const toPersianDigits = (value) => String(value).replace(/[0-9]/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
  const formatPrice = (price) => {
    const formatted = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 }).format(price).replace(/٬/g, ',');
    return `${formatted} تومان`;
  };
  const normalizeText = (value) => String(value)
    .toLocaleLowerCase('fa-IR')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\u200c/g, ' ')
    .trim();

  function makeCard(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.productId = String(product.id);
    card.style.animationDelay = `${Math.min(index * 24, 180)}ms`;
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
        <span class="product-category">${CATEGORY_NAMES[product.category]}</span>
        ${product.badge ? `<span class="product-label">${product.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-title-row"><h3>${product.name}</h3><span class="product-dot" aria-hidden="true"></span></div>
        <p class="product-description">${product.description}</p>
        <div class="product-footer"><span class="product-price">${formatPrice(product.price)}</span><span class="product-category-name visually-hidden">${CATEGORY_NAMES[product.category]}</span></div>
      </div>`;
    return card;
  }

  function renderMenu() {
    if (!grid) return;
    const normalizedSearch = normalizeText(searchTerm);
    const filtered = PRODUCTS.filter((product) => {
      const inCategory = activeCategory === 'all' || product.category === activeCategory;
      const searchable = normalizeText(`${product.name} ${product.description} ${CATEGORY_NAMES[product.category]}`);
      return inCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
    });

    grid.replaceChildren(...filtered.map(makeCard));
    if (emptyState) emptyState.hidden = filtered.length > 0;
    if (liveCount) {
      const countLabel = filtered.length === 1 ? 'محصول' : 'محصول';
      liveCount.textContent = `${toPersianDigits(filtered.length)} ${countLabel} در منو`;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter || 'all';
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      renderMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchTerm = event.currentTarget.value;
      renderMenu();
    });
  }

  renderMenu();

  // Mobile navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mainNav.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'باز کردن منوی سایت' : 'بستن منوی سایت');
    });
    mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'باز کردن منوی سایت');
      mainNav.classList.remove('is-open');
    }));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 780) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'باز کردن منوی سایت');
        mainNav.classList.remove('is-open');
      }
    });
  }

  // Front-end reservation dialog. No request or personal data leaves this page.
  const dialog = document.getElementById('reservationDialog');
  const openButtons = document.querySelectorAll('[data-open-reservation]');
  const closeButton = document.querySelector('[data-close-dialog]');
  const reservationForm = document.getElementById('reservationForm');
  const reservationDate = document.getElementById('reservationDate');
  const feedback = document.getElementById('reservationFeedback');

  function setDateMinimum() {
    if (!reservationDate) return;
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    reservationDate.min = localDate;
  }
  setDateMinimum();

  openButtons.forEach((button) => button.addEventListener('click', () => {
    if (!dialog) return;
    if (feedback) {
      feedback.textContent = '';
      feedback.classList.remove('is-error');
    }
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }));

  if (closeButton && dialog) closeButton.addEventListener('click', () => dialog.close());
  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
  if (reservationForm) {
    reservationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!reservationForm.reportValidity()) return;
      if (feedback) {
        feedback.classList.remove('is-error');
        feedback.textContent = 'این یک پیش‌نمایش است؛ درخواست به رستوران ارسال یا ذخیره نشد.';
      }
    });
  }

  // The chef's pick filters the menu to the featured demo dish.
  document.querySelectorAll('[data-show-product]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const productId = link.dataset.showProduct;
      activeCategory = 'all';
      searchTerm = PRODUCTS.find((product) => String(product.id) === productId)?.name || '';
      if (searchInput) searchInput.value = searchTerm;
      filterButtons.forEach((button) => {
        const selected = button.dataset.filter === 'all';
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      renderMenu();
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
