// --- STATE ---
// In a real app, this data would come from a database.
const artPieces = [
    // --- UPDATED URLs & ADDED NEW ART ---
    // Prices updated to be between 1000 and 5000
    // Reverted to placehold.co for reliable image loading
    { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', price: 1150, imageUrl: 'https://placehold.co/600x400/020617/ffffff?text=Starry+Night', description: 'A swirling depiction of the night sky over Saint-Rémy-de-Provence.', category: 'abstract' },
    { id: 2, title: 'Wanderer above the Sea of Fog', artist: 'Caspar David Friedrich', price: 1300, imageUrl: 'https://placehold.co/600x400/374151/ffffff?text=Wanderer+above+Sea+of+Fog', description: 'A man stands on a rocky precipice, gazing out over a misty mountain landscape.', category: 'landscape' },
    { id: 3, title: 'Mona Lisa', artist: 'Leonardo da Vinci', price: 1450, imageUrl: 'https://placehold.co/600x400/44403c/ffffff?text=Mona+Lisa', description: 'A half-length portrait of a woman with an enigmatic smile.', category: 'portrait' },
    { id: 4, title: 'The Persistence of Memory', artist: 'Salvador Dalí', price: 1600, imageUrl: 'https://placehold.co/600x400/a16207/ffffff?text=Persistence+of+Memory', description: 'A surrealist masterpiece featuring melting pocket watches in a dreamlike landscape.', category: 'abstract' },
    { id: 5, title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', price: 1750, imageUrl: 'https://placehold.co/600x400/172554/ffffff?text=Girl+with+Pearl+Earring', description: 'An intimate portrait of a young woman with a striking pearl earring.', category: 'portrait' },
    { id: 6, title: 'Impression, Sunrise', artist: 'Claude Monet', price: 1900, imageUrl: 'https://placehold.co/600x400/ea580c/ffffff?text=Impression,+Sunrise', description: 'The painting that gave its name to the Impressionist movement, depicting Le Havre harbor.', category: 'landscape' },
    { id: 7, title: 'The Scream', artist: 'Edvard Munch', price: 2050, imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=The+Scream', description: 'An iconic piece showing an agonized figure against a blood-red sky.', category: 'abstract' },
    { id: 8, title: 'Composition VIII', artist: 'Wassily Kandinsky', price: 2200, imageUrl: 'https://placehold.co/600x400/6d28d9/ffffff?text=Composition+VIII', description: 'A key work of abstract art, featuring a dynamic arrangement of geometric forms.', category: 'abstract' },
    { id: 9, title: 'Self-Portrait', artist: 'Vincent van Gogh', price: 2350, imageUrl: 'https://placehold.co/600x400/020617/ffffff?text=Van+Gogh+Self-Portrait', description: 'One of many self-portraits, showing his intense gaze.', category: 'portrait' },
    { id: 10, title: 'The Potato Eaters', artist: 'Vincent van Gogh', price: 2500, imageUrl: 'https://placehold.co/600x400/292524/ffffff?text=The+Potato+Eaters', description: 'A dark, early work depicting peasant life.', category: 'portrait' },
    { id: 11, title: 'Water Lilies', artist: 'Claude Monet', price: 2650, imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Water+Lilies', description: 'A serene depiction of his flower garden at Giverny.', category: 'landscape' },
    { id: 12, title: 'Woman with a Parasol', artist: 'Claude Monet', price: 2800, imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Woman+with+a+Parasol', description: 'A famous painting of his wife and son.', category: 'portrait' },
    { id: 13, title: 'The Elephants', artist: 'Salvador Dalí', price: 2950, imageUrl: 'https://placehold.co/600x400/a16207/ffffff?text=The+Elephants', description: 'Surrealist depiction of elephants with long, slender legs.', category: 'abstract' },
    // --- NEWLY ADDED ARTWORKS FOR ALL ARTISTS ---
    { id: 14, title: 'The Last Supper', artist: 'Leonardo da Vinci', price: 3100, imageUrl: 'https://placehold.co/600x400/44403c/ffffff?text=The+Last+Supper', description: 'A monumental mural depicting Jesus and his apostles.', category: 'portrait' },
    { id: 15, title: 'Lady with an Ermine', artist: 'Leonardo da Vinci', price: 3250, imageUrl: 'https://placehold.co/600x400/44403c/ffffff?text=Lady+with+an+Ermine', description: 'A portrait of Cecilia Gallerani, the mistress of Ludovico Sforza.', category: 'portrait' },
    { id: 16, title: 'The Milkmaid', artist: 'Johannes Vermeer', price: 3400, imageUrl: 'https://placehold.co/600x400/172554/ffffff?text=The+Milkmaid', description: 'A domestic kitchen scene, celebrated for its realistic portrayal of light.', category: 'portrait' },
    { id: 17, title: 'View of Delft', artist: 'Johannes Vermeer', price: 3550, imageUrl: 'https://placehold.co/600x400/172554/ffffff?text=View+of+Delft', description: 'A detailed cityscape of his hometown.', category: 'landscape' },
    { id: 18, title: 'Madonna', artist: 'Edvard Munch', price: 3700, imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=Madonna', description: 'A controversial and sensual depiction of the Madonna.', category: 'portrait' },
    { id: 19, 'title': 'The Dance of Life', 'artist': 'Edvard Munch', price: 3850, imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=The+Dance+of+Life', description: 'A powerful work from his Frieze of Life series.', category: 'abstract' },
    { id: 20, 'title': 'Composition VII', 'artist': 'Wassily Kandinsky', price: 4000, imageUrl: 'https://placehold.co/600x400/6d28d9/ffffff?text=Composition+VII', description: 'A chaotic and vibrant abstract composition.', category: 'abstract' },
    { id: 21, 'title': 'Der Blaue Reiter', 'artist': 'Wassily Kandinsky', price: 4150, imageUrl: 'https://placehold.co/600x400/6d28d9/ffffff?text=Der+Blaue+Reiter', description: 'The iconic painting that gave its name to the art movement.', category: 'abstract' },
    { id: 22, 'title': 'The Abbey in the Oakwood', 'artist': 'Caspar David Friedrich', price: 4300, imageUrl: 'https://placehold.co/600x400/374151/ffffff?text=Abbey+in+Oakwood', description: 'A melancholic winter landscape with a ruined Gothic abbey.', category: 'landscape' },
    { id: 23, 'title': 'Chalk Cliffs on Rügen', 'artist': 'Caspar David Friedrich', price: 4450, imageUrl: 'https://placehold.co/600x400/374151/ffffff?text=Chalk+Cliffs+on+Rugen', description: 'A striking landscape from a high vantage point.', category: 'landscape' },
    { id: 24, 'title': 'Swans Reflecting Elephants', 'artist': 'Salvador Dalí', price: 4600, imageUrl: 'https://placehold.co/600x400/a16207/ffffff?text=Swans+Reflecting+Elephants', description: 'A classic example of Dalí\'s paranoiac-critical method.', category: 'abstract' }
];

// This simulates a user's cart. In a real app, this would be on a server.
let cart = []; 
// This simulates user login. In a real app, this would be handled with a secure session.
let isLoggedIn = false; 
// To store the current artist being viewed for the bio generator
let currentArtistBio = null;
// To store the current art piece being viewed for analysis
let currentArtAnalysis = null;

// --- SELECTORS ---
const allPages = document.querySelectorAll('.page');
const nav = {
    logo: document.getElementById('nav-logo'),
    home: document.getElementById('nav-home'),
    gallery: document.getElementById('nav-gallery'),
    cart: document.getElementById('nav-cart'),
    login: document.getElementById('nav-login'),
    profile: document.getElementById('nav-profile'),
    logout: document.getElementById('nav-logout'),
    cartCount: document.getElementById('cart-item-count'),
};
const mobileNav = {
    button: document.getElementById('mobile-menu-button'),
    menu: document.getElementById('mobile-menu'),
    home: document.getElementById('mobile-nav-home'),
    gallery: document.getElementById('mobile-nav-gallery'),
    cart: document.getElementById('mobile-nav-cart'),
    login: document.getElementById('mobile-nav-login'),
    profile: document.getElementById('mobile-nav-profile'),
    logout: document.getElementById('mobile-nav-logout'),
    cartCount: document.getElementById('mobile-cart-item-count'),
};
const page = {
    login: document.getElementById('login-page'),
    home: document.getElementById('home-page'),
    gallery: document.getElementById('gallery-page'),
    details: document.getElementById('details-page'),
    cart: document.getElementById('cart-page'),
    checkout: document.getElementById('checkout-page'), // Checkout page selector
};
const loginForm = document.getElementById('login-form');
const artworksGrid = document.getElementById('artworks-grid');
const artDetailsContent = document.getElementById('art-details-content');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartMessage = document.getElementById('empty-cart-message');
const orderSummary = document.getElementById('order-summary');
const galleryTitle = document.getElementById('gallery-title');

// --- Footer Links Selectors ---
const footerLinks = {
    gallery: document.getElementById('footer-shop-gallery'),
    newArrivals: document.getElementById('footer-shop-new-arrivals'),
    collections: document.getElementById('footer-shop-collections'),
    story: document.getElementById('footer-about-story'),
    artists: document.getElementById('footer-about-artists'),
    contact: document.getElementById('footer-help-contact'),
};

// --- Checkout & Back to Home Buttons ---
const checkoutBtn = document.getElementById('checkout-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');

// --- NEW: AI Feature Selectors ---
// Artist Bio
const artistBioSection = document.getElementById('artist-bio-section');
const artistBioTitle = document.getElementById('artist-bio-title');
const generateBioBtn = document.getElementById('generate-bio-btn');
const artistBioContent = document.getElementById('artist-bio-content');
const bioLoader = document.getElementById('bio-loader');
const bioError = document.getElementById('bio-error');
const closeBioBtn = document.getElementById('close-bio-btn');
// Art Analysis
const artAnalysisSection = document.getElementById('art-analysis-section');
const generateAnalysisBtn = document.getElementById('generate-analysis-btn');
const artAnalysisContent = document.getElementById('art-analysis-content');
const analysisLoader = document.getElementById('analysis-loader');
const analysisError = document.getElementById('analysis-error');


// --- GEMINI API FUNCTIONS ---

/**
 * Calls the Gemini API to generate text.
 * @param {string} userQuery - The user's prompt.
 * @param {string} systemPrompt - The system instruction.
 * @returns {Promise<string>} The generated text.
 */
async function callGeminiApi(userQuery, systemPrompt) {
    const apiKey = ""; // Leave blank
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
    };

    let response;
    let retries = 0;
    const maxRetries = 5;
    let delay = 1000; // Start with 1 second

    // Implement exponential backoff for retries
    while (retries < maxRetries) {
        try {
            response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                const candidate = result.candidates?.[0];
                if (candidate && candidate.content?.parts?.[0]?.text) {
                    return candidate.content.parts[0].text;
                } else {
                    throw new Error("Invalid response structure from API.");
                }
            } else if (response.status === 429 || response.status >= 500) {
                // Throttling or server error, wait and retry
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; // Double the delay
                retries++;
            } else {
                // Other client-side error
                const errorResult = await response.json();
                throw new Error(`API Error: ${errorResult.error?.message || response.statusText}`);
            }
        } catch (error) {
            if (retries >= maxRetries - 1) {
                // Last retry failed
                throw error;
            }
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
            retries++;
        }
    }
    // If loop finishes, all retries failed
    throw new Error("API call failed after multiple retries.");
}

/**
 * --- NEW: Handles the "Generate Artist Bio" button click ---
 */
async function handleGenerateBio() {
    if (!currentArtistBio) return;

    generateBioBtn.classList.add('hidden');
    bioLoader.classList.remove('hidden');
    bioError.classList.add('hidden');
    artistBioContent.innerHTML = '';

    const systemPrompt = "You are an art historian. Write a concise, engaging, one-paragraph biography (about 100 words) for the following artist, suitable for a gallery website. Focus on their style and impact.";
    const userQuery = `Generate a bio for: ${currentArtistBio}`;

    try {
        const bioText = await callGeminiApi(userQuery, systemPrompt);
        // Simple markdown-to-HTML (replaces newlines with <br>)
        artistBioContent.innerHTML = bioText.replace(/\n\n/g, '<p>').replace(/\n/g, '<br>');
    } catch (error) {
        console.error("Error generating artist bio:", error);
        bioError.textContent = "Failed to generate biography. Please try again later.";
        bioError.classList.remove('hidden');
        // Show button again so user can retry
        generateBioBtn.classList.remove('hidden');
    } finally {
        bioLoader.classList.add('hidden');
    }
}

/**
 * --- NEW: Handles the "Get Artistic Analysis" button click ---
 */
async function handleGenerateAnalysis() {
    if (!currentArtAnalysis) return;

    generateAnalysisBtn.classList.add('hidden');
    analysisLoader.classList.remove('hidden');
    analysisError.classList.add('hidden');
    artAnalysisContent.innerHTML = '';

    const systemPrompt = "You are an art critic. Provide a short, insightful analysis (about 100 words) of the following painting. Focus on the style, mood, and potential meaning.";
    const userQuery = `Analyze the painting "${currentArtAnalysis.title}" by ${currentArtAnalysis.artist}. Description: ${currentArtAnalysis.description}`;

    try {
        const analysisText = await callGeminiApi(userQuery, systemPrompt);
        // Simple markdown-to-HTML
        artAnalysisContent.innerHTML = analysisText.replace(/\n\n/g, '<p>').replace(/\n/g, '<br>');
    } catch (error) {
        console.error("Error generating art analysis:", error);
        analysisError.textContent = "Failed to generate analysis. Please try again later.";
        analysisError.classList.remove('hidden');
        // Show button again
        generateAnalysisBtn.classList.remove('hidden');
    } finally {
        analysisLoader.classList.add('hidden');
    }
}


// --- ORIGINAL FUNCTIONS (Modified) ---

/**
 * Shows the specified page and hides all others.
 * @param {string} pageId - The ID of the page element to show.
 */
function showPage(pageId) {
    allPages.forEach(p => p.classList.remove('active'));
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
    // Close mobile menu on navigation
    mobileNav.menu.classList.add('hidden');
    // Scroll to top
    window.scrollTo(0, 0);
}

/**
 * Updates the header navigation based on login state.
 */
function updateHeader() {
    if (isLoggedIn) {
        nav.login.classList.add('hidden');
        mobileNav.login.classList.add('hidden');

        nav.cart.classList.remove('hidden');
        nav.profile.classList.remove('hidden');
        nav.logout.classList.remove('hidden');
        mobileNav.cart.classList.remove('hidden');
        mobileNav.profile.classList.remove('hidden');
        mobileNav.logout.classList.remove('hidden');
    } else {
        nav.login.classList.remove('hidden');
        mobileNav.login.classList.remove('hidden');

        nav.cart.classList.add('hidden');
        nav.profile.classList.add('hidden');
        nav.logout.classList.add('hidden');
        mobileNav.cart.classList.add('hidden');
        mobileNav.profile.classList.add('hidden');
        mobileNav.logout.classList.add('hidden');
    }
    updateCartCount();
}

/**
 * Updates the cart item count bubble in the header.
 */
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    nav.cartCount.textContent = totalItems;
    mobileNav.cartCount.textContent = totalItems;
    nav.cartCount.classList.toggle('hidden', totalItems === 0);
    mobileNav.cartCount.classList.toggle('hidden', totalItems === 0);
}

/**
 * Simulates user login.
 */
function handleLogin(e) {
    e.preventDefault();
    // In a real app, you'd send this to a server for validation.
    isLoggedIn = true;
    updateHeader();
    showPage('home-page');
}

/**
 * Simulates user logout.
 */
function handleLogout(e) {
    e.preventDefault();
    isLoggedIn = false;
    cart = []; // Clear cart on logout
    updateHeader();
    renderCartPage(); // Update cart UI
    showPage('login-page');
}

/**
 * Renders all art pieces in the gallery grid.
 * @param {string | null} [categoryFilter=null] - The category to filter by (e.g., "abstract").
 * @param {string | null} [artistFilter=null] - The artist to filter by.
 */
function renderGallery(categoryFilter = null, artistFilter = null) {
    artworksGrid.innerHTML = ''; // Clear existing grid
    
    // --- NEW: Reset and hide AI bio section ---
    artistBioSection.classList.add('hidden');
    artistBioContent.innerHTML = '';
    bioError.classList.add('hidden');
    bioLoader.classList.add('hidden');
    generateBioBtn.classList.remove('hidden');
    currentArtistBio = null;

    let piecesToShow = artPieces;

    // --- LOGIC FOR ARTIST-SPECIFIC PAGE ---
    if (artistFilter) {
        piecesToShow = artPieces.filter(art => art.artist === artistFilter);
        galleryTitle.textContent = `Works by ${artistFilter}`;
        
        // --- NEW: Show and configure AI Bio section ---
        currentArtistBio = artistFilter;
        artistBioTitle.textContent = `Biography of ${artistFilter}`;
        artistBioSection.classList.remove('hidden');

        if (piecesToShow.length === 0) {
            artworksGrid.innerHTML = `<p class="text-gray-600 text-lg col-span-full text-center">No artworks found for this artist.</p>`;
            return;
        }
        
        // Group art by category
        const groupedArt = piecesToShow.reduce((acc, art) => {
            const category = art.category || 'other';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(art);
            return acc;
        }, {});

        // Render sections by category
        const sortedCategories = Object.keys(groupedArt).sort((a, b) => {
            const order = ['abstract', 'landscape', 'portrait', 'other'];
            return order.indexOf(a) - order.indexOf(b);
        });
        
        sortedCategories.forEach(category => {
            const heading = document.createElement('h2');
            heading.className = "gallery-section-heading";
            heading.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}s`; // e.g., "Abstracts"
            artworksGrid.appendChild(heading);
            
            groupedArt[category].forEach(art => {
                artworksGrid.appendChild(createArtCard(art));
            });
        });

    // --- EXISTING LOGIC for Category Filter or Full Gallery ---
    } else {
        if (categoryFilter) {
            piecesToShow = artPieces.filter(art => art.category === categoryFilter);
            galleryTitle.textContent = `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Collection`;
        } else {
            galleryTitle.textContent = 'Art Gallery';
        }

        if (piecesToShow.length === 0) {
            artworksGrid.innerHTML = `<p class="text-gray-600 text-lg col-span-full text-center">No artworks found matching your filter.</p>`;
            return;
        }

        piecesToShow.forEach(art => {
            artworksGrid.appendChild(createArtCard(art));
        });
    }
}

/**
 * Creates an art card element.
 * @param {object} art - The art piece object.
 * @returns {HTMLElement} The art card element.
 */
function createArtCard(art) {
    const artCard = document.createElement('div');
    artCard.className = 'art-card';
    artCard.innerHTML = `
        <img src="${art.imageUrl}" alt="${art.title}" onerror="this.src='https://placehold.co/600x400/ef4444/ffffff?text=Image+Error'; this.onerror=null;">
        <div class="art-card-content">
            <h3>${art.title}</h3>
            <p class="artist-name">by ${art.artist}</p>
            <div class="art-card-footer">
                <span class="price">$${art.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                <button data-id="${art.id}" class="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    // Add click event to the whole card to view details
    artCard.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart-btn')) {
            renderDetailsPage(art.id);
            showPage('details-page');
        }
    });
    return artCard;
}

/**
 * Renders the details page for a specific art piece.
 * @param {number} artId - The ID of the art to display.
 */
function renderDetailsPage(artId) {
    const art = artPieces.find(a => a.id === artId);
    if (!art) return;

    // --- NEW: Reset AI analysis section and set current art ---
    currentArtAnalysis = art;
    artAnalysisContent.innerHTML = '';
    analysisError.classList.add('hidden');
    analysisLoader.classList.add('hidden');
    generateAnalysisBtn.classList.remove('hidden');

    artDetailsContent.innerHTML = `
        <div class="art-details-image">
            <img src="${art.imageUrl}" alt="${art.title}" onerror="this.src='https://placehold.co/600x400/ef4444/ffffff?text=Image+Error'; this.onerror=null;">
        </div>
        <div class="art-details-info">
            <h1>${art.title}</h1>
            <p class="artist-name">by ${art.artist}</p>
            <span class="price">$${art.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
            <p class="description">${art.description}</p>
            <button data-id="${art.id}" class="add-to-cart-btn button button-primary button-lg">
                Add to Cart
            </button>
        </div>
    `;
}

/**
 * Adds an item to the cart and updates the UI.
 * @param {number} artId - The ID of the art to add.
 */
function addToCart(artId) {
    if (!isLoggedIn) {
        showPage('login-page');
        return;
    }

    const art = artPieces.find(a => a.id === artId);
    if (!art) return;

    const existingItem = cart.find(item => item.id === artId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...art, quantity: 1 });
    }

    updateCartCount();
    renderCartPage();
}

/**
 * Renders all items in the shopping cart page.
 */
function renderCartPage() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = ''; // Clear items
        emptyCartMessage.classList.remove('hidden');
        orderSummary.classList.add('hidden');
        cartItemsContainer.appendChild(emptyCartMessage); // Add empty message
        return;
    }

    emptyCartMessage.classList.add('hidden');
    orderSummary.classList.remove('hidden');
    cartItemsContainer.innerHTML = ''; // Clear items

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item-card';
        cartItemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" onerror="this.src='https://placehold.co/128x128/ef4444/ffffff?text=Image+Error'; this.onerror=null;">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p class="artist-name">by ${item.artist}</p>
                <p class="price">$${item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div class="cart-item-controls">
                <span>Qty:</span>
                <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="cart-item-quantity">
            </div>
            <div class="cart-item-summary">
                <p class="item-total">$${itemTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                <button data-id="${item.id}" class="remove-from-cart-btn">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // --- UPDATE: Tax removed from total calculation ---
    const total = subtotal;
    
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('summary-total');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Updates the quantity of an item in the cart.
 * @param {number} artId - The ID of the art to update.
 * @param {number} newQuantity - The new quantity.
 */
function updateCartQuantity(artId, newQuantity) {
    const item = cart.find(i => i.id === artId);
    if (item) {
        item.quantity = newQuantity;
        renderCartPage();
        updateCartCount();
    }
}

/**
 * Removes an item from the cart.
 * @param {number} artId - The ID of the art to remove.
 */
function removeFromCart(artId) {
    cart = cart.filter(item => item.id !== artId);
    renderCartPage();
    updateCartCount();
}

/**
 * --- NEW: Simulates checkout ---
 */
function handleCheckout() {
    cart = []; // Clear the cart
    updateCartCount();
    renderCartPage(); // Re-render cart to show it's empty
    showPage('checkout-page'); // Show the "Thank You" page
}

/**
 * Scrolls to a specific element on the home page.
 * @param {string} elementId - The ID of the element to scroll to.
 */
function scrollToHomeSection(elementId) {
    showPage('home-page');
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}


// --- EVENT LISTENERS ---

// Page Navigation
nav.logo.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(isLoggedIn ? 'home-page' : 'login-page');
});
nav.home.addEventListener('click', (e) => { e.preventDefault(); showPage('home-page'); });
nav.gallery.addEventListener('click', (e) => { e.preventDefault(); renderGallery(); showPage('gallery-page'); });
nav.cart.addEventListener('click', (e) => { e.preventDefault(); renderCartPage(); showPage('cart-page'); });
nav.login.addEventListener('click', (e) => { e.preventDefault(); showPage('login-page'); });
nav.logout.addEventListener('click', handleLogout);

// Mobile Page Navigation
mobileNav.home.addEventListener('click', (e) => { e.preventDefault(); showPage('home-page'); });
mobileNav.gallery.addEventListener('click', (e) => { e.preventDefault(); renderGallery(); showPage('gallery-page'); });
mobileNav.cart.addEventListener('click', (e) => { e.preventDefault(); renderCartPage(); showPage('cart-page'); });
mobileNav.login.addEventListener('click', (e) => { e.preventDefault(); showPage('login-page'); });
mobileNav.logout.addEventListener('click', handleLogout);

// Mobile Menu Toggle
mobileNav.button.addEventListener('click', () => {
    mobileNav.menu.classList.toggle('hidden');
});

// Login Form
loginForm.addEventListener('submit', handleLogin);

// "Sign up" link (just for demo)
document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault();
    // In a real app, this would show a registration form.
    alert('Registration is not functional in this demo.');
});

