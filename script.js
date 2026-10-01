const KEYS = {
  users: "dashdish.users",
  restaurants: "dashdish.restaurants",
  orders: "dashdish.orders",
  cart: "dashdish.cart",
  session: "dashdish.session"
};
const CATALOG_VERSION_KEY = "foodzy.catalogVersion";
const CATALOG_VERSION = 10;

const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const starterRestaurants = [
  { id: "r1", name: "Olive & Ember", cuisine: "Mediterranean · Bowls", rating: 4.8, time: "20–30 min", fee: 0.4, image: photo("photo-1512621776951-a57141f2eefd"), accent: "#e1eee0", featured: true, menu: [
    { id: "f1", name: "Green goddess bowl", detail: "Avocado, herby grains, pickled onion, tahini", price: 2.5, category: "Bowls", image: photo("photo-1512621776951-a57141f2eefd", 640), popular: true },
    { id: "f2", name: "Charred lemon chicken", detail: "Free-range chicken, warm couscous, lemon oil", price: 3.2, category: "Mains", image: photo("photo-1532550907401-a500c9a57435", 640) },
    { id: "f3", name: "Whipped feta toast", detail: "Sourdough, garden herbs, hot honey", price: 1.6, category: "Small plates", image: photo("photo-1525351484163-7529414344d8", 640) }
  ]},
  { id: "r2", name: "Momo House", cuisine: "Nepalese · Dumplings", rating: 4.9, time: "25–35 min", fee: 0.35, image: photo("photo-1563245372-f21724e3856d"), accent: "#f6e0d7", featured: true, menu: [
    { id: "f4", name: "Steamed chicken momos", detail: "Eight delicate dumplings, tomato sesame achar", price: 2.6, category: "Dumplings", image: photo("photo-1563245372-f21724e3856d", 640), popular: true },
    { id: "f5", name: "Crispy chilli momos", detail: "Pan-seared, tossed with peppers and house chilli", price: 2.9, category: "Dumplings", image: photo("photo-1601050690597-df0568f70950", 640) },
    { id: "f6", name: "Gurkha noodle bowl", detail: "Wok noodles, seasonal greens, toasted sesame", price: 2.9, category: "Mains", image: photo("photo-1569718212165-3a8278d5f624", 640) }
  ]},
  { id: "r3", name: "Sundae Social", cuisine: "Dessert · Ice cream", rating: 4.7, time: "15–25 min", fee: 0, image: photo("photo-1563805042-7684c019e1cb"), accent: "#f8edcf", featured: false, menu: [
    { id: "f7", name: "Salted caramel sundae", detail: "Brown butter cookie, vanilla bean, caramel", price: 1.8, category: "Dessert", image: photo("photo-1563805042-7684c019e1cb", 640), popular: true },
    { id: "f8", name: "Strawberry shortcake cup", detail: "Macerated berries, cream, vanilla sponge", price: 1.8, category: "Dessert", image: photo("photo-1497034825429-c343d7c6a68f", 640) }
  ]},
  { id: "r4", name: "Little Napoli", cuisine: "Italian · Pizza", rating: 4.6, time: "30–40 min", fee: 0.55, image: photo("photo-1579751626657-72bc17010498"), accent: "#f5ded9", featured: false, menu: [
    { id: "f9", name: "Margherita, the classic", detail: "San Marzano tomato, fior di latte, basil", price: 5, category: "Pizza", image: photo("photo-1579751626657-72bc17010498", 640), popular: true },
    { id: "f10", name: "Wild mushroom bianca", detail: "Roasted mushrooms, taleggio, thyme", price: 5.4, category: "Pizza", image: photo("photo-1571407970349-bc81e7e96d47", 640) }
  ]},
  { id: "r5", name: "Telugu Ruchulu", cuisine: "South Indian · Tiffin & Dosa", rating: 4.9, time: "20–30 min", fee: 0.35, image: "images/masala-dosa.webp", accent: "#f3e7c9", featured: true, menu: [
    { id: "f11", name: "Masala dosa", detail: "Crisp rice crepe, spiced potato masala, coconut chutney and sambar", price: 1.8, category: "Dosa", image: "images/masala-dosa.webp", popular: true },
    { id: "f12", name: "Idli sambar", detail: "Steamed rice cakes with lentil sambar and fresh coconut chutney", price: 1.2, category: "Tiffin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Idli_Sambar-Noida-UP-SP004.jpg/960px-Idli_Sambar-Noida-UP-SP004.jpg" },
    { id: "f13", name: "Medu vada", detail: "Crisp lentil doughnuts, served with sambar and coconut chutney", price: 1.2, category: "Tiffin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Medu_Vada_and_Sambhar.JPG/960px-Medu_Vada_and_Sambhar.JPG" },
    { id: "f14", name: "Ven pongal", detail: "Comforting rice and lentils with pepper, cumin, cashews and ghee", price: 1.5, category: "Mains", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ven_pongal_with_sambar_and_chutney.jpg/960px-Ven_pongal_with_sambar_and_chutney.jpg" },
    { id: "f15", name: "Filter coffee", detail: "South Indian chicory coffee, brewed strong and served with milk", price: 0.6, category: "Drinks", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Foaming_filter_coffee.jpg/1280px-Foaming_filter_coffee.jpg" },
    { id: "f16", name: "South Indian meals", detail: "Banana-leaf meal with rice, sambar, rasam, vegetables, papad and curd", price: 2.5, category: "Meals", image: "images/south-indian-meals.jpg", popular: true },
    { id: "f17", name: "Chennai chicken biryani", detail: "Fragrant seeraga samba rice, spiced chicken, raita and salna", price: 2.8, category: "Biryani", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chicken_biryani_02-06-2015_%28India%29.jpg/960px-Chicken_biryani_02-06-2015_%28India%29.jpg" },
    { id: "f18", name: "Vegetable biryani", detail: "Dum-cooked basmati rice, seasonal vegetables, herbs and raita", price: 2.3, category: "Biryani", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vegetable_Biryani_001.JPG/960px-Vegetable_Biryani_001.JPG" },
    { id: "f24", name: "Poori", detail: "Golden-fried whole wheat breads served with potato masala", price: 1.5, category: "Tiffin", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Poori_puri_sabzi_dal_India.jpg/960px-Poori_puri_sabzi_dal_India.jpg" },
    { id: "f25", name: "Onion dosa", detail: "Crisp dosa topped with finely sliced onion, herbs and spices", price: 2, category: "Dosa", image: "images/onion-dosa.png" },
    { id: "f26", name: "Uggani", detail: "Andhra-style puffed rice tempered with mustard, chilli and turmeric", price: 1.5, category: "Rice", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Uggani_Dosa_Indian_rice_dish_1.jpg/960px-Uggani_Dosa_Indian_rice_dish_1.jpg" },
    { id: "f27", name: "Tomato rice", detail: "Fragrant rice cooked with ripe tomatoes, curry leaves and spices", price: 2, category: "Rice", image: "images/tomato-rice.jpg" },
    { id: "f28", name: "Parotta", detail: "Flaky, layered South Indian flatbread served with vegetable kurma", price: 1.8, category: "Mains", image: "images/parotta.jpg" }
  ]},
  { id: "r6", name: "Wok & Ginger", cuisine: "Chinese · Wok & Noodles", rating: 4.8, time: "25–35 min", fee: 0.4, image: photo("photo-1563245372-f21724e3856d"), accent: "#e4eee8", featured: false, menu: [
    { id: "f19", name: "Vegetable Hakka noodles", detail: "Wok-tossed noodles with cabbage, peppers and spring onion", price: 2.4, category: "Noodles", image: photo("photo-1585032226651-759b368d7246", 640), popular: true },
    { id: "f20", name: "Chicken fried rice", detail: "Wok-fried rice with chicken, egg, vegetables and scallions", price: 2.8, category: "Rice", image: photo("photo-1603133872878-684f208fb84b", 640) },
    { id: "f21", name: "Chilli paneer", detail: "Crisp paneer tossed with peppers, onion and house chilli sauce", price: 2.8, category: "Small plates", image: photo("photo-1567337710282-00832b415979", 640) },
    { id: "f22", name: "Chicken Manchurian", detail: "Ginger-garlic chicken in a savoury Indo-Chinese sauce", price: 3, category: "Mains", image: photo("photo-1562967914-608f82629710", 640) },
    { id: "f23", name: "Vegetable spring rolls", detail: "Crisp rolls with cabbage, carrot and sweet chilli dip", price: 1.5, category: "Small plates", image: photo("photo-1601050690597-df0568f70950", 640) }
  ]}
];

const defaultUsers = [
  { id: "u-admin", name: "Alex Morgan", email: "admin@dashdish.local", password: "admin123", role: "admin" },
  { id: "u-customer", name: "Jamie Lee", email: "customer@dashdish.local", password: "food123", role: "customer" },
  { id: "u-restaurant", name: "Sam Rivera", email: "restaurant@dashdish.local", password: "food123", role: "restaurant", restaurantId: "r1" },
  { id: "u-driver", name: "Taylor Quinn", email: "driver@dashdish.local", password: "food123", role: "delivery" }
];

const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const INR_PER_USD = 88;
const inrFormatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const money = value => inrFormatter.format(Number(value) * INR_PER_USD);

let users = read(KEYS.users, defaultUsers);
let restaurants = read(KEYS.restaurants, starterRestaurants);
if (Number(localStorage.getItem(CATALOG_VERSION_KEY) || 0) < CATALOG_VERSION) {
  for (const seedRestaurant of starterRestaurants) {
    let restaurant = restaurants.find(item => item.id === seedRestaurant.id);
    if (!restaurant) {
      restaurants.push(seedRestaurant);
      continue;
    }
    restaurant.fee = seedRestaurant.fee;
    if (seedRestaurant.id === "r5") {
      restaurant.name = seedRestaurant.name;
      restaurant.image = seedRestaurant.image;
    }
    restaurant.menu ||= [];
    for (const seedItem of seedRestaurant.menu) {
      const menuItem = restaurant.menu.find(item => item.id === seedItem.id);
      if (menuItem) {
        menuItem.price = seedItem.price;
        if (seedRestaurant.id === "r5") menuItem.image = seedItem.image;
      }
      else restaurant.menu.push(seedItem);
    }
  }
  save(KEYS.restaurants, restaurants);
  localStorage.setItem(CATALOG_VERSION_KEY, String(CATALOG_VERSION));
}
let orders = read(KEYS.orders, []);
let cart = read(KEYS.cart, []);
let cartPricesChanged = false;
for (const cartItem of cart) {
  const menuItem = restaurants.find(restaurant => restaurant.id === cartItem.restaurantId)?.menu.find(item => item.id === cartItem.id);
  if (menuItem && cartItem.price !== menuItem.price) {
    cartItem.price = menuItem.price;
    cartPricesChanged = true;
  }
}
if (cartPricesChanged) save(KEYS.cart, cart);
let currentUser = read(KEYS.session, null);
let currentView = currentUser ? roleHome(currentUser.role) : "home";
let activeCategory = "All";
let searchText = "";
let selectedRestaurant = null;
let toastTimer;

function roleHome(role) {
  return ({ admin: "admin", restaurant: "restaurant", delivery: "delivery" })[role] || "home";
}

function renderHeader() {
  const appHeader = document.querySelector("#topbar");
  const isCustomer = !currentUser || currentUser.role === "customer";
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  appHeader.innerHTML = `
    <a class="brand" href="#home" data-view="home" aria-label="FOODZY home"><span class="brand-mark">f.</span><span>FOODZY</span></a>
    <div class="location-pill"><span class="location-dot"></span><span><small>Delivering to</small><strong>Brooklyn, NY</strong></span><span class="chevron">⌄</span></div>
    ${isCustomer ? `<label class="search-box"><span aria-hidden="true">⌕</span><input id="search-input" type="search" placeholder="Dishes, restaurants, cuisines" value="${escapeHtml(searchText)}" aria-label="Search dishes and restaurants"><kbd>/</kbd></label>` : `<div class="header-context">${escapeHtml(currentUser?.name || "Operations")}</div>`}
    <div class="header-actions">
      ${isCustomer ? `<button class="icon-button cart-trigger" data-action="cart" aria-label="Open basket">♧<span class="cart-count">${cartCount}</span></button>` : ""}
      ${currentUser ? `<button class="profile-button" data-action="account"><span class="avatar">${escapeHtml(initials(currentUser.name))}</span><span class="profile-name">${escapeHtml(currentUser.name.split(" ")[0])}</span><span class="chevron">⌄</span></button>` : `<button class="sign-in-button" data-action="auth">Sign in <span aria-hidden="true">↗</span></button>`}
    </div>`;
}

function initials(name = "Guest") {
  return name.split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
}

function render() {
  renderHeader();
  const app = document.querySelector("#app");
  if (currentView === "restaurant-detail") app.innerHTML = restaurantDetailView();
  else if (currentView === "orders") app.innerHTML = customerOrdersView();
  else if (currentView === "admin") app.innerHTML = adminView();
  else if (currentView === "restaurant") app.innerHTML = restaurantView();
  else if (currentView === "delivery") app.innerHTML = deliveryView();
  else app.innerHTML = customerHomeView();
  bindSearch();
}

function customerHomeView() {
  const categories = ["All", "Bowls", "Dumplings", "Pizza", "Dessert", "Vegetarian"];
  let shownRestaurants = restaurants.filter(restaurant => {
    const matchesCategory = activeCategory === "All" || restaurant.cuisine.toLowerCase().includes(activeCategory.toLowerCase()) || restaurant.menu.some(item => item.category.toLowerCase() === activeCategory.toLowerCase());
    const searchable = `${restaurant.name} ${restaurant.cuisine} ${restaurant.menu.map(item => item.name).join(" ")}`.toLowerCase();
    return matchesCategory && searchable.includes(searchText.toLowerCase());
  });
  const feature = restaurants.find(restaurant => restaurant.featured) || restaurants[0];
  return `<div class="customer-layout">
    <aside class="side-nav">
      <div class="side-label">YOUR DASHBOARD</div>
      <button class="side-link is-active" data-view="home"><span>⌂</span> Discover</button>
      <button class="side-link" data-view="orders"><span>◷</span> Your orders${orders.some(order => order.customerId === currentUser?.id && !["Delivered", "Cancelled"].includes(order.status)) ? `<i class="nav-pip"></i>` : ""}</button>
      <div class="side-divider"></div>
      <div class="side-label">GOOD TO KNOW</div>
      <div class="side-note"><span class="note-spark">✳</span><p>Good things happen when you order local.</p><span>Every order supports a neighborhood kitchen.</span></div>
      ${currentUser ? `<button class="side-link side-logout" data-action="logout"><span>↪</span> Sign out</button>` : `<button class="side-link side-login" data-action="auth"><span>↗</span> Sign in for checkout</button>`}
    </aside>
    <section class="customer-main">
      <div class="welcome-line"><div><p class="eyebrow">TUESDAY, OCTOBER 1 <span>·</span> BROOKLYN</p><h1>What sounds<br>good today<span class="period">?</span></h1></div><div class="welcome-mark" aria-hidden="true">↗</div></div>
      ${feature ? `<section class="feature-banner" style="--feature-accent:${escapeHtml(feature.accent || "#e2eadc")}"><img src="${escapeHtml(feature.image)}" alt="${escapeHtml(feature.name)} food" class="feature-image"><div class="feature-copy"><span class="feature-tag"><span>✳</span> NEIGHBORHOOD FAVORITE</span><h2>A little love<br>from the locals.</h2><p>${escapeHtml(feature.name)} is having a moment. Find out why.</p><button class="text-link" data-restaurant="${escapeHtml(feature.id)}">Meet the kitchen <span>→</span></button></div><div class="feature-index">01 <span>/ 04</span></div></section>` : ""}
      <div class="section-heading"><div><p class="eyebrow">MADE NEAR YOU</p><h2>Find your kind of delicious</h2></div><button class="quiet-link" data-view="orders">Your recent orders <span>→</span></button></div>
      <div class="category-row" role="tablist" aria-label="Restaurant categories">${categories.map(category => `<button class="category-chip ${activeCategory === category ? "selected" : ""}" data-category="${escapeHtml(category)}" role="tab" aria-selected="${activeCategory === category}">${category === "All" ? "✳" : categoryIcon(category)}<span>${escapeHtml(category)}</span></button>`).join("")}</div>
      <div class="restaurant-grid">${shownRestaurants.length ? shownRestaurants.map(restaurantCard).join("") : `<div class="empty-state"><span>⌕</span><h3>No kitchens found</h3><p>Try a different dish or category.</p></div>`}</div>
      <div class="local-note"><span>✳</span> Independent kitchens, delivered with care.</div>
    </section>
  </div>`;
}

function categoryIcon(category) {
  return ({ Bowls: "◉", Dumplings: "◌", Pizza: "◒", Dessert: "❋", Vegetarian: "✿" })[category] || "✳";
}

function restaurantCard(restaurant) {
  return `<article class="restaurant-card"><button class="restaurant-image-button" data-restaurant="${escapeHtml(restaurant.id)}" aria-label="View ${escapeHtml(restaurant.name)} menu"><img src="${escapeHtml(restaurant.image)}" alt="Food from ${escapeHtml(restaurant.name)}" loading="lazy"><span class="image-time">${escapeHtml(restaurant.time)}</span><span class="save-button" aria-hidden="true">♡</span></button><div class="restaurant-meta"><div><button class="restaurant-name" data-restaurant="${escapeHtml(restaurant.id)}">${escapeHtml(restaurant.name)}</button><p>${escapeHtml(restaurant.cuisine)}</p></div><span class="rating">★ ${Number(restaurant.rating).toFixed(1)}</span></div><div class="restaurant-submeta"><span>${restaurant.fee ? `${money(restaurant.fee)} delivery` : "Free delivery"}</span><span class="submeta-dot">·</span><span>Popular near you</span></div></article>`;
}

function restaurantDetailView() {
  const restaurant = restaurants.find(item => item.id === selectedRestaurant) || restaurants[0];
  if (!restaurant) return `<div class="empty-state"><h2>Kitchen unavailable</h2><button class="primary-button" data-view="home">Back to discover</button></div>`;
  return `<div class="detail-page"><button class="back-link" data-view="home">← <span>All kitchens</span></button><div class="detail-hero"><img src="${escapeHtml(restaurant.image)}" alt="${escapeHtml(restaurant.name)} restaurant dishes"><div class="detail-title"><p class="eyebrow">${escapeHtml(restaurant.cuisine)}</p><h1>${escapeHtml(restaurant.name)}</h1><p>★ ${Number(restaurant.rating).toFixed(1)} <span>·</span> ${escapeHtml(restaurant.time)} <span>·</span> ${restaurant.fee ? `${money(restaurant.fee)} delivery` : "Free delivery"}</p></div></div><div class="detail-menu"><div class="menu-heading"><div><p class="eyebrow">A FEW HOUSE FAVORITES</p><h2>The menu</h2></div><span>Prices include tax</span></div><div class="menu-list">${restaurant.menu.map(item => `<article class="menu-item"><img src="${escapeHtml(item.image || restaurant.image)}" alt="${escapeHtml(item.name)}" loading="lazy"><div class="menu-description">${item.popular ? `<span class="popular-label">✳ MOST LOVED</span>` : ""}<h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.detail || "Made fresh in our neighborhood kitchen.")}</p><strong>${money(item.price)}</strong></div><button class="add-button" data-add="${escapeHtml(item.id)}" data-restaurant-id="${escapeHtml(restaurant.id)}" aria-label="Add ${escapeHtml(item.name)} to basket">+</button></article>`).join("")}</div></div></div>`;
}

function statusClass(status) {
  return status.toLowerCase().replace(/[^a-z]+/g, "-");
}

function statusProgress(status) {
  return ({ Placed: 0, Preparing: 1, "Ready for pickup": 2, "Out for delivery": 3, Delivered: 4, Cancelled: -1 })[status] ?? 0;
}

function customerOrdersView() {
  if (!currentUser) return `<section class="access-gate"><span class="gate-mark">◷</span><p class="eyebrow">YOUR TABLE, YOUR TIMELINE</p><h1>Orders live here.</h1><p>Sign in to see your order history and follow dinner from kitchen to doorstep.</p><button class="primary-button" data-action="auth">Sign in or create account <span>→</span></button></section>`;
  const mine = orders.filter(order => order.customerId === currentUser.id).sort((a, b) => b.createdAt - a.createdAt);
  return `<section class="orders-page"><div class="page-title-row"><div><p class="eyebrow">YOUR DASHBOARD</p><h1>Your orders<span class="period">.</span></h1><p class="page-subtitle">The good stuff, from kitchen to doorstep.</p></div><button class="outline-button" data-view="home">＋ Order something</button></div>${mine.length ? `<div class="order-list">${mine.map(order => orderCard(order, "customer")).join("")}</div>` : `<div class="empty-orders"><span>◷</span><h2>Your next favorite is out there.</h2><p>Place an order and you can follow every step right here.</p><button class="primary-button" data-view="home">Explore kitchens <span>→</span></button></div>`}</section>`;
}

function orderCard(order, mode) {
  const progress = statusProgress(order.status);
  const steps = ["Placed", "Preparing", "Ready for pickup", "Out for delivery", "Delivered"];
  return `<article class="order-card"><div class="order-top"><div><span class="order-number">ORDER ${escapeHtml(order.id.slice(-6).toUpperCase())}</span><h3>${escapeHtml(order.restaurantName)}</h3><p>${new Date(order.createdAt).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}${order.scheduledFor ? ` · Scheduled ${escapeHtml(order.scheduledFor)}` : " · ASAP"}</p></div><span class="status-pill status-${statusClass(order.status)}">${escapeHtml(order.status)}</span></div><div class="order-items">${order.items.map(item => `<span>${Number(item.quantity)}× ${escapeHtml(item.name)}</span>`).join("")}<strong>${money(order.total)}</strong></div>${order.status !== "Cancelled" ? `<div class="progress-track">${steps.map((step, index) => `<div class="progress-step ${index <= progress ? "done" : ""} ${index === progress ? "current" : ""}"><span class="progress-dot">${index < progress ? "✓" : ""}</span><small>${step}</small></div>`).join("")}</div>` : ""}${mode !== "customer" ? `<div class="order-controls">${order.customerName ? `<span>Customer: ${escapeHtml(order.customerName)}</span>` : ""}${statusControl(order)}</div>` : order.status === "Delivered" ? `<p class="delivery-thanks">Delivered with care. Thanks for ordering local ✳</p>` : ""}</article>`;
}

function statusControl(order) {
  const transitions = {
    Placed: ["Preparing", "Accept & prepare"],
    Preparing: ["Ready for pickup", "Mark ready"],
    "Ready for pickup": ["Out for delivery", "Picked up"],
    "Out for delivery": ["Delivered", "Mark delivered"]
  };
  const transition = transitions[order.status];
  return transition ? `<button class="small-action" data-status="${escapeHtml(order.id)}" data-next-status="${escapeHtml(transition[0])}">${escapeHtml(transition[1])} →</button>` : "";
}

function restaurantView() {
  if (!currentUser) return `<section class="access-gate"><span class="gate-mark">⌂</span><p class="eyebrow">KITCHEN PORTAL</p><h1>Welcome to the pass.</h1><p>Sign in with a restaurant account to manage your menu and incoming orders.</p><button class="primary-button" data-action="auth">Sign in <span>→</span></button></section>`;
  const restaurant = restaurants.find(item => item.id === currentUser.restaurantId) || restaurants[0];
  if (!restaurant) return `<section class="access-gate"><h1>No kitchen assigned.</h1><p>Ask an admin to connect your account to a restaurant.</p></section>`;
  const kitchenOrders = orders.filter(order => order.restaurantId === restaurant.id).sort((a, b) => b.createdAt - a.createdAt);
  return `<section class="operations-page"><div class="operations-header"><div><p class="eyebrow">KITCHEN PORTAL · ${escapeHtml(restaurant.name.toUpperCase())}</p><h1>Good morning,<br>let's get cooking<span class="period">.</span></h1><p class="page-subtitle">A clear view of what's on the pass today.</p></div><span class="open-status"><i></i> ACCEPTING ORDERS</span></div><div class="metric-row"><div><span>Today's orders</span><strong>${kitchenOrders.length}</strong></div><div><span>Items on menu</span><strong>${restaurant.menu.length}</strong></div><div><span>Kitchen rating</span><strong>★ ${Number(restaurant.rating).toFixed(1)}</strong></div></div><div class="operations-grid"><section class="operation-section"><div class="section-heading compact"><div><p class="eyebrow">THE PASS</p><h2>Incoming orders</h2></div><span>${kitchenOrders.filter(order => !["Delivered", "Cancelled"].includes(order.status)).length} active</span></div>${kitchenOrders.length ? `<div class="order-list">${kitchenOrders.map(order => orderCard(order, "restaurant")).join("")}</div>` : `<div class="empty-inline"><span>◷</span><p>No orders just yet. They'll appear here when placed.</p></div>`}</section><section class="operation-section menu-management"><div class="section-heading compact"><div><p class="eyebrow">YOUR OFFERING</p><h2>Menu items</h2></div><button class="small-action" data-action="add-menu-item">＋ Add item</button></div><div class="managed-menu">${restaurant.menu.map(item => `<div class="managed-item"><img src="${escapeHtml(item.image || restaurant.image)}" alt="" loading="lazy"><div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.category)} · ${money(item.price)}</span></div><button class="remove-item" data-remove-item="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div>`).join("")}</div></section></div></section>`;
}

function adminView() {
  if (!currentUser) return `<section class="access-gate"><span class="gate-mark">⌘</span><p class="eyebrow">ADMINISTRATION</p><h1>Operations, at a glance.</h1><p>Sign in with an admin account to oversee kitchens, accounts, and orders.</p><button class="primary-button" data-action="auth">Admin sign in <span>→</span></button></section>`;
  const activeOrders = orders.filter(order => !["Delivered", "Cancelled"].includes(order.status)).length;
  return `<section class="operations-page admin-page"><div class="operations-header"><div><p class="eyebrow">FOODZY · ADMIN CONSOLE</p>
  <h1>Good food takes<br>a good system<span class="period">.</span></h1><p class="page-subtitle">Your neighborhood, running smoothly.</p></div><span class="admin-mark">FZ<span>ADMIN</span></span></div><div class="metric-row"><div><span>Partner kitchens</span><strong>${restaurants.length}</strong></div><div><span>Active orders</span><strong>${activeOrders}</strong></div><div><span>Registered users</span><strong>${users.length}</strong></div><div><span>Orders today</span><strong>${orders.filter(order => new Date(order.createdAt).toDateString() === new Date().toDateString()).length}</strong></div></div><div class="admin-grid"><section class="operation-section"><div class="section-heading compact"><div><p class="eyebrow">PARTNER NETWORK</p><h2>Neighborhood kitchens</h2></div><button class="small-action" data-action="add-restaurant">＋ Add kitchen</button></div><div class="admin-restaurant-list">${restaurants.map(restaurant => `<article class="admin-restaurant"><img src="${escapeHtml(restaurant.image)}" alt="" loading="lazy"><div><h3>${escapeHtml(restaurant.name)}</h3><p>${escapeHtml(restaurant.cuisine)} · ${restaurant.menu.length} menu items</p></div><span class="rating">★ ${Number(restaurant.rating).toFixed(1)}</span></article>`).join("")}</div></section><section class="operation-section"><div class="section-heading compact"><div><p class="eyebrow">PEOPLE & PLATES</p><h2>Team access</h2></div></div><div class="user-roster">${users.map(user => `<div class="user-row"><span class="avatar">${escapeHtml(initials(user.name))}</span><div><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.email)}</span></div><span class="role-tag">${escapeHtml(user.role)}</span></div>`).join("")}</div></section></div><section class="operation-section all-orders-section"><div class="section-heading compact"><div><p class="eyebrow">LIVE ORDER DESK</p><h2>All orders</h2></div><span>${orders.length} total</span></div>${orders.length ? `<div class="order-list">${[...orders].sort((a, b) => b.createdAt - a.createdAt).map(order => orderCard(order, "admin")).join("")}</div>` : `<div class="empty-inline"><span>◷</span><p>No orders have been placed yet.</p></div>`}</section></section>`;
}

function deliveryView() {
  if (!currentUser) return `<section class="access-gate"><span class="gate-mark">↗</span><p class="eyebrow">DELIVERY PARTNER</p><h1>Every mile matters.</h1><p>Sign in with a delivery account to see ready orders and update deliveries.</p><button class="primary-button" data-action="auth">Sign in <span>→</span></button></section>`;
  const deliveryOrders = orders.filter(order => ["Ready for pickup", "Out for delivery"].includes(order.status)).sort((a, b) => a.createdAt - b.createdAt);
  const completed = orders.filter(order => order.status === "Delivered");
  return `<section class="operations-page delivery-page"><div class="operations-header"><div><p class="eyebrow">DELIVERY PARTNER · FIELD VIEW</p><h1>Out there, making<br>someone's day<span class="period">.</span></h1><p class="page-subtitle">Ready pickups and your active drops.</p></div><span class="delivery-illustration" aria-hidden="true">↗</span></div><div class="metric-row"><div><span>Ready to collect</span><strong>${orders.filter(order => order.status === "Ready for pickup").length}</strong></div><div><span>On the road</span><strong>${orders.filter(order => order.status === "Out for delivery").length}</strong></div><div><span>Delivered today</span><strong>${completed.filter(order => new Date(order.createdAt).toDateString() === new Date().toDateString()).length}</strong></div></div><section class="operation-section"><div class="section-heading compact"><div><p class="eyebrow">YOUR ROUTE</p><h2>Pickups & deliveries</h2></div></div>${deliveryOrders.length ? `<div class="order-list">${deliveryOrders.map(order => orderCard(order, "delivery")).join("")}</div>` : `<div class="empty-inline"><span>✓</span><p>All caught up. New ready orders will show up here.</p></div>`}</section><section class="operation-section completed-section"><div class="section-heading compact"><div><p class="eyebrow">DONE WITH CARE</p><h2>Recent deliveries</h2></div></div>${completed.length ? `<div class="recent-deliveries">${completed.slice(0, 4).map(order => `<div><span class="completed-check">✓</span><div><strong>${escapeHtml(order.restaurantName)}</strong><span>${escapeHtml(order.customerName)} · ${money(order.total)}</span></div><small>Delivered</small></div>`).join("")}</div>` : `<div class="empty-inline"><p>Your completed deliveries will appear here.</p></div>`}</section></section>`;
}

function bindSearch() {
  const input = document.querySelector("#search-input");
  if (input) input.addEventListener("input", event => {
    searchText = event.target.value;
    const cursor = event.target.selectionStart;
    render();
    const updated = document.querySelector("#search-input");
    updated?.focus();
    updated?.setSelectionRange(cursor, cursor);
  });
}

function openModal(content, className = "") {
  document.querySelector("#modal-root").innerHTML = `<div class="modal-backdrop"><section class="modal ${className}" role="dialog" aria-modal="true">${content}</section></div>`;
  document.querySelector("#modal-root .modal-backdrop")?.addEventListener("click", event => {
    if (event.target === event.currentTarget) closeModal();
  });
  document.querySelector("#modal-root input")?.focus();
}

function closeModal() {
  document.querySelector("#modal-root").innerHTML = "";
}

function authModal(mode = "login") {
  const signup = mode === "signup";
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><div class="modal-brand"><span class="brand-mark">f.</span><span>FOODZY</span></div><p class="eyebrow">${signup ? "COME ON IN" : "GOOD TO SEE YOU"}</p><h2>${signup ? "Make yourself at home." : "Dinner's closer than you think."}</h2><p class="modal-intro">${signup ? "Create an account to order from your neighborhood." : "Sign in to get your favorites delivered."}</p><div class="auth-tabs"><button class="${!signup ? "active" : ""}" data-auth-mode="login">Sign in</button><button class="${signup ? "active" : ""}" data-auth-mode="signup">Create account</button></div><form id="auth-form" data-mode="${signup ? "signup" : "login"}">${signup ? `<label>Your name<input name="name" autocomplete="name" placeholder="Jordan Smith" required></label>` : ""}<label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required></label><label>Password<input name="password" type="password" autocomplete="${signup ? "new-password" : "current-password"}" placeholder="${signup ? "At least 6 characters" : "Your password"}" minlength="6" required></label>${signup ? `<label>Account type<select name="role"><option value="customer">Customer</option><option value="restaurant">Restaurant partner</option><option value="delivery">Delivery partner</option></select></label>` : ""}<button class="primary-button auth-submit" type="submit">${signup ? "Create account" : "Sign in"} <span>→</span></button></form>${!signup ? `<div class="demo-access"><strong>Demo accounts</strong><span>Admin: admin@dashdish.local / admin123</span><span>Customer: customer@dashdish.local / food123</span><span>Restaurant: restaurant@dashdish.local / food123</span><span>Delivery: driver@dashdish.local / food123</span></div>` : `<p class="signup-note">Admin access is assigned by an administrator.</p>`}</div>`, "auth-modal");
}

function cartModal() {
  if (!cart.length) {
    openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">YOUR BASKET</p><h2>Room for something good.</h2><p class="modal-intro">Your basket is empty. Find a neighborhood favorite to get started.</p><button class="primary-button" data-action="close-modal" data-view="home">Explore kitchens <span>→</span></button>`, "cart-modal");
    return;
  }
  const restaurant = restaurants.find(item => item.id === cart[0].restaurantId);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">YOUR BASKET</p><h2>${escapeHtml(restaurant?.name || "Your order")}</h2><p class="modal-intro">${escapeHtml(restaurant?.time || "Made fresh, just for you.")}</p><div class="cart-items">${cart.map(item => `<div class="cart-item"><div><strong>${escapeHtml(item.name)}</strong><span>${money(item.price)} each</span></div><div class="quantity-control"><button data-quantity="${escapeHtml(item.id)}" data-delta="-1" aria-label="Remove one ${escapeHtml(item.name)}">−</button><span>${item.quantity}</span><button data-quantity="${escapeHtml(item.id)}" data-delta="1" aria-label="Add one ${escapeHtml(item.name)}">+</button></div><strong>${money(item.price * item.quantity)}</strong></div>`).join("")}</div><div class="cart-totals"><div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div><span>Delivery</span><strong>${restaurant?.fee ? money(restaurant.fee) : "Free"}</strong></div><div class="cart-total"><span>Total</span><strong>${money(subtotal + (restaurant?.fee || 0) + subtotal * 0.08)}</strong></div><small>Includes 8% estimated sales tax</small></div><button class="primary-button checkout-button" data-action="checkout">Continue to checkout <span>→</span></button>`, "cart-modal");
}

