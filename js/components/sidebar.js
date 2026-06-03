class DashboardSidebar extends HTMLElement {
  connectedCallback() {
    // Mengambil atribut "active-page" dari tag HTML untuk menandai menu yang aktif otomatis
    const activePage = this.getAttribute("active-page") || "overview";

    this.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 240px;
                    background-color: #ffffff;
                    border-right: 1px solid #e2e8f0;
                    box-sizing: border-box;
                    flex-shrink: 0;
                }
                .dashboard-sidebar-inner {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 24px 16px;
                    box-sizing: border-box;
                }
                .sidebar-system-title h3 {
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #034c43;
                    margin: 0;
                }
                .sidebar-system-title p {
                    font-size: 0.72rem;
                    color: #64748b;
                    margin: 2px 0 20px 0;
                }
                .sidebar-nav-menu {
                    list-style: none;
                    padding: 0; 
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .sidebar-nav-menu li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 14px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #475569;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .sidebar-nav-menu a {
                    text-decoration: none; 
                    color: inherit;       
                }
                .sidebar-nav-menu li:hover {
                    background-color: #f1f5f9;
                    color: #034c43;
                }
                /* Kelas Aktif mengikuti warna maket */
                .sidebar-nav-menu li.active {
                    background-color: #7c6e11;
                    color: #ffffff;
                }
                .sidebar-status-pill {
                    margin-top: auto;
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: #475569;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px;
                    background-color: #f8fafc;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                }
                .status-indicator {
                    width: 8px;
                    height: 8px;
                    background-color: #10b981;
                    border-radius: 50%;
                    display: inline-block;
                }
            </style>
            
            <div class="dashboard-sidebar-inner">
                <div class="sidebar-system-title">
                    <h3>City Dashboard</h3>
                    <p>Eco-Monitoring System</p>
                </div>
                <ul class="sidebar-nav-menu">
                    <a href="dashboard.html"><li class="${activePage === "dashboard" ? "active" : ""}"><i class="fa-solid fa-table-columns"></i> Dashboard</li></a>
                    <a href="climate.html"><li class="${activePage === "climate tracking" ? "active" : ""}"><i class="fa-solid fa-chart-line"></i> Climate Tracking</li></a>
                    <a href="traffic.html"><li class="${activePage === "traffic" ? "active" : ""}"><i class="fa-solid fa-map-location-dot"></i> Live Traffic Map</li></a>
                    <a href="waste_management.html"><li class="${activePage === "waste-schedule" ? "active" : ""}"><i class="fa-solid fa-calendar-days"></i> Waste Schedule</li></a>
                    <a href="resources.html"><li class="${activePage === "resources" ? "active" : ""}"><i class="fa-solid fa-folder-open"></i> Resources</li></a>
                    
                    <li class="${activePage === "settings" ? "active" : ""}"><i class="fa-solid fa-gear"></i><a href="profile.html">Settings</a> </li>
                </ul>
            </div>
        `;
  }
}
customElements.define("dashboard-sidebar", DashboardSidebar);
