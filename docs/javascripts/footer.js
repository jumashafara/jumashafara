// Enhance footer with custom branding
function enhanceFooter() {
  const footerCopyright = document.querySelector('.md-footer-copyright');

  if (footerCopyright) {
    // Check if link already exists
    const existingLink = footerCopyright.querySelector('a[href*="dataidea.org"]');

    if (existingLink) {
      // Link already exists, just ensure proper styling
      existingLink.style.color = '#008374';
      existingLink.style.fontWeight = '600';
      existingLink.style.textDecoration = 'none';
      existingLink.style.transition = 'color 0.3s ease';

      // Add hover effect
      existingLink.addEventListener('mouseenter', function() {
        this.style.color = '#00a592';
        this.style.textDecoration = 'underline';
      });

      existingLink.addEventListener('mouseleave', function() {
        this.style.color = '#008374';
        this.style.textDecoration = 'none';
      });
    }
  }

  // Remove any "Made with Material for MkDocs" text
  const footerMeta = document.querySelector('.md-footer-meta__inner');
  if (footerMeta) {
    const paragraphs = footerMeta.querySelectorAll('p');
    paragraphs.forEach(p => {
      const text = p.textContent || p.innerText;
      if (text.includes('Made with Material for MkDocs') ||
          text.includes('Material for MkDocs')) {
        // Remove the entire generator paragraph
        p.remove();
      }
    });
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', enhanceFooter);

// Also run after a short delay to catch dynamically loaded content
setTimeout(enhanceFooter, 100);
setTimeout(enhanceFooter, 500);

// Use MutationObserver to catch any dynamic changes
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(function(mutations) {
    enhanceFooter();
  });

  // Wait for body to be available
  const startObserver = () => {
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      setTimeout(startObserver, 100);
    }
  };

  startObserver();
}

