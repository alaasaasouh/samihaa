// ============================================
// LANGUAGE TRANSLATIONS
// ============================================

const translations = {
  en: {
    about: "About",
    lifeCoaching: "Life Coaching",
    events: "Events",
    courses: "Courses",
    blog: "Blog",
    contact: "Contact",
    whoIsSamiha: "Who is Samiha",
    bookServices: "Book Services",
    online: "Online",
    inPerson: "In person",
    oneToOne: "One-to-One Session",
    personalizedCoaching: "Personalized coaching tailored to your needs",
    personalityTest: "Personality Test",
    discoverPersonality: "Discover your personality type",
    workshop: "Workshop",
    selfAwarenessWorkshop: "Self-Awareness Workshop",
    registerNow: "Register Now",
    masterClass: "Master Class",
    certifiedLifeCoach: "Certified Life Coach Training",
    previousEvents: "Previous Events",
    selfDiscovery: "Self Discovery",
    emotionalPsychology: "Emotional Psychology",
    bodyLanguage: "Body Language",
    selfLove: "Self Love",
    signIn: "Sign in",
    takeTest: "Take your personality test",
    thePowerOfSelfDiscovery: "The Power of Self-Discovery",
    emotionalIntelligence: "Emotional Intelligence in Daily Life",
    bookYour: "Book your:",
    moreInfo: "More Info:",
    aboutServices: "About Services",
    courseDetails: "Course Details",
    contactOnWhatsApp: "Contact on WhatsApp",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    followUs: "Follow Us",
    onlineCoaching: "Online Coaching",
    getMotivation: "Get motivation. Any time. Any place.",
    transformYourLife: "Transform Your Life",
    discoverPotential: "Discover your true potential",
    personalGrowth: "Personal Growth",
    unlockPotential: "Unlock your potential and achieve goals"
  },
  ar: {
    about: "حول",
    lifeCoaching: "تدريب الحياة",
    events: "الأحداث",
    courses: "الدورات",
    blog: "المدونة",
    contact: "اتصل",
    whoIsSamiha: "من هي سميحة",
    bookServices: "احجز الخدمات",
    online: "أونلاين",
    inPerson: "وجهاً لوجه",
    oneToOne: "جلسة فردية",
    personalizedCoaching: "تدريب شخصي مخصص لاحتياجاتك",
    personalityTest: "اختبار الشخصية",
    discoverPersonality: "اكتشف نوع شخصيتك",
    workshop: "ورشة عمل",
    selfAwarenessWorkshop: "ورشة الوعي الذاتي",
    registerNow: "سجل الآن",
    masterClass: "فئة رئيسية",
    certifiedLifeCoach: "تدريب مدرب الحياة المعتمد",
    previousEvents: "الأحداث السابقة",
    selfDiscovery: "اكتشاف الذات",
    emotionalPsychology: "علم النفس العاطفي",
    bodyLanguage: "لغة الجسد",
    selfLove: "حب النفس",
    signIn: "تسجيل الدخول",
    takeTest: "خذ اختبار الشخصية الخاص بك",
    thePowerOfSelfDiscovery: "قوة اكتشاف الذات",
    emotionalIntelligence: "الذكاء العاطفي في الحياة اليومية",
    bookYour: "احجز:",
    moreInfo: "معلومات أخرى:",
    aboutServices: "حول الخدمات",
    courseDetails: "تفاصيل الدورة",
    contactOnWhatsApp: "اتصل على WhatsApp",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",
    onlineCoaching: "التدريب عبر الإنترنت",
    getMotivation: "احصل على الحافز. في أي وقت. في أي مكان.",
    transformYourLife: "غيّر حياتك",
    discoverPotential: "اكتشف إمكانياتك الحقيقية",
    personalGrowth: "النمو الشخصي",
    unlockPotential: "افتح إمكانياتك وحقق أهدافك"
  },
  fr: {
    about: "À propos",
    lifeCoaching: "Coaching de vie",
    events: "Événements",
    courses: "Cours",
    blog: "Blog",
    contact: "Contact",
    whoIsSamiha: "Qui est Samiha",
    bookServices: "Réserver des services",
    online: "En ligne",
    inPerson: "En personne",
    oneToOne: "Séance individuelle",
    personalizedCoaching: "Coaching personnalisé adapté à vos besoins",
    personalityTest: "Test de personnalité",
    discoverPersonality: "Découvrez votre type de personnalité",
    workshop: "Atelier",
    selfAwarenessWorkshop: "Atelier de sensibilisation",
    registerNow: "S'inscrire maintenant",
    masterClass: "Classe de maître",
    certifiedLifeCoach: "Formation de coach de vie certifiée",
    previousEvents: "Événements précédents",
    selfDiscovery: "Découverte de soi",
    emotionalPsychology: "Psychologie émotionnelle",
    bodyLanguage: "Langage corporel",
    selfLove: "Amour de soi",
    signIn: "Se connecter",
    takeTest: "Faites votre test de personnalité",
    thePowerOfSelfDiscovery: "Le pouvoir de la découverte de soi",
    emotionalIntelligence: "L'intelligence émotionnelle dans la vie quotidienne",
    bookYour: "Réservez votre:",
    moreInfo: "Plus d'informations:",
    aboutServices: "À propos des services",
    courseDetails: "Détails du cours",
    contactOnWhatsApp: "Contacter sur WhatsApp",
    quickLinks: "Liens rapides",
    contactInfo: "Informations de contact",
    followUs: "Nous suivre",
    onlineCoaching: "Coaching en ligne",
    getMotivation: "Obtenez de la motivation. N'importe quand. N'importe où.",
    transformYourLife: "Transformez votre vie",
    discoverPotential: "Découvrez votre vrai potentiel",
    personalGrowth: "Croissance personnelle",
    unlockPotential: "Libérez votre potentiel et atteignez vos objectifs"
  }
};

