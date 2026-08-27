/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    efes: {

        number: "01",

        category: {
            tr: "MASAÜSTÜ OTOMASYON",
            en: "DESKTOP AUTOMATION"
        },

        title: {
            tr: "Efes Oto Fatura",
            en: "Efes Oto Fatura"
        },

        subtitle: {
            tr: "Eski bir iş uygulaması içerisindeki fatura işleme ve tekrarlayan veri giriş süreçlerini otomatikleştirmek için geliştirilen masaüstü otomasyon sistemi.",
            en: "A desktop automation system designed to automate invoice processing and repetitive data-entry workflows inside a legacy business application."
        },

        tags: [
            "C#",
            ".NET",
            "UI Automation",
            "PDF Processing",
            "Desktop Automation"
        ],

        problem: {
            tr: "Manuel fatura işleme; tekrarlayan veri girişi, uygulama içerisinde gezinme ve doğrulama adımlarını gerektirebiliyor. Amaç bu süreci daha öngörülebilir ve yazılım tarafından yönetilebilir hale getirmekti.",
            en: "Manual invoice processing can involve repetitive data entry, application navigation and validation steps. The goal was to turn this workflow into a more predictable software-driven process."
        },

        solution: {
            tr: "C#/.NET tabanlı otomasyon katmanı mevcut masaüstü uygulamasıyla etkileşime girerek fatura verilerini işler ve gerekli işlem adımlarını koordine eder.",
            en: "A C#/.NET automation layer interacts with the existing desktop application, processes invoice data and coordinates the required workflow steps."
        },

        challenges: {
            tr: [
                "Eski bir masaüstü uygulamasıyla çalışmak",
                "Dinamik UI elementlerini bulmak ve kontrol etmek",
                "Otomasyon adımlarını senkronize etmek",
                "Beklenmeyen uygulama durumlarını yönetmek",
                "Fatura bilgilerini ayrıştırmak",
                "Hata yönetimi ve kurtarma mekanizmaları tasarlamak"
            ],

            en: [
                "Working with a legacy desktop application",
                "Finding and interacting with dynamic UI elements",
                "Synchronizing automation steps",
                "Handling unexpected application states",
                "Parsing invoice information",
                "Designing recovery and error handling"
            ]
        },

        architecture: `
PDF / Invoice
        ↓
Invoice Parser
        ↓
Data Validation
        ↓
Automation Engine
        ↓
UI Automation
        ↓
EfesPro
        ↓
Invoice Entry
`
    },


    claim: {

        number: "02",

        category: {
            tr: "İŞ SİSTEMİ",
            en: "BUSINESS SYSTEM"
        },

        title: {
            tr: "Claim Depo",
            en: "Claim Depo"
        },

        subtitle: {
            tr: "Gerçek operasyonel süreçler üzerine tasarlanmış dahili stok ve claim yönetim sistemi.",
            en: "An internal inventory and claim management system designed around real operational workflows."
        },

        tags: [
            "C#",
            "WinForms",
            "SQL Server",
            "SQLite",
            "DataGridView",
            "Inventory"
        ],

        problem: {
            tr: "Operasyonel stok süreçleri güvenilir veri yönetimi, filtreleme, stok takibi ve mevcut kayıtların net şekilde görüntülenmesini gerektiriyor.",
            en: "Operational inventory workflows require reliable data management, filtering, stock tracking and clear visibility into current records."
        },

        solution: {
            tr: "Masaüstü uygulaması; yapılandırılmış veri yönetimi, filtreleme, stok operasyonları, dashboard ve veritabanı destekli iş akışları sağlıyor.",
            en: "A desktop application provides structured data management, filtering, inventory operations, dashboards and database-backed workflows."
        },

        challenges: {
            tr: [
                "UI durumunu veritabanı durumuyla senkron tutmak",
                "Tekrar kullanılabilir filtreleme sistemi tasarlamak",
                "Stok değişikliklerini tutarlı şekilde yönetmek",
                "Soft delete süreçlerini uygulamak",
                "Backup ve recovery planlaması",
                "Veritabanı migration stratejisi"
            ],

            en: [
                "Keeping UI state synchronized with database state",
                "Designing reusable filtering logic",
                "Handling stock changes consistently",
                "Implementing soft delete workflows",
                "Backup and recovery planning",
                "Database migration strategy"
            ]
        },

        architecture: `
                    WinForms
                       ↓
                Application Logic
                       ↓
              ┌────────┴────────┐
              ↓                 ↓
          SQL Server          SQLite
              ↓                 ↓
               Persistent Data
`
    },


    servicebox: {

        number: "03",

        category: {
            tr: "TARAYICI OTOMASYONU",
            en: "BROWSER AUTOMATION"
        },

        title: {
            tr: "Service Box Automation",
            en: "Service Box Automation"
        },

        subtitle: {
            tr: "Excel'den VIN numaralarını okuyup kampanya bilgilerini kontrol eden ve sonuçları tekrar Excel'e yazan Chrome eklentisi.",
            en: "A Chrome extension that reads VINs from Excel, checks campaign information and writes structured results back into the spreadsheet."
        },

        tags: [
            "JavaScript",
            "Chrome Extension",
            "Manifest V3",
            "Excel",
            "Browser Automation"
        ],

        problem: {
            tr: "Birden fazla VIN'i manuel olarak kontrol etmek ve kampanya bilgilerini Excel'e aktarmak gereksiz ve tekrarlayan bir iş oluşturuyor.",
            en: "Checking multiple VINs manually and transferring campaign information into Excel creates unnecessary repetitive work."
        },

        solution: {
            tr: "Chrome eklentisi Excel'deki VIN numaralarını işler, hedef sayfadaki süreci yürütür, kampanya bilgilerini tespit eder ve sonuçları ilgili Excel satırlarına aktarır.",
            en: "A browser extension processes VINs from an Excel file, navigates the target workflow, detects campaign information and updates the corresponding spreadsheet columns."
        },

        challenges: {
            tr: [
                "Dinamik web arayüzleriyle çalışmak",
                "Asenkron sayfa durumlarını beklemek",
                "Kampanya bilgilerini güvenilir şekilde çıkarmak",
                "Sonuçları doğru Excel satırlarına eşlemek",
                "Başarısız veya eksik aramaları yönetmek",
                "Kullanışlı bir eklenti arayüzü oluşturmak"
            ],

            en: [
                "Working with dynamic web interfaces",
                "Waiting for asynchronous page states",
                "Extracting campaign information reliably",
                "Mapping results back to Excel rows",
                "Handling failed or incomplete searches",
                "Building a usable extension interface"
            ]
        },

        architecture: `
Excel
  ↓
VIN Extraction
  ↓
Chrome Extension
  ↓
Service Box
  ↓
Campaign Detection
  ↓
Result Processing
  ↓
Excel Update
`
    },


    turgut: {

        number: "04",

        category: {
            tr: "STOK / BARKOD",
            en: "INVENTORY / BARCODE"
        },

        title: {
            tr: "Turgut",
            en: "Turgut"
        },

        subtitle: {
            tr: "Barkod tarama, TCP iletişimi ve yerel veritabanı depolamasını bir araya getiren masaüstü stok sistemi.",
            en: "A desktop inventory workflow integrating barcode scanning, TCP communication and local database storage."
        },

        tags: [
            "C#",
            "TCP",
            "SQLite",
            "Zebra",
            "Barcode",
            "DataWedge"
        ],

        problem: {
            tr: "Barkod tabanlı stok süreçlerinde tarayıcı cihaz, uygulama ve veri deposu arasında hızlı ve güvenilir iletişim gerekiyor.",
            en: "Barcode-driven inventory workflows need fast communication between the scanning device, the application and the local data store."
        },

        solution: {
            tr: "TCP tabanlı barkod listener, tarayıcıdan gelen verileri alarak yapılandırılmış barkod bilgisini masaüstü uygulamasına ve SQLite veri katmanına aktarır.",
            en: "A TCP-based barcode listener receives scanner input and passes structured barcode data into the desktop application and SQLite persistence layer."
        },

        challenges: {
            tr: [
                "TCP üzerinden barkod verisi almak",
                "Zebra tarama donanımını entegre etmek",
                "Tarayıcı event'lerini UI durumuyla senkronize etmek",
                "Kayıtları yerel olarak saklamak",
                "Dinamik stok filtreleme sistemi oluşturmak",
                "Uygulama publish edildikten sonra veriyi korumak"
            ],

            en: [
                "Receiving barcode data over TCP",
                "Integrating Zebra scanning hardware",
                "Synchronizing scanner events with UI state",
                "Persisting records locally",
                "Dynamic inventory filtering",
                "Maintaining data after application publishing"
            ]
        },

        architecture: `
Zebra Scanner
      ↓
DataWedge / IPWedge
      ↓
TCP : 58628
      ↓
Barcode Listener
      ↓
C# Application
      ↓
SQLite
      ↓
Inventory Records
`
    }

};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    tr: {

        loader: {
            loading: "SİSTEM BAŞLATILIYOR..."
        },

        nav: {
            home: "Ana Sayfa",
            projects: "Projeler",
            engineering: "Mühendislik",
            stack: "Teknolojiler",
            about: "Hakkımda",
            experience: "Deneyim",
            contact: "İletişim"
        },

        hero: {
            status: "SEÇİLİ PROJELER İÇİN UYGUN",
            titleLine1: "Yazılım",
            titleLine2: "sistemleri geliştiriyorum.",
            description: "Otomasyon, iş uygulamaları ve gerçek problemlere pratik çözümler üreten sistemlere odaklanan yazılım geliştiriciyim.",
            projectsButton: "Projeleri Gör",
            contactButton: "İletişime Geç",
            floating1Label: "UZMANLIK",
            floating1Value: "Otomasyon",
            floating2Label: "YAKLAŞIM",
            floating2Value: "Gerçek Çözümler",
            scroll: "KEŞFETMEK İÇİN KAYDIR"
        },

        stats: {
            projects: "Gerçek Proje",
            projectsDesc: "Gerçek operasyonel süreçler üzerine geliştirildi.",
            backend: "Ana Dil",
            backendDesc: "Masaüstü uygulamaları, otomasyon ve sistemler.",
            mindset: "Problem Çözme",
            mindsetDesc: "Geliştir, test et, iyileştir ve tekrar et."
        },

        projects: {
            eyebrow: "SEÇİLİ ÇALIŞMALAR",
            title: "Gerçek problemler",
            titleMuted: "için geliştirilen sistemler.",
            description: "Gerçek iş akışlarını iyileştirmek için geliştirilmiş masaüstü uygulamaları, otomasyon sistemleri ve tarayıcı tabanlı araçlardan bir seçki.",
            status: "VAKA ÇALIŞMASI",
            viewCase: "Vaka çalışmasını görüntüle"
        },

        project: {

            efes: {
                title: "Efes Oto Fatura",
                subtitle: "Fatura işleme ve tekrarlayan veri giriş süreçleri için masaüstü otomasyon sistemi."
            },

            claim: {
                title: "Claim Depo",
                subtitle: "Operasyonel süreçler üzerine geliştirilen dahili stok ve claim yönetim sistemi."
            },

            servicebox: {
                title: "Service Box Automation",
                subtitle: "VIN numaralarını işleyip kampanya sonuçlarını Excel'e aktaran Chrome eklentisi."
            },

            turgut: {
                title: "Turgut",
                subtitle: "Barkod tarama, TCP iletişimi ve SQLite entegrasyonlu stok sistemi."
            }

        },

        engineering: {

            eyebrow: "MÜHENDİSLİK YAKLAŞIMI",

            title: "Sadece kod",
            titleMuted: "yazmıyorum.",

            description: "Mimari ve veri akışından hata kurtarmaya, sürdürülebilirlikten kullanıcı deneyimine kadar sistemin tamamını önemsiyorum.",

            card1: {
                title: "Otomasyon",
                description: "Tekrarlayan manuel süreçleri öngörülebilir yazılım akışlarına dönüştürmek."
            },

            card2: {
                title: "Veri Sistemleri",
                description: "Filtreleme, kalıcı veri, recovery ve güvenilir veritabanı yapıları oluşturmak."
            },

            card3: {
                title: "Entegrasyon",
                description: "Uygulamaları, tarayıcıları, tarayıcı cihazlarını, dosyaları ve farklı sistemleri birbirine bağlamak."
            },

            featureLabel: "PRENSİP",

            feature1: "anla",
            feature2: "tasarla",
            feature3: "otomatikleştir",
            feature4: "iyileştir"
        },

        stack: {

            eyebrow: "TEKNOLOJİ",

            title: "Kullandığım",
            titleMuted: "araçlar.",

            description: "Kullanışlı ve sürdürülebilir yazılımlar geliştirmeye odaklanan pratik bir teknoloji stack'i.",

            primary: "ANA TEKNOLOJİLER",

            dotnet: "Masaüstü & backend",
            sql: "Veri & kalıcılık",
            javascript: "Web otomasyonu",
            sqlite: "Yerel veri",

            other: "DİĞER TEKNOLOJİLER"
        },

        github: {

            eyebrow: "OPEN SOURCE / CODE",

            title: "Koda",
            titleMuted: "bak.",

            description: "Projelerim, deneylerim ve geliştirme çalışmalarım GitHub'da bulunuyor. Kodları, mimariyi ve uygulama detaylarını inceleyebilirsin."
        },

        about: {

            eyebrow: "HAKKIMDA",

            title: "Faydalı",
            titleMuted: "şeyler geliştiriyorum.",

            lead: "Dağınık, tekrarlayan ve verimsiz iş akışlarını basit yazılımlara dönüştürmeyi seviyorum.",

            paragraph1: "Geliştirme yaklaşımım oldukça pratik. Bir sistemi otomatikleştirmeye veya geliştirmeye karar vermeden önce sistemin gerçekte nasıl çalıştığını anlamaya odaklanıyorum.",

            paragraph2: "İster masaüstü uygulaması, ister tarayıcı eklentisi, veritabanı sistemi veya donanım entegrasyonu olsun, amaç aynı: işi gerçekten kolaylaştıran bir şey geliştirmek.",

            principle1: "Önce anla",
            principle2: "Pratik tut",
            principle3: "Sürekli geliştir"
        },

        experience: {

            eyebrow: "DENEYİM",

            title: "İşten",
            titleMuted: "yazılıma.",

            description: "Gerçek iş ve operasyon problemlerini yazılımla çözmeye odaklanan bir deneyim.",

            item1: {
                type: "YAZILIM GELİŞTİRME",
                title: "Otomasyon & İş Sistemleri",
                description: "Gerçek operasyonel ihtiyaçlar üzerine masaüstü uygulamaları, otomasyon akışları, stok sistemleri ve tarayıcı araçları geliştiriyorum."
            },

            item2: {
                type: "GELİŞTİRME",
                title: "C# / .NET Geliştirme",
                description: "Manuel işleri azaltmak için raporlama araçları, veri odaklı uygulamalar ve yazılım çözümleri geliştiriyorum."
            },

            item3: {
                type: "SÜREKLİ GELİŞTİRME",
                title: "Geliştirerek Öğrenmek",
                description: "Yeni teknolojileri deneyerek öğrenmeye ve fikirleri çalışan yazılımlara dönüştürmeye devam ediyorum."
            }
        },

        contact: {

            eyebrow: "İLETİŞİM",

            title: "Çözülmeye",
            titleMuted: "değer bir problem mi var?",

            description: "Yazılımla çözülebilecek bir projen, iş akışın veya teknik problemin varsa benimle iletişime geçebilirsin."
        },

        footer: {

            role: "Yazılım Geliştirici",

            status: "SİSTEM ÇALIŞIYOR",

            localTime: "YEREL SAAT"
        },

        modal: {

            problem: "Problem",

            solution: "Çözüm",

            challenges: "Teknik Zorluklar",

            architecture: "Mimari",

            systemFlow: "SİSTEM AKIŞI"
        }

    },


    en: {

        loader: {
            loading: "SYSTEM INITIALIZING..."
        },

        nav: {
            home: "Home",
            projects: "Projects",
            engineering: "Engineering",
            stack: "Stack",
            about: "About",
            experience: "Experience",
            contact: "Contact"
        },

        hero: {
            status: "AVAILABLE FOR SELECTED PROJECTS",
            titleLine1: "I build",
            titleLine2: "software systems.",
            description: "Software developer focused on automation, business applications and practical systems that solve real-world problems.",
            projectsButton: "View Projects",
            contactButton: "Get In Touch",
            floating1Label: "SPECIALIZATION",
            floating1Value: "Automation",
            floating2Label: "APPROACH",
            floating2Value: "Real Solutions",
            scroll: "SCROLL TO EXPLORE"
        },

        stats: {
            projects: "Real Projects",
            projectsDesc: "Built around actual operational workflows.",
            backend: "Primary Language",
            backendDesc: "Desktop applications, automation and systems.",
            mindset: "Problem Solving",
            mindsetDesc: "Build, test, improve and repeat."
        },

        projects: {
            eyebrow: "SELECTED WORK",
            title: "Systems built",
            titleMuted: "for real problems.",
            description: "A selection of desktop applications, automation systems and browser-based tools built to improve real workflows.",
            status: "CASE STUDY",
            viewCase: "View case study"
        },

        project: {

            efes: {
                title: "Efes Oto Fatura",
                subtitle: "Desktop automation for invoice processing and repetitive data-entry workflows."
            },

            claim: {
                title: "Claim Depo",
                subtitle: "Internal inventory and claim management system built around operational workflows."
            },

            servicebox: {
                title: "Service Box Automation",
                subtitle: "Chrome extension that processes VINs and writes campaign results into Excel."
            },

            turgut: {
                title: "Turgut",
                subtitle: "Inventory system integrating barcode scanning, TCP communication and SQLite."
            }

        },

        engineering: {

            eyebrow: "ENGINEERING MINDSET",

            title: "More than",
            titleMuted: "writing code.",

            description: "I care about the entire system — from architecture and data flow to recovery, maintainability and user experience.",

            card1: {
                title: "Automation",
                description: "Turning repetitive manual processes into predictable software workflows."
            },

            card2: {
                title: "Data Systems",
                description: "Building reliable database-backed systems with filtering, persistence and recovery."
            },

            card3: {
                title: "Integration",
                description: "Connecting applications, browsers, scanners, files and external workflows."
            },

            featureLabel: "THE PRINCIPLE",

            feature1: "understand",
            feature2: "design",
            feature3: "automate",
            feature4: "improve"
        },

        stack: {

            eyebrow: "TECHNOLOGY",

            title: "Tools I",
            titleMuted: "work with.",

            description: "A practical technology stack focused on building useful, maintainable software.",

            primary: "PRIMARY",

            dotnet: "Desktop & backend",
            sql: "Data & persistence",
            javascript: "Web automation",
            sqlite: "Local storage",

            other: "ALSO WORKING WITH"
        },

        github: {

            eyebrow: "OPEN SOURCE / CODE",

            title: "See the",
            titleMuted: "code.",

            description: "Projects, experiments and development work live on GitHub. Feel free to explore the code, architecture and implementation details."
        },

        about: {

            eyebrow: "ABOUT",

            title: "Building",
            titleMuted: "useful things.",

            lead: "I like turning messy, repetitive and inefficient workflows into simple software.",

            paragraph1: "My development approach is heavily practical. I focus on understanding how a system actually works before deciding how it should be automated or improved.",

            paragraph2: "Whether it is a desktop application, a browser extension, a database workflow or hardware integration, the goal remains the same: build something that genuinely makes the job easier.",

            principle1: "Understand first",
            principle2: "Keep it practical",
            principle3: "Improve continuously"
        },

        experience: {

            eyebrow: "EXPERIENCE",

            title: "From work",
            titleMuted: "to software.",

            description: "Experience shaped around solving real business and operational problems with software.",

            item1: {
                type: "SOFTWARE DEVELOPMENT",
                title: "Automation & Business Systems",
                description: "Building desktop applications, automation workflows, inventory systems and browser tools around real operational needs."
            },

            item2: {
                type: "DEVELOPMENT",
                title: "C# / .NET Development",
                description: "Developing reporting tools, data-driven applications and software solutions designed to reduce manual work."
            },

            item3: {
                type: "CONTINUOUSLY BUILDING",
                title: "Learning by Building",
                description: "Continuously experimenting with new technologies while turning ideas into working software."
            }
        },

        contact: {

            eyebrow: "CONTACT",

            title: "Have a problem",
            titleMuted: "worth solving?",

            description: "If you have a project, workflow or technical problem that could benefit from software, feel free to reach out."
        },

        footer: {

            role: "Software Developer",

            status: "SYSTEM ONLINE",

            localTime: "LOCAL TIME"
        },

        modal: {

            problem: "The Problem",

            solution: "The Solution",

            challenges: "Technical Challenges",

            architecture: "Architecture",

            systemFlow: "SYSTEM FLOW"
        }

    }

};


