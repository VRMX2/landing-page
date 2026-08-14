// Willayas Delivery Pricing Data
const willayasData = [
    { id: "01", name: "أدرار", domicile: 1100, stopdesk: 750 },
    { id: "02", name: "الشلف", domicile: 700, stopdesk: 450 },
    { id: "03", name: "الأغواط", domicile: 800, stopdesk: 500 },
    { id: "04", name: "أم البواقي", domicile: 700, stopdesk: 450 },
    { id: "05", name: "باتنة", domicile: 700, stopdesk: 450 },
    { id: "06", name: "بجاية", domicile: 700, stopdesk: 450 },
    { id: "07", name: "بسكرة", domicile: 800, stopdesk: 500 },
    { id: "08", name: "بشار", domicile: 1000, stopdesk: 700 },
    { id: "09", name: "البليدة", domicile: 550, stopdesk: 400 },
    { id: "10", name: "البويرة", domicile: 600, stopdesk: 450 },
    { id: "11", name: "تمنراست", domicile: 1500, stopdesk: 1050 },
    { id: "12", name: "تبسة", domicile: 720, stopdesk: 450 },
    { id: "13", name: "تلمسان", domicile: 700, stopdesk: 450 },
    { id: "14", name: "تيارت", domicile: 700, stopdesk: 450 },
    { id: "15", name: "تيزي وزو", domicile: 600, stopdesk: 450 },
    { id: "16", name: "الجزائر", domicile: 400, stopdesk: 300 },
    { id: "17", name: "الجلفة", domicile: 800, stopdesk: 500 },
    { id: "18", name: "جيجل", domicile: 700, stopdesk: 450 },
    { id: "19", name: "سطيف", domicile: 700, stopdesk: 450 },
    { id: "20", name: "سعيدة", domicile: 730, stopdesk: 450 },
    { id: "21", name: "سكيكدة", domicile: 700, stopdesk: 450 },
    { id: "22", name: "سيدي بلعباس", domicile: 700, stopdesk: 450 },
    { id: "23", name: "عنابة", domicile: 700, stopdesk: 450 },
    { id: "24", name: "قالمة", domicile: 700, stopdesk: 450 },
    { id: "25", name: "قسنطينة", domicile: 700, stopdesk: 450 },
    { id: "26", name: "المدية", domicile: 600, stopdesk: 450 },
    { id: "27", name: "مستغانم", domicile: 700, stopdesk: 450 },
    { id: "28", name: "المسيلة", domicile: 700, stopdesk: 450 },
    { id: "29", name: "معسكر", domicile: 700, stopdesk: 450 },
    { id: "30", name: "ورقلة", domicile: 900, stopdesk: 550 },
    { id: "31", name: "وهران", domicile: 600, stopdesk: 450 },
    { id: "32", name: "البيض", domicile: 970, stopdesk: 700 },
    { id: "33", name: "إليزي", domicile: 1500, stopdesk: 1050 },
    { id: "34", name: "برج بوعريريج", domicile: 700, stopdesk: 450 },
    { id: "35", name: "بومرداس", domicile: 550, stopdesk: 400 },
    { id: "36", name: "الطارف", domicile: 730, stopdesk: 450 },
    { id: "37", name: "تندوف", domicile: 1100, stopdesk: 750 },
    { id: "38", name: "تيسمسيلت", domicile: 700, stopdesk: 450 },
    { id: "39", name: "الوادي", domicile: 900, stopdesk: 550 },
    { id: "40", name: "خنشلة", domicile: 700, stopdesk: 450 },
    { id: "41", name: "سوق أهراس", domicile: 730, stopdesk: 450 },
    { id: "42", name: "تيبازة", domicile: 530, stopdesk: 350 },
    { id: "43", name: "ميلة", domicile: 700, stopdesk: 450 },
    { id: "44", name: "عين الدفلى", domicile: 700, stopdesk: 450 },
    { id: "45", name: "النعامة", domicile: 930, stopdesk: 550 },
    { id: "46", name: "عين تموشنت", domicile: 700, stopdesk: 450 },
    { id: "47", name: "غرداية", domicile: 850, stopdesk: 500 },
    { id: "48", name: "غليزان", domicile: 700, stopdesk: 450 },
    { id: "49", name: "تيميمون", domicile: 1100, stopdesk: 750 },
    { id: "50", name: "برج باجي مختار", domicile: null, stopdesk: null },
    { id: "51", name: "أولاد جلال", domicile: 800, stopdesk: 500 },
    { id: "52", name: "بني عباس", domicile: 1000, stopdesk: 750 },
    { id: "53", name: "عين صالح", domicile: 1400, stopdesk: 950 },
    { id: "54", name: "عين قزام", domicile: null, stopdesk: null },
    { id: "55", name: "تقرت", domicile: 930, stopdesk: 550 },
    { id: "56", name: "جانت", domicile: 2100, stopdesk: 1500 },
    { id: "57", name: "المغير", domicile: 930, stopdesk: 550 },
    { id: "58", name: "المنيعة", domicile: 930, stopdesk: 550 }
];

