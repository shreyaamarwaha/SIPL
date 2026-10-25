# SIPL landing source

This folder contains the production landing site, served at `/` and reused for `/team`.

- `index.html` contains page content and the ordered script tags.
- `site.css` contains the page styles, in source order.
- `scripts/intro-story.js` runs the opening story.
- `scripts/page-router.js` handles hash-based section and team views.
- `scripts/mobile-navigation.js` controls the responsive navigation.
- `scripts/contact-modal.js` controls the contact dialog and submission.
- `scripts/investor-enquiry.js` handles the investor form state.
- `scripts/top-level-navigation.js` sends same-site links out of the embedded frame to the main website.

The markup uses Plus Jakarta Sans to match the rest of the SIPL website. Keep script tags in `index.html` in their current order because later scripts build on elements and handlers established earlier.
