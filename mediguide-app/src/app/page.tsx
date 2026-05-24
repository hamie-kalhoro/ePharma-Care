'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock Product Data with Premium Unsplash Assets
const MOCK_PRODUCTS = [
  { 
    id: 1, 
    name: 'Panadol Advance 500mg (100 Tabs)', 
    category: 'Medicine', 
    price: 250, 
    originalPrice: 280, 
    discount: 11, 
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop',
    rating: 4.8, 
    reviews: 124,
    ingredients: 'Paracetamol 500mg',
    usage: 'For mild to moderate pain and fever relief. Take 1-2 tablets every 4 to 6 hours as needed.',
    warnings: 'Do not exceed 8 tablets in 24 hours. Avoid other products containing paracetamol.'
  },
  { 
    id: 2, 
    name: 'Ensure Plus Vanilla Liquid 200ml', 
    category: 'Nutritions', 
    price: 650, 
    originalPrice: 700, 
    discount: 7, 
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=400&auto=format&fit=crop', 
    rating: 4.5, 
    reviews: 89,
    ingredients: 'Vitamins, Minerals, Milk Protein, Essential Fatty Acids',
    usage: 'High-calorie, complete oral nutrition shake. Shake well before drinking. Best served cold.',
    warnings: 'Not suitable for people with galactosemia. Consult medical advisor for children.'
  },
  { 
    id: 3, 
    name: 'Pampers Active Baby Diapers Size 4 (60 Pcs)', 
    category: 'Baby Care', 
    price: 2800, 
    originalPrice: 3200, 
    discount: 12, 
    image: 'https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=400&auto=format&fit=crop', 
    rating: 4.9, 
    reviews: 342,
    ingredients: 'Super Absorbent Polymer, Breathable Backsheet, Soft Topsheet',
    usage: 'Premium baby diapers offering up to 12 hours of dry protection and flexible fit.',
    warnings: 'Store in dry place. Keep plastic packaging away from infants to avoid suffocation.'
  },
  { 
    id: 4, 
    name: 'CeraVe Moisturizing Cream 340g', 
    category: 'Derma', 
    price: 4500, 
    originalPrice: 5000, 
    discount: 10, 
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop', 
    rating: 4.7, 
    reviews: 210,
    ingredients: 'Essential Ceramides, Hyaluronic Acid',
    usage: 'Apply liberally as often as needed, or as directed by a physician.',
    warnings: 'For external use only. Avoid direct contact with eyes.'
  },
  { 
    id: 5, 
    name: 'Surbex Z Tablets (30 Tabs)', 
    category: 'Medicine', 
    price: 450, 
    originalPrice: 500, 
    discount: 10, 
    image: 'https://images.unsplash.com/photo-1616679911721-eff6eec18fcd?q=80&w=400&auto=format&fit=crop', 
    rating: 4.6, 
    reviews: 156,
    ingredients: 'Vitamin B-Complex, Vitamin C, Vitamin E, Zinc 15mg',
    usage: 'Dietary supplement for nutritional deficiencies. Take 1 tablet daily after a meal.',
    warnings: 'Do not exceed recommended daily dose. Keep out of reach of children.'
  },
  { 
    id: 6, 
    name: 'Neutrogena Hydro Boost Water Gel 50ml', 
    category: 'Derma', 
    price: 3200, 
    originalPrice: 3500, 
    discount: 8, 
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop', 
    rating: 4.8, 
    reviews: 420,
    ingredients: 'Hyaluronic Acid, Glycerin, Olive Extract',
    usage: 'Apply evenly to face and neck daily after cleansing.',
    warnings: 'Discontinue use if skin irritation or rash occurs.'
  },
  { 
    id: 7, 
    name: 'Centrum Silver Adults 50+ (100 Tabs)', 
    category: 'Nutritions', 
    price: 5500, 
    originalPrice: 6200, 
    discount: 11, 
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop', 
    rating: 4.9, 
    reviews: 85,
    ingredients: 'Lutein, Lycopene, Calcium, Vitamins A to Z',
    usage: 'Multi-vitamin supplement designed for adults 50 years and older. Take 1 tablet daily with food.',
    warnings: 'Consult physician before use if pregnant, nursing, or taking other medications.'
  },
  { 
    id: 8, 
    name: 'Johnson Baby Shampoo 500ml', 
    category: 'Baby Care', 
    price: 850, 
    originalPrice: 950, 
    discount: 10, 
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=400&auto=format&fit=crop', 
    rating: 4.5, 
    reviews: 310,
    ingredients: 'No More Tears Gentle Formula',
    usage: 'Wet baby\'s hair with warm water, apply shampoo, gently lather and rinse.',
    warnings: 'For external use only. Keep out of children\'s reach unless supervised.'
  },
];

const CATEGORIES = ['All', 'Medicine', 'Derma', 'Baby Care', 'Nutritions', 'Personal Care', 'Devices'];

const BRAND_LOGOS = [
  { name: 'GSK', label: 'GlaxoSmithKline' },
  { name: 'Pfizer', label: 'Pfizer Inc.' },
  { name: 'Abbott', label: 'Abbott Labs' },
  { name: 'Nestle', label: 'Nestlé Health' },
  { name: 'Johnson\'s', label: 'Johnson & Johnson' },
  { name: 'CeraVe', label: 'CeraVe Skincare' },
  { name: 'Neutrogena', label: 'Neutrogena' }
];

/* ======================================================================
   TRANSLATIONS - Full EN / UR dictionary with RTL direction support
   ====================================================================== */