let currentLanguage = 'en';

// ============================================
// GSAP SLIDER FUNCTIONALITY
// ============================================

const sliderItems = document.querySelectorAll(".slider__item");
const btnNext = document.querySelector(".slider__arrows--right");
const btnBack = document.querySelector(".slider__arrows--left");

const slider = {
  currentItem: 0,

  init: () => {
    slider.in(slider.currentItem);
    // Auto-advance slider every 5 seconds
    setInterval(() => {
      slider.next();
    }, 5000);
  },

  in: (index) => {
    const sliderItem = sliderItems[index];
    const texts = sliderItem.querySelectorAll("p");
    gsap.set(sliderItem, { scale: 0 });
    gsap.set(sliderItem, { left: "-100vw" });
    const timeline = gsap.timeline();

    timeline
      .to(sliderItem, 0.5, { left: 0 })
      .to(sliderItem, 0.5, { scale: 1 })
      .from(texts, 1, {
        autoAlpha: 0,
        ease: "back.out",
        stagger: {
          y: 300,
          each: 0.3
        }
      });
  },

  out: (index, nextIndex) => {
    const sliderItem = sliderItems[index];
    const texts = sliderItem.querySelectorAll("p");
    const timeline = gsap.timeline();
    timeline
      .to(sliderItem, 0.5, {
        left: "100vw",
        delay: 0.5,
        scale: 0.3,
        opacity: 0
      })
      .to(texts, 1, {
        autoAlpha: 0,
        ease: "back.in",
        stagger: {
          y: -300,
          each: 0.3
        }
      }, 0)
      .call(slider.in, [nextIndex], this, "-=1.5")
      .set([texts, sliderItem], { clearProps: "all" });
  },

  next: () => {
    const next =
      slider.currentItem !== sliderItems.length - 1
        ? slider.currentItem + 1
        : 0;
    slider.out(slider.currentItem, next);
    slider.currentItem = next;
  },

  back: () => {
    const prev =
      slider.currentItem > 0 ? slider.currentItem - 1 : sliderItems.length - 1;
    slider.out(slider.currentItem, prev);
    slider.currentItem = prev;
  }
};

// Events
if (btnNext) btnNext.addEventListener("click", slider.next);
if (btnBack) btnBack.addEventListener("click", slider.back);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    slider.next();
  } else if (e.key === 'ArrowLeft') {
    slider.back();
  }
});

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', () => {
  slider.init();
  initializeAnimations();
  initializeLanguageSelector();
});

// ============================================
// LANGUAGE FUNCTIONALITY
// ============================================