/* =========================================================
   CURRENT LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("salva-language") || "tr";


/* =========================================================
   GET TRANSLATION
========================================================= */

function getTranslation(path) {

    const parts = path.split(".");

    let value =
        translations[currentLanguage];

    for (const part of parts) {

        if (
            value === undefined ||
            value === null
        ) {
            return "";
        }

        value = value[part];

    }

    return value ?? "";

}


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function applyLanguage(language) {

    if (!translations[language]) {
        language = "tr";
    }

    currentLanguage = language;

    localStorage.setItem(
        "salva-language",
        language
    );


    document.documentElement.lang =
        language;


    document.querySelectorAll(
        "[data-i18n]"
    ).forEach(element => {

        const key =
            element.dataset.i18n;

        const translation =
            getTranslation(key);

        if (
            translation !== undefined &&
            translation !== null
        ) {

            element.textContent =
                translation;

        }

    });


    document.querySelectorAll(
        ".language-button"
    ).forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.language === language
        );

    });


    document.title =
        language === "tr"
            ? "SALVA — Yazılım Geliştirici"
            : "SALVA — Software Developer";

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

document
    .querySelectorAll(".language-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                applyLanguage(
                    button.dataset.language
                );

            }
        );

    });


/* =========================================================
   DOM
========================================================= */

