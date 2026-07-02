// CareerOS Cookie Consent Banner — v1.4.0
// Include this script in all pages for GDPR compliance

(function() {
  const CONSENT_KEY = 'careeros_cookie_consent';
  
  function getConsent() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY) || '{}'); } catch(e) { return {}; }
  }
  
  function saveConsent(consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      ...consent,
      timestamp: new Date().toISOString(),
      version: '1.4.0'
    }));
  }
  
  function showBanner() {
    if (getConsent().accepted) return;
    
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 10000;
      background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px);
      border-top: 1px solid #334155; padding: 16px 24px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px; flex-wrap: wrap; font-family: 'Segoe UI', system-ui, sans-serif;
    `;
    
    banner.innerHTML = `
      <div style="flex: 1; min-width: 200px;">
        <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
          We use cookies to improve your experience, analyze traffic, and personalize content. 
          By clicking "Accept", you agree to our <a href="privacy.html" style="color: #6366f1; text-decoration: none;">Privacy Policy</a>.
        </p>
      </div>
      <div style="display: flex; gap: 8px; flex-shrink: 0;">
        <button id="cookie-customize" style="
          padding: 8px 16px; background: transparent; border: 1px solid #334155;
          border-radius: 8px; color: #94a3b8; font-size: 13px; font-weight: 600;
          cursor: pointer; font-family: inherit;
        ">Customize</button>
        <button id="cookie-accept" style="
          padding: 8px 20px; background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 8px; color: white; font-size: 13px;
          font-weight: 600; cursor: pointer; font-family: inherit;
        ">Accept All</button>
      </div>
    `;
    
    document.body.appendChild(banner);
    
    document.getElementById('cookie-accept').addEventListener('click', () => {
      saveConsent({ accepted: true, essential: true, analytics: true, marketing: true });
      banner.remove();
    });
    
    document.getElementById('cookie-customize').addEventListener('click', () => {
      showCustomizeModal(banner);
    });
  }
  
  function showCustomizeModal(banner) {
    banner.style.display = 'none';
    
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; inset: 0; z-index: 10001;
      background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px; font-family: 'Segoe UI', system-ui, sans-serif;
    `;
    
    modal.innerHTML = `
      <div style="
        background: #1e293b; border: 1px solid #334155; border-radius: 12px;
        padding: 28px; max-width: 480px; width: 100%; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4);
      ">
        <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 700;">Cookie Preferences</h3>
        <p style="margin: 0 0 20px; font-size: 13px; color: #94a3b8;">Manage your cookie preferences below.</p>
        
        <div style="margin-bottom: 16px; padding: 12px; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="font-size: 14px;">Essential</strong>
            <span style="font-size: 12px; color: #22c55e; font-weight: 600;">Required</span>
          </div>
          <p style="margin: 0; font-size: 12px; color: #64748b;">Necessary for the platform to function. Cannot be disabled.</p>
        </div>
        
        <div style="margin-bottom: 16px; padding: 12px; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="font-size: 14px;">Analytics</strong>
            <label style="position: relative; display: inline-block; width: 40px; height: 22px;">
              <input type="checkbox" id="opt-analytics" checked style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: pointer; inset: 0; background: #6366f1; border-radius: 22px; transition: 0.2s;">
                <span style="position: absolute; content: ''; height: 16px; width: 16px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.2s; transform: translateX(18px);"></span>
              </span>
            </label>
          </div>
          <p style="margin: 0; font-size: 12px; color: #64748b;">Helps us understand how you use the platform to improve it.</p>
        </div>
        
        <div style="margin-bottom: 20px; padding: 12px; background: #0f172a; border-radius: 8px; border: 1px solid #334155;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="font-size: 14px;">Marketing</strong>
            <label style="position: relative; display: inline-block; width: 40px; height: 22px;">
              <input type="checkbox" id="opt-marketing" style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: pointer; inset: 0; background: #334155; border-radius: 22px; transition: 0.2s;">
                <span style="position: absolute; content: ''; height: 16px; width: 16px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.2s;"></span>
              </span>
            </label>
          </div>
          <p style="margin: 0; font-size: 12px; color: #64748b;">Used to deliver personalized offers and updates.</p>
        </div>
        
        <div style="display: flex; gap: 8px;">
          <button id="save-preferences" style="
            flex: 1; padding: 10px; background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border: none; border-radius: 8px; color: white; font-size: 14px;
            font-weight: 600; cursor: pointer; font-family: inherit;
          ">Save Preferences</button>
          <button id="cancel-modal" style="
            flex: 1; padding: 10px; background: #334155; border: none;
            border-radius: 8px; color: #f8fafc; font-size: 14px;
            font-weight: 600; cursor: pointer; font-family: inherit;
          ">Cancel</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', function() {
        const span = this.nextElementSibling;
        const knob = span.querySelector('span');
        if (this.checked) {
          span.style.background = '#6366f1';
          knob.style.transform = 'translateX(18px)';
        } else {
          span.style.background = '#334155';
          knob.style.transform = 'translateX(0)';
        }
      });
    });
    
    document.getElementById('save-preferences').addEventListener('click', () => {
      saveConsent({
        accepted: true,
        essential: true,
        analytics: document.getElementById('opt-analytics').checked,
        marketing: document.getElementById('opt-marketing').checked
      });
      modal.remove();
    });
    
    document.getElementById('cancel-modal').addEventListener('click', () => {
      modal.remove();
      banner.style.display = 'flex';
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();