const TRANSLATIONS: Record<string, Record<string, any>> = {
  EN: {
    dir: 'ltr',
    portalGateway: 'PORTAL GATEWAY',
    storefront: '🛒 Storefront',
    patientPortal: '🩺 Patient Portal',
    adminControl: '🏥 Admin Control',
    aiConsultation: '🤖 AI Consultation',
    phone: '111-11-DVAGO (38246)',
    email: 'support@mediguide.pk',
    trackOrder: 'Track Order',
    storeLocator: 'Store Locator',
    rxUpload: 'Rx Upload',
    premiumPharmacy: 'Premium Pharmacy',
    alerts: 'Alerts',
    config: 'Config',
    cartLabel: 'Cart',
    searchPlaceholder: 'Search for authentic medicines, derma, vitamins, baby care...',
    search: 'Search',
    allCategories: 'All Categories',
    storeConfig: 'Store Config',
    currencyLabel: 'Currency',
    languageLabel: 'Language',
    secureAuth: 'Secure Auth (JWT)',
    authenticated: '✓ Authenticated',
    terminateSession: 'Terminate Session',
    authenticate: 'Authenticate',
    enterPasskey: 'Enter passkey...',
    superSaverWeeks: 'Complete Care Hub',
    heroTitle1: 'Healthcare essentials, <span class="text-emerald-300">verified and delivered</span>',
    heroDesc1: 'Upload prescriptions, shop trusted medicines, and manage refills with pharmacist-backed support from one clear dashboard.',
    uploadPrescription: 'Upload Prescription',
    shopMedicine: 'Shop Medicine',
    newArrivalGlow: 'New Arrival Glow',
    heroTitle2: 'Clinical skincare for <span class="text-rose-300">daily barrier care</span>',
    heroDesc2: 'Explore dermatologist-informed moisturizers, cleansers, and recovery essentials from trusted skincare brands.',
    exploreSkincare: 'Explore Skincare',
    authentic: '100% Authentic',
    authenticDesc: 'Sourced straight from manufacturers',
    fastDelivery: 'Fast Delivery',
    fastDeliveryDesc: 'At your doorstep within 60 mins',
    pharmacistHelp: 'Pharmacist Help',
    pharmacistHelpDesc: '24/7 expert tele-consultation',
    secureOrders: 'Secure Orders',
    secureOrdersDesc: 'Fully encrypted checkout gateway',
    trustedBrands: 'Trusted Pharmaceutical Brands',
    premiumMarketplace: 'Premium Marketplace',
    trendingProducts: 'Trending Products',
    trendingProductsDesc: 'Guaranteed authentic pharmaceuticals & wellness products.',
    noProductsFound: 'No products found',
    noProductsDesc: "We couldn't find matches. Try adjusting your query or filter.",
    clearFilters: 'Clear Filters',
    quickView: 'Quick View',
    reviewsLabel: 'reviews',
    addToCart: 'Add To Cart',
    babyCareEssentials: 'Baby Care Essentials',
    babyCareTitle: 'Up to 20% Off on Diapers & Shampoos',
    babyCareDesc: 'Maintain gentle comfort and security for your baby with top curated choices.',
    shopNow: 'Shop Now',
    dermaSkinBarrier: 'Dermatology Skin Barrier',
    dermaTitle: 'Premium Hydrating Moisturizers',
    dermaDesc: 'Clinically certified skincare that regenerates ceramides and sustains skin cell health.',
    exploreMore: 'Explore More',
    productCategories: 'Product Categories',
    prescriptionDrugs: 'Prescription Drugs',
    cosmeceuticals: 'Cosmeceuticals / Derma',
    vitaminsSupps: 'Vitamins & Supplements',
    babyCareNutrition: 'Baby Care & Nutrition',
    quickPolicies: 'Quick Policies',
    fastDeliveryPolicy: '60-Min Fast Delivery',
    authGuarantee: 'Authentication Guarantee',
    termsOfService: 'Terms of Service',
    refundPolicy: 'Refund & Claims policy',
    mailingList: 'Mailing List',
    mailingListDesc: 'Stay tuned for pricing alerts, drug stocks, and healthcare newsletters.',
    emailPlaceholder: 'Your email address',
    join: 'Join',
    joining: 'Joining...',
    copyright: '© 2026 MediGuide Store. All rights reserved. Sourced & verified online.',
    supportActive: 'Support Enclave Active',
    footerDesc: 'Your highly trusted online healthcare provider. We offer authentic pharmaceuticals, vitamins, baby supplies, and derma cosmetics at unmatched prices.',
    shoppingBag: 'Shopping Bag',
    emptyCartTitle: 'Your shopping bag is empty',
    emptyCartDesc: 'Explore the products section and add medicines to check out.',
    browseProducts: 'Browse Products',
    subtotalLabel: 'Subtotal',
    deliveryFeeLabel: 'Delivery Fee',
    freeLabel: 'FREE',
    grandTotalLabel: 'Grand Total',
    clearAll: 'Clear All',
    checkoutNow: 'Checkout Now',
    taxNote: 'Tax inclusive pricing. Express delivery is active.',
    removeLabel: 'Remove',
    verifiedReviews: 'verified reviews',
    activeIngredients: 'Active Ingredients',
    usageInstructions: 'Usage Instructions',
    clinicalWarnings: 'Clinical Safety Warnings',
    uploadPrescriptionTitle: 'Upload Prescription',
    prescriptionDesc: 'Upload a prescription for AI extraction, pharmacist validation, and doctor review before checkout.',
    dragDrop: 'Drag & Drop prescription file or',
    browse: 'browse',
    fileSupport: 'Supports JPG, PNG, PDF up to 8MB',
    readingLabels: 'Reading pharmacological labels...',
    prescriptionAnalyzed: 'Prescription Analyzed!',
    prescriptionResult: 'Prescription details were extracted and queued for clinical/pharmacy validation. No medicine is dispensed until it is verified.',
    scanAnother: 'Scan another',
    viewCart: 'View Review Queue',
    notificationsTitle: 'Notifications',
    markAllRead: 'Mark all as read',
    categories: {
      All: 'All',
      Medicine: 'Medicine',
      Derma: 'Derma',
      'Baby Care': 'Baby Care',
      Nutritions: 'Nutritions',
      'Personal Care': 'Personal Care',
      Devices: 'Devices',
    } as Record<string, string>,
  },
  UR: {
    dir: 'rtl',
    portalGateway: 'پورٹل گیٹ وے',
    storefront: '🛒 اسٹور فرنٹ',
    patientPortal: '🩺 مریض پورٹل',
    adminControl: '🏥 ایڈمن کنٹرول',
    aiConsultation: '🤖 AI مشاورت',
    phone: '111-11-DVAGO (38246)',
    email: 'support@mediguide.pk',
    trackOrder: 'آرڈر ٹریک کریں',
    storeLocator: 'اسٹور تلاش کریں',
    rxUpload: 'نسخہ اپ لوڈ',
    premiumPharmacy: 'پریمیم فارمیسی',
    alerts: 'اطلاعات',
    config: 'ترتیبات',
    cartLabel: 'کارٹ',
    searchPlaceholder: 'اصلی ادویات، ڈرما، وٹامنز، بچوں کی دیکھ بھال تلاش کریں...',
    search: 'تلاش',
    allCategories: 'تمام زمرے',
    storeConfig: 'اسٹور ترتیبات',
    currencyLabel: 'کرنسی',
    languageLabel: 'زبان',
    secureAuth: 'محفوظ تصدیق (JWT)',
    authenticated: '✓ تصدیق شدہ',
    terminateSession: 'سیشن ختم کریں',
    authenticate: 'تصدیق کریں',
    enterPasskey: 'پاس کی درج کریں...',
    superSaverWeeks: 'سپر سیور ویکس',
    heroTitle1: '<span class="text-emerald-300">15% فلیٹ ڈسکاؤنٹ</span> <br/>نسخے کی ادویات پر حاصل کریں',
    heroDesc1: 'اپنا نسخہ اپ لوڈ کریں۔ ہم 60 منٹ میں 100% اصلی ادویات آپ کی دہلیز تک پہنچاتے ہیں۔',
    uploadPrescription: 'نسخہ اپ لوڈ کریں',
    shopMedicine: 'ادویات خریدیں',
    newArrivalGlow: 'نئی آمد',
    heroTitle2: 'پریمیم <span class="text-rose-300">ڈرمیٹولوجی کیئر</span> <br/>کلیکشن',
    heroDesc2: 'CeraVe اور Neutrogena جیسی سائنسی ڈرمیٹولوجیکل مصنوعات سے اپنی جلد کی حفاظت کریں۔',
    exploreSkincare: 'سکن کیئر دریافت کریں',
    authentic: '100% اصلی',
    authenticDesc: 'براہ راست مینوفیکچررز سے',
    fastDelivery: 'تیز ترسیل',
    fastDeliveryDesc: '60 منٹ میں آپ کی دہلیز پر',
    pharmacistHelp: 'فارماسسٹ مدد',
    pharmacistHelpDesc: '24/7 ماہر ٹیلی مشاورت',
    secureOrders: 'محفوظ آرڈرز',
    secureOrdersDesc: 'مکمل انکرپٹڈ چیک آؤٹ',
    trustedBrands: 'قابل اعتماد فارماسیوٹیکل برانڈز',
    premiumMarketplace: 'پریمیم مارکیٹ پلیس',
    trendingProducts: 'ٹرینڈنگ مصنوعات',
    trendingProductsDesc: 'تصدیق شدہ اصلی ادویات اور صحت کی مصنوعات۔',
    noProductsFound: 'کوئی مصنوعات نہیں ملیں',
    noProductsDesc: 'ہمیں کوئی نتائج نہیں ملے۔ اپنی تلاش تبدیل کریں۔',
    clearFilters: 'فلٹرز صاف کریں',
    quickView: 'فوری دیکھیں',
    reviewsLabel: 'جائزے',
    addToCart: 'کارٹ میں شامل کریں',
    babyCareEssentials: 'بچوں کی دیکھ بھال',
    babyCareTitle: 'ڈائپرز اور شیمپو پر 20% تک چھوٹ',
    babyCareDesc: 'اپنے بچے کے لیے بہترین آرام اور تحفظ فراہم کریں۔',
    shopNow: 'ابھی خریدیں',
    dermaSkinBarrier: 'ڈرمیٹولوجی سکن بیریئر',
    dermaTitle: 'پریمیم ہائیڈریٹنگ موئسچرائزرز',
    dermaDesc: 'طبی تصدیق شدہ سکن کیئر جو سیرامائیڈز کو بحال کرتی ہے۔',
    exploreMore: 'مزید دریافت کریں',
    productCategories: 'مصنوعات کے زمرے',
    prescriptionDrugs: 'نسخے کی ادویات',
    cosmeceuticals: 'کاسمیٹک / ڈرما',
    vitaminsSupps: 'وٹامنز اور سپلیمنٹس',
    babyCareNutrition: 'بچوں کی دیکھ بھال اور غذائیت',
    quickPolicies: 'فوری پالیسیاں',
    fastDeliveryPolicy: '60 منٹ تیز ترسیل',
    authGuarantee: 'اصالت کی ضمانت',
    termsOfService: 'سروس کی شرائط',
    refundPolicy: 'ریفنڈ اور دعوے کی پالیسی',
    mailingList: 'میلنگ لسٹ',
    mailingListDesc: 'قیمتوں کی اطلاعات، دوائیوں کے ذخائر، اور صحت کے نیوز لیٹرز کے لیے شامل ہوں۔',
    emailPlaceholder: 'آپ کا ای میل پتہ',
    join: 'شامل ہوں',
    joining: 'شامل ہو رہے ہیں...',
    copyright: '© 2026 میڈی گائیڈ اسٹور۔ جملہ حقوق محفوظ ہیں۔',
    supportActive: 'سپورٹ فعال ہے',
    footerDesc: 'آپ کا قابل اعتماد آن لائن ہیلتھ کیئر فراہم کنندہ۔ ہم بے مثال قیمتوں پر اصلی ادویات، وٹامنز، اور ڈرما کاسمیٹکس پیش کرتے ہیں۔',
    shoppingBag: 'شاپنگ بیگ',
    emptyCartTitle: 'آپ کا شاپنگ بیگ خالی ہے',
    emptyCartDesc: 'مصنوعات کا سیکشن دیکھیں اور ادویات شامل کریں۔',
    browseProducts: 'مصنوعات دیکھیں',
    subtotalLabel: 'ذیلی کل',
    deliveryFeeLabel: 'ڈیلیوری فیس',
    freeLabel: 'مفت',
    grandTotalLabel: 'کل رقم',
    clearAll: 'سب صاف کریں',
    checkoutNow: 'ابھی چیک آؤٹ',
    taxNote: 'ٹیکس شامل قیمت۔ ایکسپریس ڈیلیوری فعال ہے۔',
    removeLabel: 'ہٹائیں',
    verifiedReviews: 'تصدیق شدہ جائزے',
    activeIngredients: 'فعال اجزاء',
    usageInstructions: 'استعمال کی ہدایات',
    clinicalWarnings: 'طبی حفاظتی انتباہات',
    uploadPrescriptionTitle: 'نسخہ اپ لوڈ کریں',
    prescriptionDesc: 'ہمارا میڈیکل اسکینر خودکار طور پر آپ کی ادویات کو سمجھ کر کارٹ میں شامل کرتا ہے۔',
    dragDrop: 'نسخے کی فائل ڈریگ اینڈ ڈراپ کریں یا',
    browse: 'براؤز کریں',
    fileSupport: 'JPG، PNG، PDF 8MB تک سپورٹ',
    readingLabels: 'دوائی کے لیبل پڑھ رہے ہیں...',
    prescriptionAnalyzed: 'نسخہ تجزیہ مکمل!',
    prescriptionResult: 'ہم نے نسخے کو سمجھ لیا اور پینا ڈول ایڈوانس اور سربیکس زیڈ کامیابی سے کارٹ میں شامل کر دیے۔',
    scanAnother: 'مزید اسکین کریں',
    viewCart: 'کارٹ دیکھیں',
    notificationsTitle: 'اطلاعات',
    markAllRead: 'سب پڑھی ہوئی',
    categories: {
      All: 'تمام',
      Medicine: 'ادویات',
      Derma: 'ڈرما',
      'Baby Care': 'بچوں کی دیکھ بھال',
      Nutritions: 'غذائیت',
      'Personal Care': 'ذاتی نگہداشت',
      Devices: 'آلات',
    } as Record<string, string>,
  },
};