const pageLoader =
    document.getElementById("pageLoader");

const navbar =
    document.getElementById("navbar");

const mouseGlow =
    document.getElementById("mouseGlow");

const cursorBot =
    document.getElementById("cursorBot");

const botEyeLeft =
    document.getElementById("botEyeLeft");

const botEyeRight =
    document.getElementById("botEyeRight");

const yearElement =
    document.getElementById("year");

const localTimeElement =
    document.getElementById("localTime");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const projectModal =
    document.getElementById("projectModal");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

applyLanguage(currentLanguage);


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                pageLoader.classList.add(
                    "loaded"
                );

            },
            500
        );

    }
);


/* =========================================================
   YEAR
========================================================= */

yearElement.textContent =
    new Date().getFullYear();


/* =========================================================
   LOCAL TIME
========================================================= */

function updateLocalTime() {

    const now =
        new Date();

    const time =
        now.toLocaleTimeString(
            currentLanguage === "tr"
                ? "tr-TR"
                : "en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

    localTimeElement.textContent =
        time;

}

updateLocalTime();

setInterval(
    updateLocalTime,
    1000
);


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function handleNavbar() {

    if (window.scrollY > 30) {

        navbar.classList.add(
            "scrolled"
        );

    } else {

        navbar.classList.remove(
            "scrolled"
        );

    }

}

window.addEventListener(
    "scroll",
    handleNavbar,
    {
        passive: true
    }
);

handleNavbar();


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   MOUSE GLOW
========================================================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            mouseGlow.style.left =
                `${event.clientX}px`;

            mouseGlow.style.top =
                `${event.clientY}px`;

            mouseGlow.style.opacity =
                "1";

        }
    );

}