// Buttons inside pages
document.getElementById('home-browse-gallery').addEventListener('click', () => { renderGallery(); showPage('gallery-page'); });
document.getElementById('cart-browse-gallery').addEventListener('click', () => { renderGallery(); showPage('gallery-page'); });
document.getElementById('back-to-gallery').addEventListener('click', () => { 
    renderGallery(); 
    showPage('gallery-page'); 
});
// --- NEW: Checkout and Back to Home buttons ---
checkoutBtn.addEventListener('click', handleCheckout);
backToHomeBtn.addEventListener('click', () => showPage('home-page'));


// Event delegation for dynamic content (gallery and cart)
document.body.addEventListener('click', (e) => {
    // Find the closest add-to-cart-btn
    const addToCartBtn = e.target.closest('.add-to-cart-btn');
    if (addToCartBtn) {
        const artId = parseInt(addToCartBtn.dataset.id);
        addToCart(artId);
    }
    
    // Find the closest remove-from-cart-btn
    const removeFromCartBtn = e.target.closest('.remove-from-cart-btn');
    if (removeFromCartBtn) {
        const artId = parseInt(removeFromCartBtn.dataset.id);
        removeFromCart(artId);
    }
});

// Event delegation for cart quantity changes
document.body.addEventListener('change', (e) => {
    if (e.target.classList.contains('cart-item-quantity')) {
        const artId = parseInt(e.target.dataset.id);
        const newQuantity = parseInt(e.target.value);
        if (newQuantity > 0) {
            updateCartQuantity(artId, newQuantity);
        } else {
            removeFromCart(artId);
        }
    }
});