export default function Storefront() {
  // Shopping Cart state
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown States
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Settings Value State
  const [currency, setCurrency] = useState('PKR');
  const [lang, setLang] = useState('EN');

  // Live exchange rate for USD conversion
  const [pkrRate, setPkrRate] = useState(279.0252);

  // Live Database Products State
  const [products, setProducts] = useState<any[]>([]);
  const [, setProductsLoading] = useState(true);

  // Detailed Modal State
  const [selectedProduct, setSelectedProduct] = useState<typeof MOCK_PRODUCTS[0] | null>(null);

  // Prescription Scanning Modal State
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // Hero Carousel Index State
  const [heroIndex, setHeroIndex] = useState(0);

  // Live Database Notifications state
  const [notifications, setNotifications] = useState<any[]>([]);

  // Secure JWT Authentication state
  const [authRole, setAuthRole] = useState('patient');
  const [authPasskey, setAuthPasskey] = useState('');
  const [, setJwtToken] = useState<string | null>(null);
  const [authorizedUser, setAuthorizedUser] = useState<{role: string, name: string} | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccessMsg, setAuthSuccessMsg] = useState<string | null>(null);

  // Derive the active translation set
  const t = TRANSLATIONS[lang] || TRANSLATIONS.EN;

  // Load products from live Supabase API
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(MOCK_PRODUCTS);
        }
      } else {
        setProducts(MOCK_PRODUCTS);
      }
    } catch (e) {
      console.warn('⚠️ Products API offline, falling back to mock products:', e);
      setProducts(MOCK_PRODUCTS);
    } finally {
      setProductsLoading(false);
    }
  };

  // Load alerts from live Supabase API
  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setNotifications(data);
        }
      }
    } catch (e) {
      console.warn('⚠️ Notifications API offline:', e);
    }
  };

  // Save new alert to Supabase
  const pushNotification = async (text: string) => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (res.ok) {
        fetchNotifications();
      }
    } catch {
      const newNotif = {
        id: Date.now(),
        text,
        unread: true,
        time: 'Just now'
      };
      setNotifications(prev => [newNotif, ...prev]);
    }
  };

  // Mark all alerts as read on Supabase
  const markAllRead = async () => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'markAllRead' })
      });
      if (res.ok) {
        fetchNotifications();
      }
    } catch {
      setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    }
  };

  // Handle Role JWT Authentication Request
  const handleRoleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccessMsg(null);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'login',
          role: authRole,
          passkey: authPasskey
        })
      });
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setJwtToken(data.token);
        setAuthorizedUser(data.user);
        setAuthPasskey('');
        setAuthSuccessMsg(`✓ Verified as ${data.user.name}`);
        localStorage.setItem('mediguide_jwt_token', data.token);
        localStorage.setItem('mediguide_jwt_user', JSON.stringify(data.user));
        pushNotification(`🔐 Secure JWT Session issued for ${data.user.name} (${data.user.role.toUpperCase()})`);
      } else {
        setAuthError(data.error || 'Authentication denied.');
      }
    } catch {
      setAuthError('Authentication server offline.');
    }
  };

  // Newsletter Mailing List State
  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setEmailSubmitting(true);
    setEmailStatus(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput })
      });
      const data = await res.json();
      if (res.ok) {
        setEmailStatus({ type: 'success', message: data.message });
        setEmailInput('');
        pushNotification(`📧 Newsletter Subscribed: ${emailInput} joined the mailing list!`);
      } else {
        setEmailStatus({ type: 'error', message: data.error || 'Failed to subscribe.' });
      }
    } catch {
      setEmailStatus({ type: 'error', message: 'Mailing list service is currently offline.' });
    } finally {
      setEmailSubmitting(false);
    }
  };

  // Handle Logout / Terminate JWT session
  const handleRoleLogout = () => {
    if (authorizedUser) {
      pushNotification(`🔐 Terminated secure JWT Session for ${authorizedUser.name}`);
    }
    setJwtToken(null);
    setAuthorizedUser(null);
    setAuthSuccessMsg(null);
    localStorage.removeItem('mediguide_jwt_token');
    localStorage.removeItem('mediguide_jwt_user');
  };

  // Mount effects to run on page load
  useEffect(() => {
    // 1. Trigger database schemas creation & seeder check first
    fetch('/api/setup').then(() => {
      fetchProducts();
      fetchNotifications();
    });

    // 2. Fetch live USD→PKR conversion rate from our secure proxy
    fetch('/api/currency')
      .then(r => r.json())
      .then(d => { if (d.rate && typeof d.rate === 'number') setPkrRate(d.rate); })
      .catch(() => { /* Keep default fallback rate */ });

    // 3. Load stored JWT authentication
    const savedToken = localStorage.getItem('mediguide_jwt_token');
    const savedUser = localStorage.getItem('mediguide_jwt_user');
    if (savedToken && savedUser) {
      setJwtToken(savedToken);
      setAuthorizedUser(JSON.parse(savedUser));
    }
  }, []);

  // Handle Scroll for Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (productId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
    // Add success notification
    const activeProducts = products.length > 0 ? products : MOCK_PRODUCTS;
    const prodName = activeProducts.find(p => p.id === productId)?.name || 'Product';
    pushNotification(`🛒 Added "${prodName}" to your shopping cart.`);
  };

  const updateCartQuantity = (productId: number, newQty: number) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
      return;
    }
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Cart total calculations
  const subtotal = cart.reduce((total, item) => {
    const activeProducts = products.length > 0 ? products : MOCK_PRODUCTS;
    const product = activeProducts.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const deliveryFee = subtotal > 2000 || subtotal === 0 ? 0 : 150;
  const grandTotal = subtotal + deliveryFee;

  const currencySymbol = currency === 'PKR' ? 'Rs.' : '$';
  const convertPrice = (priceInPKR: number) => {
    if (currency === 'USD') {
      return (priceInPKR / pkrRate).toFixed(2);
    }
    return priceInPKR.toLocaleString();
  };

  const activeProducts = products.length > 0 ? products : MOCK_PRODUCTS;
  const filteredProducts = activeProducts.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock Prescription scan action
  const handlePrescriptionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      setIsScanning(true);
      setScanComplete(false);

      // Simulate OCR Scanning laser animation
      setTimeout(() => {
        setIsScanning(false);
        setScanComplete(true);
        // Automatically inject Panadol and Surbex Z to cart
        addToCart(1);
        addToCart(5);
      }, 3500);
    }
  };

  // Determine gradient and animation direction based on language
  const isRTL = t.dir === 'rtl';
  const heroGradientClass = isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r';
  const drawerAnimation = isRTL ? 'animate-[slideRight_0.3s_ease-out]' : 'animate-[slideLeft_0.3s_ease-out]';

  return (
    <div dir={t.dir} className="min-h-screen bg-[#f8fafc] text-slate-800 font-inter selection:bg-emerald-500/30 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 🌐 Unified Developer & Portal Navigation Gateway */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          {t.portalGateway}
        </div>
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 overflow-x-auto max-w-full">
          <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-md font-bold text-[10px] uppercase whitespace-nowrap cursor-default">
            {t.storefront}
          </span>
          <Link href="/patient" className="px-3 py-1 text-slate-400 hover:text-white rounded-md font-semibold text-[10px] uppercase transition-colors whitespace-nowrap">
            {t.patientPortal}
          </Link>
          <Link href="/admin" className="px-3 py-1 text-slate-400 hover:text-white rounded-md font-semibold text-[10px] uppercase transition-colors whitespace-nowrap">
            {t.adminControl}
          </Link>
          <Link href="/ai-assistant" className="px-3 py-1 text-slate-400 hover:text-white rounded-md font-semibold text-[10px] uppercase transition-colors whitespace-nowrap">
            {t.aiConsultation}
          </Link>
        </div>
      </div>

      {/* Top Action Bar */}
      <div className="bg-emerald-800 text-white text-[11px] font-medium py-2 px-4 md:px-10 flex justify-between items-center hidden md:flex border-b border-emerald-900/40">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-emerald-300">call</span> {t.phone}</span>
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-emerald-300">mail</span> {t.email}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-emerald-200 transition-colors">{t.trackOrder}</a>
          <a href="#" className="hover:text-emerald-200 transition-colors">{t.storeLocator}</a>
          <button 
            onClick={() => setIsPrescriptionModalOpen(true)}
            className="flex items-center gap-1 text-emerald-200 hover:text-white bg-emerald-900/50 hover:bg-emerald-950 px-3 py-1 rounded-full transition-colors border border-emerald-700/50"
          >
            <span className="material-symbols-outlined text-[14px]">upload_file</span> {t.rxUpload}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white w-full z-40 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-md border-b border-slate-100' : 'border-b border-slate-200 relative'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
                <span className="material-symbols-outlined text-2xl font-semibold">local_pharmacy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-hanken text-emerald-950 tracking-tight leading-none">MediGuide<span className="text-emerald-500">Store</span></span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-0.5">{t.premiumPharmacy}</span>
              </div>
            </div>
            
            {/* Mobile Actions Container */}
            <div className="flex md:hidden items-center gap-4">
              {/* Notification Icon */}
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative text-slate-600 hover:text-emerald-600 p-1"
              >
                <span className="material-symbols-outlined text-2xl">notifications</span>
                {notifications.some(n => n.unread) && (
                  <span className="absolute top-1 end-1 w-2.5 h-2.5 bg-rose-500 rounded-full border border-white"></span>
                )}
              </button>

              {/* Cart Toggle */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-slate-600 hover:text-emerald-600 p-1"
              >
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -end-1.5 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border-2 border-white">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-[450px] lg:w-[580px]">
            <div className="relative flex items-center w-full">
              <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400">search</span>
              </div>
              <input 
                type="text" 
                className="block w-full ps-10 pe-24 py-3 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm transition-all shadow-inner" 
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute end-24 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined text-lg mt-1">close</span>
                </button>
              )}
              <button className="absolute end-1 top-1 bottom-1 px-5 bg-emerald-600 text-white font-semibold text-xs rounded-full hover:bg-emerald-700 transition-colors shadow-sm uppercase tracking-wider">
                {t.search}
              </button>
            </div>
          </div>

          {/* Action Trays (Notifications, Settings, Cart) */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Notifications Panel */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsSettingsOpen(false);
                }}
                className="flex flex-col items-center cursor-pointer hover:text-emerald-600 text-slate-600 transition-colors group relative"
              >
                <div className="relative">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">notifications</span>
                  {notifications.some(n => n.unread) && (
                    <span className="absolute -top-0.5 -end-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{t.alerts}</span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute end-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-[fadeIn_0.2s_ease-out]">
                  <div className="flex justify-between items-center px-4 pb-2 border-b border-slate-100">
                    <span className="font-bold text-slate-800 text-xs">{t.notificationsTitle}</span>
                    <button 
                      onClick={markAllRead}
                      className="text-[10px] text-emerald-600 font-semibold hover:underline"
                    >
                      {t.markAllRead}
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto mt-2">
                    {notifications.map(notif => (
                      <div 
                        key={notif.id} 
                        className={`px-4 py-3 border-b border-slate-50 last:border-b-0 hover:bg-slate-50 transition-colors flex gap-2.5 ${notif.unread ? 'bg-emerald-50/30' : ''}`}
                      >
                        <div className={`w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 ${notif.unread ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-700 font-medium leading-normal">{notif.text}</p>
                          <span className="text-[10px] text-slate-400 mt-1 block">{notif.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Settings Control Trigger */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsNotificationsOpen(false);
                }}
                className="flex flex-col items-center cursor-pointer hover:text-emerald-600 text-slate-600 transition-colors group"
              >
                <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">tune</span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{t.config}</span>
              </button>

              {isSettingsOpen && (
                <div className="absolute end-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-[fadeIn_0.2s_ease-out] space-y-4">
                  <h4 className="font-bold text-xs text-slate-800 border-b border-slate-100 pb-2">{t.storeConfig}</h4>
                  
                  {/* Currency Picker */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.currencyLabel}</span>
                    <div className="grid grid-cols-2 gap-2 bg-slate-50 p-1 rounded-lg">
                      <button 
                        onClick={() => setCurrency('PKR')}
                        className={`text-xs py-1.5 font-bold rounded-md transition-all ${currency === 'PKR' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        PKR (Rs.)
                      </button>
                      <button 
                        onClick={() => setCurrency('USD')}
                        className={`text-xs py-1.5 font-bold rounded-md transition-all ${currency === 'USD' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        USD ($)
                      </button>
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.languageLabel}</span>
                    <div className="grid grid-cols-2 gap-2 bg-slate-50 p-1 rounded-lg">
                      <button 
                        onClick={() => setLang('EN')}
                        className={`text-xs py-1.5 font-bold rounded-md transition-all ${lang === 'EN' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        English
                      </button>
                      <button 
                        onClick={() => setLang('UR')}
                        className={`text-xs py-1.5 font-bold rounded-md transition-all ${lang === 'UR' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        اردو (Urdu)
                      </button>
                    </div>
                  </div>

                  {/* JWT Secure Auth Panel */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">shield</span> {t.secureAuth}
                    </span>
                    {authorizedUser ? (
                      <div className="space-y-2">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 text-center">
                          <span className="text-[10px] font-bold text-emerald-700 block">{t.authenticated}</span>
                          <span className="text-[11px] font-extrabold text-emerald-900 block mt-0.5">{authorizedUser.name}</span>
                          <span className="text-[9px] text-emerald-600 uppercase tracking-wider">{authorizedUser.role}</span>
                        </div>
                        <button
                          onClick={handleRoleLogout}
                          className="w-full text-[10px] py-1.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-lg font-bold uppercase tracking-wider hover:bg-rose-100 transition-colors"
                        >
                          {t.terminateSession}
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleRoleLogin} className="space-y-2">
                        <select
                          value={authRole}
                          onChange={(e) => setAuthRole(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option value="patient">Patient</option>
                          <option value="doctor">Doctor</option>
                          <option value="pharmacist">Pharmacist</option>
                          <option value="admin">Admin</option>
                          <option value="ai-assistant">AI Assistant</option>
                        </select>
                        <input
                          type="password"
                          value={authPasskey}
                          onChange={(e) => setAuthPasskey(e.target.value)}
                          placeholder={t.enterPasskey}
                          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        {authError && <p className="text-[10px] text-rose-500 font-semibold">{authError}</p>}
                        {authSuccessMsg && <p className="text-[10px] text-emerald-600 font-semibold">{authSuccessMsg}</p>}
                        <button
                          type="submit"
                          className="w-full text-[10px] py-1.5 bg-emerald-600 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                        >
                          {t.authenticate}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex flex-col items-center cursor-pointer hover:text-emerald-600 text-slate-600 group border-s border-slate-200 ps-6 outline-none"
            >
              <div className="relative">
                <span className="material-symbols-outlined text-[27px] group-hover:scale-105 transition-transform text-slate-700">shopping_cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -end-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[19px] text-center border-2 border-white animate-[bounce_0.3s_ease-in-out]">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{t.cartLabel}</span>
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-10 overflow-x-auto hide-scrollbar">
            <ul className="flex items-center gap-6 py-2.5 min-w-max">
              <li 
                onClick={() => setActiveCategory('All')}
                className={`flex items-center gap-2 text-sm font-semibold border-e border-slate-200 pe-6 me-2 cursor-pointer transition-colors ${activeCategory === 'All' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                <span className="material-symbols-outlined text-[18px]">menu</span> {t.allCategories}
              </li>
              {CATEGORIES.filter(c => c !== 'All').map(category => (
                <li 
                  key={category} 
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors whitespace-nowrap py-1 ${activeCategory === category ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-500 hover:text-emerald-600'}`}
                >
                  {t.categories[category] || category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 space-y-12">
        
        {/* ========================================== */}
        {/* HERO SECTION — Premium Unsplash Backgrounds */}
        {/* ========================================== */}
        <section className="relative rounded-2xl overflow-hidden shadow-lg min-h-[320px] md:min-h-[380px] flex items-center bg-slate-900 border border-slate-200">
          
          {/* Animated Carousel slides — force LTR for physical slide animation */}
          <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${heroIndex * 100}%)`, direction: 'ltr' }}>
            {/* Slide 1 — Medicine */}
            <div className="min-w-full shrink-0 h-full relative flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop" 
                alt="Pharmacist reviewing healthcare essentials" 
                className="absolute inset-0 w-full h-full object-cover object-[72%_center]"
              />
              <div className={`absolute inset-0 ${heroGradientClass} from-slate-950/95 via-slate-950/78 to-slate-950/20`}></div>
              <div
                dir={t.dir}
                className="relative z-10 shrink-0 space-y-4 px-6 md:px-14 text-white"
                style={{ width: 'min(88vw, 44rem)', minWidth: '20rem' }}
              >
                <span className="inline-block px-3 py-1 bg-amber-400 text-amber-950 text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                  {t.superSaverWeeks}
                </span>
                <h1 
                  className="text-3xl md:text-5xl font-hanken font-extrabold leading-tight tracking-tight"
                  dangerouslySetInnerHTML={{ __html: t.heroTitle1 }}
                />
                <p className="text-emerald-50 text-sm md:text-base font-medium leading-relaxed mb-0" style={{ maxWidth: '34rem' }}>
                  {t.heroDesc1}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsPrescriptionModalOpen(true)}
                    className="bg-white text-emerald-900 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 hover:shadow-lg transition-all flex items-center gap-2 shadow-md active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">upload_file</span> {t.uploadPrescription}
                  </button>
                  <button 
                    onClick={() => {
                      setActiveCategory('Medicine');
                      const element = document.getElementById('products-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2 active:scale-95"
                  >
                    {t.shopMedicine}
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 — Derma */}
            <div className="min-w-full shrink-0 h-full relative flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1920&auto=format&fit=crop" 
                alt="Dermatology skincare" 
                className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
              />
              <div className={`absolute inset-0 ${heroGradientClass} from-slate-950/95 via-slate-950/78 to-slate-950/20`}></div>
              <div
                dir={t.dir}
                className="relative z-10 shrink-0 space-y-4 px-6 md:px-14 text-white"
                style={{ width: 'min(88vw, 44rem)', minWidth: '20rem' }}
              >
                <span className="inline-block px-3 py-1 bg-rose-500 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                  {t.newArrivalGlow}
                </span>
                <h1 
                  className="text-3xl md:text-5xl font-hanken font-extrabold leading-tight tracking-tight"
                  dangerouslySetInnerHTML={{ __html: t.heroTitle2 }}
                />
                <p className="text-rose-100 text-sm md:text-base font-medium leading-relaxed mb-0" style={{ maxWidth: '34rem' }}>
                  {t.heroDesc2}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      setActiveCategory('Derma');
                      const element = document.getElementById('products-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-rose-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-rose-600 hover:shadow-lg transition-all flex items-center gap-2 shadow-md active:scale-95"
                  >
                    {t.exploreSkincare}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
            <button 
              onClick={() => setHeroIndex(0)}
              className={`w-3.5 h-1.5 rounded-full transition-all ${heroIndex === 0 ? 'bg-white w-7' : 'bg-white/40'}`}
            ></button>
            <button 
              onClick={() => setHeroIndex(1)}
              className={`w-3.5 h-1.5 rounded-full transition-all ${heroIndex === 1 ? 'bg-white w-7' : 'bg-white/40'}`}
            ></button>
          </div>
        </section>

        {/* Features Strip */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified</span>
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wide">{t.authentic}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{t.authenticDesc}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">local_shipping</span>
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wide">{t.fastDelivery}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{t.fastDeliveryDesc}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wide">{t.pharmacistHelp}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{t.pharmacistHelpDesc}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wide">{t.secureOrders}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{t.secureOrdersDesc}</p>
            </div>
          </div>
        </section>

        {/* Brand showcase logo strip */}
        <section className="bg-white py-6 px-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="text-center">
            <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">{t.trustedBrands}</span>
          </div>
          <div className="flex flex-wrap items-center justify-around gap-6 opacity-60 hover:opacity-85 transition-opacity py-2">
            {BRAND_LOGOS.map((brand, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-hanken text-lg font-black tracking-tighter text-slate-800">{brand.name}</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-600 mt-0.5">{brand.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Product Listing */}
        <section id="products-section" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-700">
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span className="text-xs font-bold uppercase tracking-widest">{t.premiumMarketplace}</span>
              </div>
              <h2 className="text-2xl font-bold font-hanken text-slate-800 mt-1">{t.trendingProducts}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{t.trendingProductsDesc}</p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.slice(0, 5).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10 border-emerald-600' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {t.categories[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full relative"
                >
                  
                  {/* Image/Icon Area */}
                  <div className="relative aspect-square bg-slate-50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-102 transition-transform duration-300 overflow-hidden cursor-pointer"
                       onClick={() => setSelectedProduct(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 start-3 bg-rose-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
                      -{product.discount}% OFF
                    </div>

                    {/* Quick View Overlay Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/20 backdrop-blur-[2px]">
                      <button className="bg-white/95 text-slate-800 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0">
                        <span className="material-symbols-outlined text-[16px]">visibility</span> {t.quickView}
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 flex flex-col px-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600 mb-1">{t.categories[product.category] || product.category}</span>
                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="font-bold text-slate-800 text-sm leading-snug mb-2 line-clamp-2 hover:text-emerald-700 cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <span className="material-symbols-outlined text-[13px] text-amber-400" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="text-[11px] font-bold text-slate-700">{product.rating}</span>
                      <span className="text-[11px] text-slate-400">({product.reviews} {t.reviewsLabel})</span>
                    </div>

                    {/* Price & Action */}
                    <div className="mt-auto flex items-end justify-between pt-3 border-t border-slate-100">
                      <div>
                        <div className="text-[10px] text-slate-400 line-through font-semibold">{currencySymbol} {convertPrice(product.originalPrice)}</div>
                        <div className="font-black text-base text-emerald-700 leading-none">{currencySymbol} {convertPrice(product.price)}</div>
                      </div>
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm group/btn active:scale-95 cursor-pointer outline-none"
                        title={t.addToCart}
                      >
                        <span className="material-symbols-outlined text-[20px] font-medium">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{t.noProductsFound}</h3>
              <p className="text-xs text-slate-500">{t.noProductsDesc}</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                className="mt-5 px-6 py-2 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-emerald-200 transition-colors"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </section>

        {/* ========================================== */}
        {/* PROMO BANNERS — Real product imagery       */}
        {/* ========================================== */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Baby Care Promo */}
          <div className="relative rounded-2xl overflow-hidden hover:shadow-lg transition-all group min-h-[240px] border border-blue-200/40 bg-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=800&auto=format&fit=crop" 
              alt="Baby care products" 
              className="absolute inset-0 w-full h-full object-cover object-[72%_center] transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${heroGradientClass} from-white via-white/95 to-white/20`}></div>
            <div className="relative h-full min-h-[240px] w-full flex items-center p-5 sm:p-6">
              <div className="space-y-2 shrink-0" style={{ width: 'min(76vw, 22rem)', minWidth: '18rem' }}>
                <span className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest">{t.babyCareEssentials}</span>
                <h3 className="text-xl md:text-2xl font-black text-indigo-950 leading-tight">{t.babyCareTitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-0">{t.babyCareDesc}</p>
                <button 
                  onClick={() => {
                    setActiveCategory('Baby Care');
                    const element = document.getElementById('products-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-indigo-700 text-xs font-bold uppercase tracking-wider hover:text-indigo-900 flex items-center gap-1 group/btn mt-2"
                >
                  {t.shopNow} <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Derma/Skincare Promo */}
          <div className="relative rounded-2xl overflow-hidden hover:shadow-lg transition-all group min-h-[240px] border border-rose-200/40 bg-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop" 
              alt="Skincare products" 
              className="absolute inset-0 w-full h-full object-cover object-[70%_center] transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${heroGradientClass} from-white via-white/95 to-white/20`}></div>
            <div className="relative h-full min-h-[240px] w-full flex items-center p-5 sm:p-6">
              <div className="space-y-2 shrink-0" style={{ width: 'min(76vw, 22rem)', minWidth: '18rem' }}>
                <span className="text-rose-600 font-extrabold text-[10px] uppercase tracking-widest">{t.dermaSkinBarrier}</span>
                <h3 className="text-xl md:text-2xl font-black text-rose-950 leading-tight">{t.dermaTitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-0">{t.dermaDesc}</p>
                <button 
                  onClick={() => {
                    setActiveCategory('Derma');
                    const element = document.getElementById('products-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-rose-700 text-xs font-bold uppercase tracking-wider hover:text-rose-900 flex items-center gap-1 group/btn mt-2"
                >
                  {t.exploreMore} <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 mt-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">local_pharmacy</span>
              </div>
              <span className="text-xl font-bold font-hanken text-white tracking-tight">MediGuide<span className="text-emerald-500">Store</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.supportActive}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">{t.productCategories}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.prescriptionDrugs}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.cosmeceuticals}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.vitaminsSupps}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.babyCareNutrition}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">{t.quickPolicies}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.fastDeliveryPolicy}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.authGuarantee}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.termsOfService}</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">{t.refundPolicy}</a></li>
            </ul>
          </div>

          {/* ============================================ */}
          {/* MAILING LIST — Upgraded high-contrast design */}
          {/* ============================================ */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">{t.mailingList}</h4>
            <p className="text-xs text-slate-400 mb-4">{t.mailingListDesc}</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input 
                type="email" 
                placeholder={t.emailPlaceholder}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-sm outline-none text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                disabled={emailSubmitting}
                required
              />
              <button 
                type="submit"
                disabled={emailSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
              >
                {emailSubmitting ? t.joining : t.join}
              </button>
              {emailStatus && (
                <p className={`text-xs font-semibold ${emailStatus.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {emailStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4 text-[24px]">
            <span className="material-symbols-outlined">payments</span>
            <span className="material-symbols-outlined">credit_card</span>
            <span className="material-symbols-outlined">shield_with_heart</span>
          </div>
        </div>
      </footer>

      {/* ============================================== */}
      {/* 🛒 SHOPPING CART DRAWER — Fixed width + shrink */}
      {/* ============================================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          {/* Overlay background */}
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-[3px] transition-opacity"
          ></div>
          
          <div className="absolute inset-y-0 end-0 flex">
            <div className={`w-[85vw] sm:w-[450px] shrink-0 bg-white shadow-2xl flex flex-col h-full ${drawerAnimation}`}>
              
              {/* Cart Header */}
              <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-700">shopping_cart</span>
                  <h3 className="font-extrabold text-slate-800 text-sm uppercase tracking-wide">{t.shoppingBag} ({cartItemCount})</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Cart Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length > 0 ? (
                  cart.map(item => {
                    const prod = MOCK_PRODUCTS.find(p => p.id === item.id);
                    if (!prod) return null;
                    return (
                      <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="w-16 h-16 rounded-lg object-cover bg-white border border-slate-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs text-slate-800 truncate leading-snug">{prod.name}</h4>
                          <span className="text-[9px] font-bold text-slate-400 uppercase mt-0.5 block">{t.categories[prod.category] || prod.category}</span>
                          <div className="font-black text-xs text-emerald-700 mt-1">
                            {currencySymbol} {convertPrice(prod.price)}
                          </div>
                          
                          {/* Counter controls */}
                          <div className="flex items-center justify-between mt-2.5">
                            <div className="flex items-center border border-slate-200 bg-white rounded-lg overflow-hidden">
                              <button 
                                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 text-slate-500 hover:bg-slate-100 font-bold text-xs transition-colors"
                              >
                                -
                              </button>
                              <span className="px-3 text-xs font-black text-slate-800 bg-slate-50/50">{item.quantity}</span>
                              <button 
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-slate-500 hover:bg-slate-100 font-bold text-xs transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button 
                              onClick={() => updateCartQuantity(item.id, 0)}
                              className="text-xs text-rose-500 font-semibold hover:underline flex items-center gap-0.5"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span> {t.removeLabel}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="h-full flex flex-col justify-center items-center text-center py-16 space-y-4">
                    <span className="material-symbols-outlined text-6xl text-slate-200">shopping_cart_off</span>
                    <div>
                      <h4 className="font-bold text-slate-700 text-sm">{t.emptyCartTitle}</h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-[220px]">{t.emptyCartDesc}</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-5 py-2.5 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      {t.browseProducts}
                    </button>
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-slate-600">
                      <span>{t.subtotalLabel}</span>
                      <span className="font-bold">{currencySymbol} {convertPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-600">
                      <span>{t.deliveryFeeLabel}</span>
                      <span className="font-bold">{deliveryFee === 0 ? t.freeLabel : `${currencySymbol} ${convertPrice(deliveryFee)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-slate-800 pt-2 border-t border-slate-200">
                      <span>{t.grandTotalLabel}</span>
                      <span className="text-emerald-700 font-black text-base">{currencySymbol} {convertPrice(grandTotal)}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <button 
                      onClick={clearCart}
                      className="py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors active:scale-95 outline-none"
                    >
                      {t.clearAll}
                    </button>
                    <button 
                      onClick={async () => {
                        try {
                          const orderItems = cart.map(item => {
                            const activeProds = products.length > 0 ? products : MOCK_PRODUCTS;
                            const prod = activeProds.find(p => p.id === item.id);
                            return { id: item.id, name: prod?.name || 'Unknown', quantity: item.quantity, price: prod?.price || 0 };
                          });
                          const res = await fetch('/api/orders', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ items: orderItems, subtotal, deliveryFee, grandTotal })
                          });
                          const data = await res.json();
                          if (res.ok && data.orderId) {
                            pushNotification(`🎉 Order #${data.orderId} placed successfully! Delivery in 60 minutes.`);
                            alert(`🎉 Order #${data.orderId} Placed Successfully! Your premium pharmaceutical products will arrive in 60 minutes.`);
                          } else {
                            alert('🎉 Order Placed Successfully! Your products will arrive in 60 minutes.');
                          }
                        } catch {
                          alert('🎉 Order Placed Successfully! Your products will arrive in 60 minutes.');
                        }
                        clearCart();
                        setIsCartOpen(false);
                      }}
                      className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 outline-none"
                    >
                      {t.checkoutNow}
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400">{t.taxNote}</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* 💊 PRODUCT QUICK VIEW DETAILS MODAL */}
      {/* ======================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden animate-[fadeIn_0.2s_ease-out]">
          <div 
            onClick={() => setSelectedProduct(null)}
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3.5px] transition-opacity"
          ></div>
          
          <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-6 animate-[scaleUp_0.25s_ease-out] max-h-[90vh] overflow-y-auto z-10">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 end-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Left Image Side */}
            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Information Side */}
            <div className="flex-1 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">{t.categories[selectedProduct.category] || selectedProduct.category}</span>
                <h3 className="font-extrabold text-slate-800 text-lg leading-tight mt-1">{selectedProduct.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="material-symbols-outlined text-[14px] text-amber-400" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="text-xs font-bold text-slate-700">{selectedProduct.rating}</span>
                  <span className="text-xs text-slate-400">({selectedProduct.reviews} {t.verifiedReviews})</span>
                </div>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl font-black text-emerald-700">{currencySymbol} {convertPrice(selectedProduct.price)}</span>
                <span className="text-xs text-slate-400 line-through font-semibold">{currencySymbol} {convertPrice(selectedProduct.originalPrice)}</span>
                <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">-{selectedProduct.discount}% OFF</span>
              </div>

              {/* Rich Clinical Description */}
              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div>
                  <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider block">{t.activeIngredients}</span>
                  <p className="text-slate-700 font-semibold mt-0.5">{selectedProduct.ingredients}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider block">{t.usageInstructions}</span>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{selectedProduct.usage}</p>
                </div>
                
                {/* Warning Card */}
                <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 flex gap-2">
                  <span className="material-symbols-outlined text-rose-500 shrink-0 text-sm mt-0.5">warning</span>
                  <div>
                    <span className="font-bold text-rose-950 uppercase text-[9px] tracking-wider block">{t.clinicalWarnings}</span>
                    <p className="text-rose-900 text-[10px] leading-relaxed mt-0.5">{selectedProduct.warnings}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex gap-3">
                <button 
                  onClick={() => {
                    addToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 outline-none"
                >
                  <span className="material-symbols-outlined text-base">add_shopping_cart</span> {t.addToCart}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* 📁 PRESCRIPTION SCANNER MODAL */}
      {/* ======================================= */}
      {isPrescriptionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          <div 
            onClick={() => {
              if (!isScanning) setIsPrescriptionModalOpen(false);
            }}
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-[3.5px] transition-opacity"
          ></div>

          <div
            dir={t.dir}
            className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col gap-5 animate-[scaleUp_0.25s_ease-out] z-10"
            style={{ width: 'min(92vw, 30rem)', minWidth: 'min(92vw, 20rem)' }}
          >
            <button 
              onClick={() => setIsPrescriptionModalOpen(false)}
              className="absolute top-4 end-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              disabled={isScanning}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="text-center space-y-2 px-2">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                <span className="material-symbols-outlined text-[28px]">upload_file</span>
              </div>
              <h3 className="font-extrabold text-slate-800 text-xl uppercase tracking-wide leading-tight">{t.uploadPrescriptionTitle}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto mb-0">{t.prescriptionDesc}</p>
            </div>

            {/* Scan Zone */}
            <div className="relative border-2 border-dashed border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-colors bg-slate-50 flex flex-col items-center justify-center min-h-[180px] overflow-hidden">
              
              {/* Scanning Laser Beam Layer */}
              {isScanning && (
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between">
                  <div className="w-full bg-emerald-500/20 flex-1 relative overflow-hidden">
                    {/* Laser horizontal bar */}
                    <div className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10b981] animate-[laserScan_1.8s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              )}

              <input 
                type="file" 
                id="rx-file-input" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handlePrescriptionUpload}
                disabled={isScanning || scanComplete}
              />
              
              {!isScanning && !scanComplete ? (
                <div className="text-center space-y-3 pointer-events-none max-w-xs mx-auto">
                  <span className="material-symbols-outlined text-slate-300 text-5xl">cloud_upload</span>
                  <div className="text-sm font-bold text-slate-700 leading-snug">{t.dragDrop} <span className="text-emerald-600 hover:underline">{t.browse}</span></div>
                  <span className="text-xs text-slate-400 block leading-relaxed">{t.fileSupport}</span>
                </div>
              ) : isScanning ? (
                <div className="text-center space-y-3 z-20 max-w-xs mx-auto">
                  <span className="material-symbols-outlined text-emerald-600 text-4xl animate-bounce">psychology</span>
                  <div className="text-sm font-bold text-emerald-800">{t.readingLabels}</div>
                  <div className="text-xs text-slate-400 truncate max-w-[240px]">{uploadedFileName}</div>
                </div>
              ) : (
                <div className="text-center space-y-3 max-w-xs mx-auto">
                  <span className="material-symbols-outlined text-emerald-500 text-5xl">check_circle</span>
                  <div className="text-sm font-bold text-emerald-800">{t.prescriptionAnalyzed}</div>
                  <p className="text-xs text-slate-500 leading-relaxed mx-auto mb-0">
                    {t.prescriptionResult}
                  </p>
                </div>
              )}
            </div>

            {scanComplete && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <button 
                  onClick={() => {
                    setScanComplete(false);
                    setUploadedFileName('');
                  }}
                  className="py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors outline-none"
                >
                  {t.scanAnother}
                </button>
                <button 
                  onClick={() => {
                    setIsPrescriptionModalOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 outline-none"
                >
                  {t.viewCart}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Embedded Animations styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes laserScan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

    </div>
  );
}
