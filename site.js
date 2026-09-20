/* Shared behaviour for every page: masthead hairline, mobile menu, and the
   scroll reveals.

   The reveal styles are scoped to html.js in styles.css, so nothing is hidden
   until this file confirms JavaScript ran. They are also inside a
   prefers-reduced-motion: no-preference query, so a reader who asks for less
   motion gets the finished page — the observer below still runs and still adds
   the class, it simply has no styles to animate. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // ---- masthead hairline once the page has scrolled ----
  var mast = document.getElementById('masthead');
  if (mast) {
    var onScroll = function () {
      mast.classList.toggle('scrolled', window.scrollY > 8);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- mobile menu ----
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('mast-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- scroll reveals ----
  // Number the children of a [data-stagger] group so siblings arrive in
  // sequence. --step lives in styles.css; the CSS multiplies it by --i.
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (el, i) {
      el.style.setProperty('--i', i);
    });
  });

  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // No IntersectionObserver (very old browser): show everything and stop.
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);   // once per element, never again
    });
  }, {
    // fire a little before the element is fully in view, so the movement has
    // finished by the time it reaches comfortable reading position
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.08
  });

  targets.forEach(function (el) { io.observe(el); });
})();