/* =========================================================
   CURSOR COMPANION (ROBOT)
========================================================= */

if (
    cursorBot &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    const botState = {
        targetX: window.innerWidth / 2,
        targetY: window.innerHeight / 2,
        botX: window.innerWidth / 2,
        botY: window.innerHeight / 2,
        started: false
    };

    const BOT_OFFSET_X = 28;
    const BOT_OFFSET_Y = 34;
    const EASE = 0.16;
    const EYE_RANGE = 3;


    window.addEventListener(
        "mousemove",
        event => {

            botState.targetX = event.clientX;
            botState.targetY = event.clientY;

            if (!botState.started) {

                botState.started = true;
                botState.botX = event.clientX;
                botState.botY = event.clientY;

                cursorBot.classList.add("is-visible");

            }

        }
    );


    window.addEventListener(
        "mouseleave",
        () => {
            cursorBot.classList.remove("is-visible");
        }
    );


    function updateBot() {

        botState.botX +=
            (botState.targetX - botState.botX) * EASE;

        botState.botY +=
            (botState.targetY - botState.botY) * EASE;

        cursorBot.style.transform =
            `translate3d(${botState.botX - BOT_OFFSET_X}px, ${botState.botY - BOT_OFFSET_Y}px, 0)`;


        // eyes glance toward the actual cursor position
        const dx = botState.targetX - botState.botX;
        const dy = botState.targetY - botState.botY;
        const distance = Math.hypot(dx, dy) || 1;

        const lookX =
            (dx / distance) * Math.min(EYE_RANGE, distance / 6);

        const lookY =
            (dy / distance) * Math.min(EYE_RANGE, distance / 6);

        botEyeLeft.setAttribute("cx", 25 + lookX);
        botEyeLeft.setAttribute("cy", 34 + lookY);

        botEyeRight.setAttribute("cx", 39 + lookX);
        botEyeRight.setAttribute("cy", 34 + lookY);


        requestAnimationFrame(updateBot);

    }

    requestAnimationFrame(updateBot);


    // occasional blink
    function scheduleBlink() {

        const delay = 2200 + Math.random() * 3200;

        setTimeout(() => {

            cursorBot.classList.add("is-blinking");

            setTimeout(() => {
                cursorBot.classList.remove("is-blinking");
            }, 140);

            scheduleBlink();

        }, delay);

    }

    scheduleBlink();


    // perks up near interactive elements
    const botAlertSelector =
        "a, button, .project-card, .language-button";

    document.addEventListener(
        "mouseover",
        event => {

            if (event.target.closest(botAlertSelector)) {
                cursorBot.classList.add("is-alert");
            }

        }
    );

    document.addEventListener(
        "mouseout",
        event => {

            if (event.target.closest(botAlertSelector)) {
                cursorBot.classList.remove("is-alert");
            }

        }
    );

}