// Initialize State
let currentPackagePrice = 1400;
let currentDeliveryPrice = 0; // will be updated when wilaya is selected
let selectedWilayaData = null;
let selectedDeliveryMethod = 'Domicile'; // default

// IMPORTANT: Replace this URL with your Google Apps Script Web App URL!
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkfN6DeST9YNBXrQH5XmIXjsetXwmC9xiv76SkbbPuarjySvz8hldhOEcilE9nDXN9ZQ/exec";

document.addEventListener('DOMContentLoaded', () => {
    // Populate Willayas Dropdown
    const willayaSelect = document.getElementById('willaya');
    willayasData.forEach(w => {
        const option = document.createElement('option');
        const fullTitle = `${w.id} - ${w.name}`;
        option.value = fullTitle;
        option.textContent = fullTitle;
        willayaSelect.appendChild(option);
    });

    // Handle Willaya change
    willayaSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        const id = selectedValue.split(" - ")[0];
        selectedWilayaData = willayasData.find(w => w.id === id);

        updateDeliveryPricesUI();
        updateSummary();
    });

    // Handle Form Submission
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', handleOrderSubmit);
});

function updateDeliveryPricesUI() {
    const stopdeskDisplay = document.getElementById('stopdeskPriceDisplay');
    const domicileDisplay = document.getElementById('domicilePriceDisplay');
    const container = document.getElementById('deliveryOptionsContainer');
    const msg = document.getElementById('deliveryNotAvailableMsg');
    const submitBtn = document.getElementById('submitBtn');

    if (!selectedWilayaData) return;

    if (selectedWilayaData.domicile === null || selectedWilayaData.stopdesk === null) {
        // Delivery not available
        container.style.opacity = "0.5";
        container.style.pointerEvents = "none";
        msg.classList.remove('hidden');
        submitBtn.disabled = true;
        stopdeskDisplay.textContent = "N/A";
        domicileDisplay.textContent = "N/A";
        currentDeliveryPrice = 0;
    } else {
        // Delivery available
        container.style.opacity = "1";
        container.style.pointerEvents = "auto";
        msg.classList.add('hidden');
        submitBtn.disabled = false;

        stopdeskDisplay.textContent = `+${selectedWilayaData.stopdesk} دج`;
        domicileDisplay.textContent = `+${selectedWilayaData.domicile} دج`;

        // Update current price based on selected method
        currentDeliveryPrice = selectedDeliveryMethod === 'Stopdesk' ? selectedWilayaData.stopdesk : selectedWilayaData.domicile;
    }
}

// Pricing Logic
function selectPackage(element, price) {
    document.querySelectorAll('.package-card').forEach(card => {
        card.classList.remove('selected');
        card.querySelector('input').checked = false;
    });
    element.classList.add('selected');
    element.querySelector('input').checked = true;

    currentPackagePrice = price;
    updateSummary();
}

function selectDeliveryMethod(element, method) {
    document.querySelectorAll('.delivery-card').forEach(card => {
        card.classList.remove('selected');
        card.querySelector('input').checked = false;
    });
    element.classList.add('selected');
    element.querySelector('input').checked = true;

    selectedDeliveryMethod = method;

    if (selectedWilayaData && selectedWilayaData.domicile !== null) {
        currentDeliveryPrice = method === 'Stopdesk' ? selectedWilayaData.stopdesk : selectedWilayaData.domicile;
    }

    updateSummary();
}

function updateSummary() {
    const subtotalDisplay = document.getElementById('subtotalDisplay');
    const deliveryDisplay = document.getElementById('deliveryDisplay');
    const totalDisplay = document.getElementById('totalDisplay');

    const total = currentPackagePrice + currentDeliveryPrice;

    subtotalDisplay.textContent = currentPackagePrice + " دج";

    if (!selectedWilayaData) {
        deliveryDisplay.textContent = "-- دج";
        totalDisplay.textContent = "-- دج";
    } else if (selectedWilayaData.domicile === null) {
        deliveryDisplay.textContent = "غير متوفر";
        totalDisplay.textContent = currentPackagePrice + " دج";
    } else {
        deliveryDisplay.textContent = currentDeliveryPrice + " دج";
        totalDisplay.textContent = total + " دج";
    }
}