// Collection Cards
document.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        renderGallery(category, null);
        showPage('gallery-page');
    });
});

// Artist Filter Buttons
document.querySelectorAll('.artist-filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const artist = button.dataset.artist;
        renderGallery(null, artist);
        showPage('gallery-page');
    });
});

// --- NEW: AI Button Event Listeners ---
generateBioBtn.addEventListener('click', handleGenerateBio);
closeBioBtn.addEventListener('click', () => artistBioSection.classList.add('hidden'));
generateAnalysisBtn.addEventListener('click', handleGenerateAnalysis);

// Footer Links
footerLinks.gallery.addEventListener('click', (e) => {
    e.preventDefault();
    renderGallery();
    showPage('gallery-page');
});
footerLinks.newArrivals.addEventListener('click', (e) => {
    e.preventDefault();
    renderGallery();
    showPage('gallery-page');
});
footerLinks.collections.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToHomeSection('collections-section');
});
footerLinks.story.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToHomeSection('about-section');
});
footerLinks.artists.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToHomeSection('artists-section');
});
footerLinks.contact.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToHomeSection('help-section');
});

// --- INITIALIZATION ---
// Render gallery and cart on load to populate them, even if hidden
renderGallery(); 
renderCartPage();
// Update header based on initial logged-out state
updateHeader();
// Start on the login page
showPage('login-page');

