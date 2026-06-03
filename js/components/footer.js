class PortalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <style>
                :host { display: block; width: 100%; margin-top: auto; }
                .main-portal-footer {
                    background-color: #023630;
                    padding: 24px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.75rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    box-sizing: border-box;
                }
                .footer-left h4 {
                    color: #ffffff;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin: 0 0 4px 0;
                }
                .footer-left p { margin: 0; opacity: 0.8; font-size: 0.7rem; line-height: 1.4; }
                .footer-right-links { display: flex; gap: 20px; }
                .footer-right-links a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                }
                .footer-right-links a:hover { color: #ffffff; text-decoration: underline; }
            </style>
            <footer class="main-portal-footer">
                <div class="footer-left">
                    <h4>Batam EcoPortal</h4>
                    <p>© 2026 Batam City Environmental Stewardship.<br>Monitoring urban mobility through data-driven transparency.</p>
                </div>
                <div class="footer-right-links">
                    <a href="#">Environmental Policy</a>
                    <a href="#">Public API</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Legal</a>
                </div>
            </footer>
        `;
  }
}
customElements.define("portal-footer", PortalFooter);