/* =========================================================
   PROJECT CARDS
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {

        card.addEventListener(
            "click",
            event => {

                const projectId =
                    card.dataset.project;

                openProject(
                    projectId
                );

            }
        );

    }
);


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    const project =
        projects[projectId];

    if (!project) {
        return;
    }


    const tagsHTML =
        project.tags
            .map(
                tag =>
                    `<span>${tag}</span>`
            )
            .join("");


    const challenges =
        project.challenges[
            currentLanguage
        ];


    const challengesHTML =
        challenges
            .map(
                challenge =>
                    `<li>${challenge}</li>`
            )
            .join("");


    modalContent.innerHTML = `

        <span class="modal-project-number">

            ${project.number}
            —
            ${project.category[currentLanguage]}

        </span>


        <h2>
            ${project.title[currentLanguage]}
        </h2>


        <p class="modal-subtitle">

            ${project.subtitle[currentLanguage]}

        </p>


        <div class="modal-tags">

            ${tagsHTML}

        </div>


        <div class="modal-divider"></div>


        <div class="modal-grid">


            <div class="modal-block">

                <h4>
                    ${translations[currentLanguage].modal.problem}
                </h4>

                <p>
                    ${project.problem[currentLanguage]}
                </p>

            </div>


            <div class="modal-block">

                <h4>
                    ${translations[currentLanguage].modal.solution}
                </h4>

                <p>
                    ${project.solution[currentLanguage]}
                </p>

            </div>


            <div class="modal-block">

                <h4>
                    ${translations[currentLanguage].modal.challenges}
                </h4>

                <ul>

                    ${challengesHTML}

                </ul>

            </div>


            <div class="modal-block">

                <h4>
                    ${translations[currentLanguage].modal.architecture}
                </h4>

                <div class="architecture">

                    <strong>
                        ${translations[currentLanguage].modal.systemFlow}
                    </strong>

                    <br><br>

                    ${project.architecture}

                </div>

            </div>

        </div>

    `;


    projectModal.classList.add(
        "active"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    projectModal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    closeProject
);

modalBackdrop.addEventListener(
    "click",
    closeProject
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProject();

        }

    }
);


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const navbarHeight =
                        navbar.offsetHeight;


                    const targetPosition =
                        target
                            .getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        navbarHeight
                        -
                        20;


                    window.scrollTo({
                        top:
                            targetPosition,
                        behavior:
                            "smooth"
                    });

                }
            );

        }
    );


/* =========================================================
   PROJECT CARD TILT
========================================================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    projectCards.forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        (
                            (y - centerY) /
                            centerY
                        ) * -1.2;

                    const rotateY =
                        (
                            (x - centerX) /
                            centerX
                        ) * 1.2;

                    card.style.transform = `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-5px)
                    `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%cSALVA",
    "font-size:32px;font-weight:700;"
);

console.log(
    "%cSoftware Developer",
    "font-size:14px;color:#9b84ff;"
);

console.log(
    "%cIf you're reading this, you're probably curious.",
    "font-size:12px;color:#a7afb9;"
);

console.log(
    "%cLet's build something.",
    "font-size:12px;color:#45d483;"
);
