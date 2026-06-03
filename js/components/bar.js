class AppNavigation extends HTMLElement {
  connectedCallback() {
    // 1. AMANKAN KONTEN ASLI: Simpan main content yang lo tulis di HTML agar tidak terhapus
    const originalContent = this.innerHTML;

    // Mengambil menu aktif dari atribut HTML component
    const activePage = this.getAttribute("active-page") || "dashboard";

    // 2. INJECT TEMPLATE NAVIGASI
    this.innerHTML = `
            <link rel="stylesheet" href="css/components.css">

            <nav class="main-top-nav">
                <div class="nav-left-group">
                    <button class="topbar-hamburger-btn" id="menuToggle" title="Open Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div class="nav-logo">
                        <i class="fa-solid fa-leaf"></i> Batam EcoPortal
                    </div>
                </div>
                
                <div class="nav-right-actions">
                    <div class="nav-icon-btn" title="Search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div class="nav-icon-btn profile-icon" title="Profile Settings">
                        <i class="fa-regular fa-circle-user"></i>
                    </div>
                </div>
            </nav>

            <div class="navigation-layout-container">
                <aside class="dashboard-sidebar" id="sidebarMenu">
                    <div class="dashboard-sidebar-inner">
                        <div class="sidebar-system-title">
                            <h3>City Dashboard</h3>
                            <p>Eco-Monitoring System</p>
                        </div>
                        <ul class="sidebar-nav-menu">
                            <a href="dashboard.html"><li class="${activePage === "dashboard" ? "active" : ""}"><i class="fa-solid fa-table-columns"></i> Dashboard</li></a>
                            <a href="climate.html"><li class="${activePage === "climate" ? "active" : ""}"><i class="fa-solid fa-chart-line"></i> Climate Tracking</li></a>
                            <a href="traffic.html"><li class="${activePage === "traffic" ? "active" : ""}"><i class="fa-solid fa-map-location-dot"></i> Live Traffic Map</li></a>
                            <a href="waste_management.html"><li class="${activePage === "waste" ? "active" : ""}"><i class="fa-solid fa-calendar-days"></i> Waste Schedule</li></a>
                            <a href="resources.html"><li class="${activePage === "resources" ? "active" : ""}"><i class="fa-solid fa-folder-open"></i> Resources</li></a>
                            <a href="profile.html"><li class="${activePage === "settings" ? "active" : ""}"><i class="fa-solid fa-gear"></i> Settings</li></a> 
                        </ul>
                    </div>
                </aside>

                <div class="sidebar-mobile-backdrop" id="sidebarBackdrop"></div>

                <main class="page-content-slot" id="mainContentContainer">
                    </main>
            </div>
        `;

    // 3. KEMBALIKAN KONTEN ASLI: Masukkan kembali main content lo ke dalam wadah khusus
    this.querySelector("#mainContentContainer").innerHTML = originalContent;

    // 4. LOGIC TOGGLE HAMBURGER MENU
    const btnToggle = this.querySelector("#menuToggle");
    const sidebar = this.querySelector("#sidebarMenu");
    const backdrop = this.querySelector("#sidebarBackdrop");

    const toggleMenu = () => {
      sidebar.classList.toggle("opened");
    };

    btnToggle.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", toggleMenu);
  }
}

// Mendaftarkan komponen tunggal baru
customElements.define("app-navigation", AppNavigation);
