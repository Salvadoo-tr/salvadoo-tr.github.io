/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    efes: {
        number: "01",
        category: "DESKTOP AUTOMATION",
        title: "Efes Oto Fatura",

        subtitle:
            "A desktop automation system designed to automate invoice processing and repetitive data-entry workflows inside a legacy business application.",

        tags: [
            "C#",
            ".NET",
            "UI Automation",
            "PDF Processing",
            "Desktop Automation"
        ],

        problem:
            "Manual invoice processing can involve repetitive data entry, application navigation and validation steps. The goal was to turn this workflow into a more predictable software-driven process.",

        solution:
            "A C#/.NET automation layer interacts with the existing desktop application, processes invoice data and coordinates the required workflow steps.",

        challenges: [
            "Working with a legacy desktop application",
            "Finding and interacting with dynamic UI elements",
            "Synchronizing automation steps",
            "Handling unexpected application states",
            "Parsing invoice information",
            "Designing recovery and error handling"
        ],

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
        category: "BUSINESS SYSTEM",
        title: "Claim Depo",

        subtitle:
            "An internal inventory and claim management system designed around real operational workflows.",

        tags: [
            "C#",
            "WinForms",
            "SQL Server",
            "SQLite",
            "DataGridView",
            "Inventory"
        ],

        problem:
            "Operational inventory workflows require reliable data management, filtering, stock tracking and clear visibility into current records.",

        solution:
            "A desktop application provides structured data management, filtering, inventory operations, dashboards and database-backed workflows.",

        challenges: [
            "Keeping UI state synchronized with database state",
            "Designing reusable filtering logic",
            "Handling stock changes consistently",
            "Implementing soft delete workflows",
            "Backup and recovery planning",
            "Database migration strategy"
        ],

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
        category: "BROWSER AUTOMATION",
        title: "Service Box Automation",

        subtitle:
            "A Chrome extension that reads VINs from Excel, checks campaign information and writes structured results back into the spreadsheet.",

        tags: [
            "JavaScript",
            "Chrome Extension",
            "Manifest V3",
            "Excel",
            "Browser Automation"
        ],

        problem:
            "Checking multiple VINs manually and transferring campaign information into Excel creates unnecessary repetitive work.",

        solution:
            "A browser extension processes VINs from an Excel file, navigates the target workflow, detects campaign information and updates the corresponding spreadsheet columns.",

        challenges: [
            "Working with dynamic web interfaces",
            "Waiting for asynchronous page states",
            "Extracting campaign information reliably",
            "Mapping results back to Excel rows",
            "Handling failed or incomplete searches",
            "Building a usable extension interface"
        ],

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
        category: "INVENTORY / BARCODE",
        title: "Turgut",

        subtitle:
            "A desktop inventory workflow integrating barcode scanning, TCP communication and local database storage.",

        tags: [
            "C#",
            "TCP",
            "SQLite",
            "Zebra",
            "Barcode",
            "DataWedge"
        ],

        problem:
            "Barcode-driven inventory workflows need fast communication between the scanning device, the application and the local data store.",

        solution:
            "A TCP-based barcode listener receives scanner input and passes structured barcode data into the desktop application and SQLite persistence layer.",

        challenges: [
            "Receiving barcode data over TCP",
            "Integrating Zebra scanning hardware",
            "Synchronizing scanner events with UI state",
            "Persisting records locally",
            "Dynamic inventory filtering",
            "Maintaining data after application publishing"
        ],

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
   DOM
========================================================= */

const pageLoader = document.getElementById("pageLoader");

const navbar = document.getElementById("navbar");

const mouseGlow = document.getElementById("mouseGlow");

const yearElement = document.getElementById("year");

const localTimeElement = document.getElementById("localTime");

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
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        pageLoader.classList.add("loaded");

    }, 500);

});


/* =========================================================
   YEAR
========================================================= */

yearElement.textContent =
    new Date().getFullYear();


/* =========================================================
   LOCAL TIME
========================================================= */

function updateLocalTime() {

    const now = new Date();

    const time = now.toLocaleTimeString(
        "en-US",
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

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

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
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

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

function openProject(
    projectId
) {

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


    const challengesHTML =
        project.challenges
            .map(
                challenge =>
                    `<li>${challenge}</li>`
            )
            .join("");


    modalContent.innerHTML = `

        <span class="modal-project-number">
            ${project.number} — ${project.category}
        </span>

        <h2>
            ${project.title}
        </h2>

        <p class="modal-subtitle">
            ${project.subtitle}
        </p>

        <div class="modal-tags">
            ${tagsHTML}
        </div>

        <div class="modal-divider"></div>

        <div class="modal-grid">

            <div class="modal-block">

                <h4>
                    The Problem
                </h4>

                <p>
                    ${project.problem}
                </p>

            </div>


            <div class="modal-block">

                <h4>
                    The Solution
                </h4>

                <p>
                    ${project.solution}
                </p>

            </div>


            <div class="modal-block">

                <h4>
                    Technical Challenges
                </h4>

                <ul>
                    ${challengesHTML}
                </ul>

            </div>


            <div class="modal-block">

                <h4>
                    Architecture
                </h4>

                <div class="architecture">
                    <strong>
                        SYSTEM FLOW
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
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        navbarHeight
                        -
                        20;


                    window.scrollTo(
                        {
                            top: targetPosition,
                            behavior: "smooth"
                        }
                    );

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
                        ((y - centerY) /
                            centerY) *
                        -1.2;

                    const rotateY =
                        ((x - centerX) /
                            centerX) *
                        1.2;

                    card.style.transform =
                        `
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