// Form Submission - Netlify Forms
async function handleOrderSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoader = btn.querySelector('.btn-loader');

    if (!selectedWilayaData || selectedWilayaData.domicile === null) {
        showNotification("التوصيل غير متوفر لهذه الولاية.", "error");
        return;
    }

    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const willaya = document.getElementById('willaya').value;
    const baladiya = document.getElementById('baladiya').value.trim();

    if (!fullName || !phone || !willaya || !baladiya) {
        showNotification("عمر كامل المعلومات.", "error");
        return;
    }

    if (phone.length < 9) {
        showNotification("رقم الهاتف غالط.", "error");
        return;
    }

    const packageLabel = document.querySelector('input[name="package"]:checked').value === "1"
        ? "ساعة واحدة (1400 دج)"
        : "ساعتين (2700 دج)";
    const deliveryLabel = selectedDeliveryMethod === "Stopdesk" ? "مكتب التوصيل" : "توصيل للمنزل";
    const totalPrice = (currentPackagePrice + currentDeliveryPrice) + " دج";
    const deliveryPrice = currentDeliveryPrice + " دج";

    // Loading state
    btn.disabled = true;
    btnText.textContent = "جاري إرسال الطلبية...";
    btnLoader.classList.remove('hidden');

    // Submit to Netlify Forms using URLSearchParams (most compatible)
    const params = new URLSearchParams();
    params.append("form-name", "طلبيات");
    params.append("الاسم_واللقب", fullName);
    params.append("رقم_الهاتف", phone);
    params.append("الولاية", willaya);
    params.append("البلدية", baladiya);
    params.append("العرض", packageLabel);
    params.append("طريقة_التوصيل", deliveryLabel);
    params.append("سعر_التوصيل", deliveryPrice);
    params.append("المبلغ_الإجمالي", totalPrice);
    params.append("التاريخ", new Date().toLocaleString('ar-DZ'));

    // 1. Send to Netlify Forms (server-side backup)
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    }).catch(() => {});

    // 2. Save to localStorage (for local dashboard - orders.html)
    const orderRecord = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('ar-DZ'),
        fullName,
        phone,
        willaya,
        baladiya,
        package: packageLabel,
        deliveryMethod: deliveryLabel,
        deliveryPrice,
        totalPrice,
        status: "جديدة"
    };
    const savedOrders = JSON.parse(localStorage.getItem('habib_orders') || '[]');
    savedOrders.unshift(orderRecord);
    localStorage.setItem('habib_orders', JSON.stringify(savedOrders));

    // Always show success to user (Netlify handles it on their servers)
    await new Promise(resolve => setTimeout(resolve, 700));
    showNotification("سجلنا طلبيتك بنجاح! شكراً على ثقتك ❤️", "success");
    e.target.reset();

    // Reset state
    selectPackage(document.querySelector('.package-card'), 1400);
    selectedWilayaData = null;
    currentDeliveryPrice = 0;
    document.getElementById('willaya').value = "";
    updateDeliveryPricesUI();
    updateSummary();

    btn.disabled = false;
    btnText.textContent = "تأكيد الطلبية الآن";
    btnLoader.classList.add('hidden');
}

// Notification System
function showNotification(message, type = "success") {
    const notif = document.getElementById('notification');
    notif.textContent = message;

    // Clear previous classes
    notif.className = "notification";
    notif.classList.add(type);

    // Show
    setTimeout(() => {
        notif.classList.add('show');
    }, 10);

    // Hide after 4 seconds
    setTimeout(() => {
        notif.classList.remove('show');
    }, 4000);
}

// Sticky Buy Button Logic
function scrollToForm() {
    document.querySelector('.order-section').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // Other logic was already initialized above...

    // Intersection Observer for Sticky Button
    const formSection = document.querySelector('.order-section');
    const stickyBtn = document.getElementById('stickyBuyBtn');

    if (formSection && stickyBtn) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the form is visible on screen, hide the sticky button
                if (entry.isIntersecting) {
                    stickyBtn.style.opacity = '0';
                    stickyBtn.style.pointerEvents = 'none';
                } else {
                    stickyBtn.style.opacity = '1';
                    stickyBtn.style.pointerEvents = 'auto';
                }
            });
        }, { threshold: 0.1 }); // triggers when 10% of form is visible

        observer.observe(formSection);
    }
});