function initializeLanguageSelector() {
  const languageSelector = document.querySelector('.language-selector');
  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      updatePageLanguage(currentLanguage);
      // Add fade animation
      gsap.to('body', { opacity: 0.8, duration: 0.3 });
      gsap.to('body', { opacity: 1, duration: 0.3, delay: 0.3 });
    });
  }
}

function updatePageLanguage(lang) {
  // Update text content based on language
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update document direction for Arabic
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.style.direction = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.direction = 'ltr';
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeAnimations() {
  // Animate elements on scroll
  const animatedElements = document.querySelectorAll('[class*="animate-"]');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('animate-fade-in')) {
          gsap.to(element, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          });
        } else if (element.classList.contains('animate-slide-in-up')) {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        } else if (element.classList.contains('animate-slide-in-left')) {
          gsap.to(element, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        } else if (element.classList.contains('animate-slide-in-right')) {
          gsap.to(element, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    gsap.set(el, { opacity: 0, y: 30, x: 0 });
    observer.observe(el);
  });

  // Animate cards on hover
  const cards = document.querySelectorAll('.service-card, .event-card, .course-card, .blog-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Animate buttons on hover
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });
}

// ============================================
// TAB SWITCHING
// ============================================

function switchTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    gsap.to(tab, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        tab.classList.remove('active');
      }
    });
  });

  // Show selected tab
  setTimeout(() => {
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.classList.add('active');
      gsap.from(selectedTab, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }

    // Update button states
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
      event.target.classList.add('active');
    }
  }, 300);
}

// ============================================
// BOOKING FUNCTIONALITY
// ============================================