function checkoutModal() {
  if (!currentUser) {
    closeModal();
    authModal();
    showToast("Sign in or create an account to place your order.");
    return;
  }
  const restaurant = restaurants.find(item => item.id === cart[0]?.restaurantId);
  if (!restaurant || !cart.length) return;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const minimumDate = new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16);
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">ALMOST THERE</p><h2>Where should we bring it?</h2><p class="modal-intro">${escapeHtml(restaurant.name)} · ${money(subtotal + (restaurant.fee || 0) + subtotal * 0.08)} estimated total</p><form id="checkout-form"><label>Delivery address<input name="address" placeholder="Street address, apartment" autocomplete="street-address" required></label><label>Delivery timing<select name="timing"><option value="ASAP">As soon as possible · ${escapeHtml(restaurant.time)}</option><option value="Scheduled">Schedule a delivery</option></select></label><label id="schedule-field" class="hidden-field">Choose a date & time<input type="datetime-local" name="scheduledFor" min="${minimumDate}"></label><label>Delivery note <span class="optional">(optional)</span><input name="note" placeholder="Gate code, leave at door..."></label><button class="primary-button auth-submit" type="submit">Place order <span>→</span></button></form>`, "checkout-modal");
}

function accountMenu() {
  const views = { customer: [["home", "⌂", "Discover"], ["orders", "◷", "Your orders"]], restaurant: [["restaurant", "⌂", "Kitchen portal"]], delivery: [["delivery", "↗", "Delivery route"]], admin: [["admin", "⌘", "Admin console"]] };
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><div class="account-card"><span class="avatar">${escapeHtml(initials(currentUser.name))}</span><div><strong>${escapeHtml(currentUser.name)}</strong><span>${escapeHtml(currentUser.email)}</span></div><span class="role-tag">${escapeHtml(currentUser.role)}</span></div><div class="account-menu">${(views[currentUser.role] || []).map(([view, icon, label]) => `<button data-view="${view}"><span>${icon}</span>${label} <b>→</b></button>`).join("")}<button data-action="logout"><span>↪</span>Sign out <b>→</b></button></div>`, "account-modal");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3000);
}

function transitionOrder(orderId, nextStatus) {
  const order = orders.find(item => item.id === orderId);
  if (!order) return;
  order.status = nextStatus;
  save(KEYS.orders, orders);
  render();
  showToast(`Order updated: ${nextStatus}.`);
}

function addMenuItem() {
  const restaurant = restaurants.find(item => item.id === currentUser?.restaurantId) || restaurants[0];
  if (!restaurant) return;
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">KITCHEN MENU</p><h2>Add something delicious.</h2><form id="menu-form"><label>Dish name<input name="name" placeholder="Roasted tomato focaccia" required></label><label>Description<input name="detail" placeholder="A little about the dish" required></label><div class="form-columns"><label>Price (₹)<input name="price" type="number" min="0.5" step="0.5" placeholder="250" required></label><label>Category<input name="category" placeholder="Small plates" required></label></div><button class="primary-button auth-submit" type="submit">Add to menu <span>→</span></button></form>`, "form-modal");
}

