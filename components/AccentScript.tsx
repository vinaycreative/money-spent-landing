export function AccentScript() {
  const script = `
    (function() {
      try {
        var valid = ['emerald','indigo','rose','amber','sky','violet'];
        var key = localStorage.getItem('ms-accent-key');
        if (!key || valid.indexOf(key) === -1) key = 'emerald';
        document.documentElement.classList.add('accent-' + key);
      } catch (e) {
        document.documentElement.classList.add('accent-emerald');
      }
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