function bookService(service) {
  const message = `Hi Samiha, I'm interested in: ${service}`;
  const whatsappUrl = `https://wa.me/9616723303?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    gsap.to(window, {
      scrollTo: element,
      duration: 1,
      ease: "power2.inOut"
    });
  }
}

// Handle scroll links
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('scroll-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      const sectionId = href.substring(1);
      scrollTo(sectionId);
    }
  }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    gsap.to(navbar, {
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      duration: 0.3
    });
  } else {
    gsap.to(navbar, {
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      duration: 0.3
    });
  }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function toggleMobileMenu() {
  const menu = document.querySelector('.navbar-menu');
  if (menu) {
    menu.classList.toggle('active');
    gsap.to(menu, {
      opacity: menu.classList.contains('active') ? 1 : 0,
      duration: 0.3
    });
  }
}

// Close mobile menu when a link is clicked
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    const menu = document.querySelector('.navbar-menu');
    if (menu && menu.classList.contains('active')) {
      menu.classList.remove('active');
      gsap.to(menu, {
        opacity: 0,
        duration: 0.3
      });
    }
  }
});


// ============================================
// CREATIVE SCROLL ANIMATIONS
// ============================================

function initializeCreativeScrollAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ========== SECTION TITLES ANIMATION ==========
  gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        markers: false
      },
      opacity: 0,
      x: -100,
      duration: 1
    });
  });

  // ========== SECTION SUBTITLES ANIMATION ==========
  gsap.utils.toArray('.section-subtitle').forEach((subtitle) => {
    gsap.from(subtitle, {
      scrollTrigger: {
        trigger: subtitle,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      x: 100,
      duration: 1
    });
  });

  // ========== CARDS STAGGER ANIMATION ==========
  gsap.utils.toArray('.service-card, .event-card, .course-card, .blog-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 55%',
        scrub: 0.5
      },
      opacity: 0,
      y: 50,
      rotation: 2,
      duration: 0.8,
      delay: index * 0.1
    });
  });

  // ========== ABOUT SECTION - SPLIT ANIMATION ==========
  const aboutText = document.querySelector('.about-text');
  const aboutImage = document.querySelector('.about-image');

  if (aboutText) {
    gsap.from(aboutText, {
      scrollTrigger: {
        trigger: aboutText,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      x: -100,
      duration: 1
    });
  }

  if (aboutImage) {
    gsap.from(aboutImage, {
      scrollTrigger: {
        trigger: aboutImage,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      x: 100,
      scale: 0.8,
      duration: 1
    });
  }

  // ========== PARALLAX EFFECT ON SECTIONS ==========
  gsap.utils.toArray('.section').forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
        markers: false
      },
      y: -50,
      opacity: 0.95,
      duration: 1
    });
  });

  // ========== CONTACT SECTION - SPLIT ANIMATION ==========
  const contactLeft = document.querySelector('.contact-left');
  const contactRight = document.querySelector('.contact-right');

  if (contactLeft) {
    gsap.from(contactLeft, {
      scrollTrigger: {
        trigger: contactLeft,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      x: -150,
      rotation: -5,
      duration: 1
    });
  }

  if (contactRight) {
    gsap.from(contactRight, {
      scrollTrigger: {
        trigger: contactRight,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      opacity: 0,
      x: 150,
      rotation: 5,
      duration: 1
    });
  }

  // ========== BUTTON REVEAL ANIMATION ==========
  gsap.utils.toArray('.btn').forEach((btn) => {
    gsap.from(btn, {
      scrollTrigger: {
        trigger: btn,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 0.5
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.6
    });
  });

  // ========== TEXT REVEAL ANIMATION ==========
  gsap.utils.toArray('p, h4').forEach((text) => {
    if (text.offsetParent !== null) { // Only if visible
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: 'top 90%',
          end: 'top 70%',
          scrub: 0.3
        },
        opacity: 0,
        y: 20,
        duration: 0.5
      });
    }
  });

  // ========== CREATIVE NUMBER COUNTER ANIMATION ==========
  gsap.utils.toArray('.course-hours').forEach((hours) => {
    const text = hours.textContent;
    const number = parseInt(text);
    
    gsap.from(hours, {
      scrollTrigger: {
        trigger: hours,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      textContent: 0,
      duration: 1,
      snap: { textContent: 1 },
      onUpdate: function() {
        hours.textContent = Math.ceil(this.targets()[0].textContent) + 'h';
      }
    });
  });

  // ========== SECTION DIVIDER ANIMATION ==========
  gsap.utils.toArray('hr, .gold-bg').forEach((divider) => {
    gsap.from(divider, {
      scrollTrigger: {
        trigger: divider,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 0.5
      },
      scaleX: 0,
      opacity: 0,
      duration: 0.8
    });
  });

  // ========== FLOATING ANIMATION ON SCROLL ==========
  gsap.utils.toArray('.about-image img, .contact-center img').forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
      y: -20,
      duration: 1,
      yoyo: true,
      repeat: -1
    });
  });

  // ========== ICON SPIN ANIMATION ==========
  gsap.utils.toArray('.card-icon, .course-icon').forEach((icon) => {
    gsap.from(icon, {
      scrollTrigger: {
        trigger: icon,
        start: 'top 85%',
        end: 'top 55%',
        scrub: 0.5
      },
      opacity: 0,
      rotation: -180,
      scale: 0,
      duration: 0.8
    });
  });

  // ========== WORD BY WORD REVEAL ==========
  gsap.utils.toArray('.section-title').forEach((title) => {
    const words = title.textContent.split(' ');
    title.textContent = '';
    
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      title.appendChild(span);

      gsap.to(span, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.5
        },
        opacity: 1,
        delay: i * 0.1,
        duration: 0.5
      });
    });
  });

  // ========== BACKGROUND COLOR TRANSITION ==========
  gsap.utils.toArray('.gold-bg').forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      backgroundColor: 'rgba(201, 169, 97, 0)',
      duration: 1
    });
  });

  // ========== BLUR EFFECT ON SCROLL ==========
  gsap.utils.toArray('.blog-image img').forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      },
      filter: 'blur(10px)',
      opacity: 0.5,
      duration: 1
    });
  });

  // ========== SCALE & ROTATE ANIMATION ==========
  gsap.utils.toArray('.event-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 55%',
        scrub: 0.5
      },
      opacity: 0,
      scale: 0.7,
      rotation: index % 2 === 0 ? -10 : 10,
      duration: 0.8
    });
  });

  // ========== STAGGERED LIST ANIMATION ==========
  gsap.utils.toArray('.footer-links li, .footer-contact li').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 0.3
      },
      opacity: 0,
      x: -30,
      duration: 0.5,
      delay: index * 0.05
    });
  });

  // ========== REFRESH SCROLL TRIGGER ==========
  ScrollTrigger.refresh();
}

// Initialize creative scroll animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Wait for GSAP to be fully loaded
  setTimeout(() => {
    if (typeof ScrollTrigger !== 'undefined') {
      initializeCreativeScrollAnimations();
    }
  }, 100);
});

// Refresh animations on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