function addRestaurant() {
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><p class="eyebrow">PARTNER NETWORK</p><h2>Welcome a new kitchen.</h2><form id="restaurant-form"><label>Restaurant name<input name="name" placeholder="The Corner Table" required></label><label>Cuisine & specialty<input name="cuisine" placeholder="Seasonal · Modern American" required></label><div class="form-columns"><label>Delivery time<input name="time" placeholder="20–30 min" required></label><label>Delivery fee (₹)<input name="fee" type="number" min="0" step="0.25" placeholder="100" required></label></div><label>Food photo URL<input name="image" type="url" placeholder="https://..." required></label><button class="primary-button auth-submit" type="submit">Add kitchen <span>→</span></button></form>`, "form-modal");
}

document.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  const actionButton = event.target.closest("[data-action]");
  const restaurantButton = event.target.closest("[data-restaurant]");
  const categoryButton = event.target.closest("[data-category]");
  const addButton = event.target.closest("[data-add]");
  const quantityButton = event.target.closest("[data-quantity]");
  const statusButton = event.target.closest("[data-status]");
  const authModeButton = event.target.closest("[data-auth-mode]");
  const removeButton = event.target.closest("[data-remove-item]");

  if (viewButton) {
    const requestedView = viewButton.dataset.view;
    if (requestedView === "restaurant-detail") return;
    if (["admin", "restaurant", "delivery", "orders"].includes(requestedView) && !currentUser) {
      if (requestedView === "orders") { currentView = "orders"; closeModal(); render(); }
      else authModal();
      return;
    }
    if (currentUser && ["admin", "restaurant", "delivery"].includes(requestedView) && currentUser.role !== requestedView) {
      showToast("That module is for a different account role.");
      return;
    }
    currentView = requestedView;
    closeModal();
    render();
    return;
  }
  if (restaurantButton) {
    selectedRestaurant = restaurantButton.dataset.restaurant;
    currentView = "restaurant-detail";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    render();
    return;
  }
  if (addButton) {
    const restaurantId = addButton.dataset.restaurantId;
    const restaurant = restaurants.find(item => item.id === restaurantId);
    const item = restaurant?.menu.find(menuItem => menuItem.id === addButton.dataset.add);
    if (!item) return;
    if (cart.length && cart[0].restaurantId !== restaurantId) {
      showToast("Your basket is from another kitchen. Finish or clear it first.");
      return;
    }
    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) existing.quantity += 1;
    else cart.push({ id: item.id, restaurantId, restaurantName: restaurant.name, name: item.name, price: Number(item.price), quantity: 1 });
    save(KEYS.cart, cart);
    renderHeader();
    showToast(`${item.name} added to your basket.`);
    return;
  }
  if (quantityButton) {
    const item = cart.find(cartItem => cartItem.id === quantityButton.dataset.quantity);
    if (item) item.quantity += Number(quantityButton.dataset.delta);
    cart = cart.filter(cartItem => cartItem.quantity > 0);
    save(KEYS.cart, cart);
    cartModal();
    renderHeader();
    return;
  }
  if (statusButton) {
    transitionOrder(statusButton.dataset.status, statusButton.dataset.nextStatus);
    return;
  }
  if (authModeButton) {
    authModal(authModeButton.dataset.authMode);
    return;
  }
  if (removeButton) {
    const restaurant = restaurants.find(item => item.id === currentUser?.restaurantId) || restaurants[0];
    if (restaurant) restaurant.menu = restaurant.menu.filter(item => item.id !== removeButton.dataset.removeItem);
    save(KEYS.restaurants, restaurants);
    render();
    showToast("Menu item removed.");
    return;
  }
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "auth") authModal();
  else if (action === "cart") cartModal();
  else if (action === "close-modal") closeModal();
  else if (action === "account") accountMenu();
  else if (action === "logout") {
    currentUser = null;
    currentView = "home";
    localStorage.removeItem(KEYS.session);
    closeModal();
    render();
    showToast("You have signed out.");
  } else if (action === "checkout") checkoutModal();
  else if (action === "add-menu-item") addMenuItem();
  else if (action === "add-restaurant") addRestaurant();
});

document.addEventListener("submit", event => {
  if (event.target.id === "auth-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = String(form.get("email")).trim().toLowerCase();
    const password = String(form.get("password"));
    if (event.target.dataset.mode === "signup") {
      if (users.some(user => user.email.toLowerCase() === email)) return showToast("An account with that email already exists.");
      const role = String(form.get("role"));
      const newUser = { id: `u-${Date.now()}`, name: String(form.get("name")).trim(), email, password, role };
      if (role === "restaurant") newUser.restaurantId = restaurants[0]?.id;
      users.push(newUser);
      save(KEYS.users, users);
      currentUser = newUser;
      save(KEYS.session, currentUser);
      currentView = roleHome(role);
      closeModal();
      render();
      showToast(`Welcome to FOODZY, ${newUser.name.split(" ")[0]}.`);
      return;
    }
    const found = users.find(user => user.email.toLowerCase() === email && user.password === password);
    if (!found) return showToast("Those details don't match an account. Try again.");
    currentUser = found;
    save(KEYS.session, currentUser);
    currentView = roleHome(found.role);
    closeModal();
    render();
    showToast(`Welcome back, ${found.name.split(" ")[0]}.`);
  }
  if (event.target.id === "checkout-form") {
    event.preventDefault();
    if (!currentUser) return authModal();
    const form = new FormData(event.target);
    const restaurant = restaurants.find(item => item.id === cart[0]?.restaurantId);
    if (!restaurant || !cart.length) return showToast("Your basket is empty.");
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = {
      id: `DD-${Date.now()}`,
      customerId: currentUser.id,
      customerName: currentUser.name,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      items: cart.map(item => ({ ...item })),
      subtotal,
      deliveryFee: Number(restaurant.fee || 0),
      total: subtotal + Number(restaurant.fee || 0) + subtotal * 0.08,
      address: String(form.get("address")).trim(),
      note: String(form.get("note") || "").trim(),
      scheduledFor: form.get("timing") === "Scheduled" ? String(form.get("scheduledFor") || "") : "",
      status: "Placed",
      createdAt: Date.now()
    };
    orders.push(order);
    save(KEYS.orders, orders);
    cart = [];
    save(KEYS.cart, cart);
    closeModal();
    currentView = "orders";
    render();
    showToast("Order placed. The kitchen has been notified.");
  }
  if (event.target.id === "menu-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    const restaurant = restaurants.find(item => item.id === currentUser?.restaurantId) || restaurants[0];
    if (!restaurant) return;
    restaurant.menu.push({ id: `f-${Date.now()}`, name: String(form.get("name")).trim(), detail: String(form.get("detail")).trim(), price: Number(form.get("price")) / INR_PER_USD, category: String(form.get("category")).trim(), image: restaurant.image });
    save(KEYS.restaurants, restaurants);
    closeModal();
    render();
    showToast("A new item is on your menu.");
  }
  if (event.target.id === "restaurant-form") {
    event.preventDefault();
    const form = new FormData(event.target);
    restaurants.push({ id: `r-${Date.now()}`, name: String(form.get("name")).trim(), cuisine: String(form.get("cuisine")).trim(), rating: 5, time: String(form.get("time")).trim(), fee: Number(form.get("fee")) / INR_PER_USD, image: String(form.get("image")).trim(), accent: "#e7ebe0", featured: false, menu: [] });
    save(KEYS.restaurants, restaurants);
    closeModal();
    render();
    showToast("New kitchen added to the neighborhood.");
  }
});

document.addEventListener("change", event => {
  if (event.target.name === "timing") {
    const scheduled = event.target.value === "Scheduled";
    const scheduleField = document.querySelector("#schedule-field");
    if (scheduleField) {
      scheduleField.classList.toggle("hidden-field", !scheduled);
      scheduleField.querySelector("input").required = scheduled;
    }
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    document.querySelector("#search-input")?.focus();
  }
  if (event.key === "Escape") closeModal();
});

if (!localStorage.getItem(KEYS.users)) save(KEYS.users, defaultUsers);
if (!localStorage.getItem(KEYS.restaurants)) save(KEYS.restaurants, starterRestaurants);
render();