class TopNavbar extends HTMLElement {
  connectedCallback() {
    // Mengambil halaman aktif dari atribut tag (default ke 'home')
    const activeNav = this.getAttribute("active-nav") || "home";

    this.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                .main-top-nav {
                    height: 60px;
                    background-color: #034c43;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 24px;
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif;
                }
                .nav-logo {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    user-select: none;
                }
                .nav-logo i {
                    font-size: 1.1rem;
                }
                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 28px;
                    margin: 0;
                    padding: 0;
                }
                .nav-links li {
                    display: flex;
                    align-items: center;
                }
                .nav-links a {
                    text-decoration: none;
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.75);
                    padding: 6px 0;
                    transition: color 0.2s ease;
                    position: relative;
                }
                .nav-links a:hover {
                    color: #ffffff;
                }
                /* Garis bawah kuning untuk menandakan menu aktif sesuai maket */
                .nav-links a.active {
                    color: #ffffff;
                    font-weight: 600;
                }
                .nav-links a.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #eab308; /* Kuning aksen emas */
                    border-radius: 2px;
                }
                .nav-right-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    color: #ffffff;
                }
                .nav-icon-btn {
                    color: #ffffff;
                    opacity: 0.85;
                    cursor: pointer;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .nav-icon-btn:hover {
                    opacity: 1;
                    transform: scale(1.05);
                }
                .profile-icon {
                    font-size: 1.25rem; /* Ukuran icon profile sedikit lebih dominan */
                }
            </style>
            
            <nav class="main-top-nav">
                <div class="nav-logo">
                    <i class="fa-solid fa-leaf"></i> Batam EcoPortal
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
        `;
  }
}

// Mendaftarkan elemen kustom ke browser
customElements.define("top-navbar", TopNavbar);
