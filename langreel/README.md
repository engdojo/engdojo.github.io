# Frozen — the live LangReel site is https://langreel.com

These pages stay only because **iOS 1.0 shipped with these URLs compiled in** and that
build can never be changed. `HomeScreen.jsx` and `PaywallScreen.jsx` in that release open
`https://engdojo.github.io/langreel/…`, which redirects here. Deleting these files breaks
the in-app Privacy Policy and Terms links for everyone still on 1.0.

Each page carries `<link rel="canonical">` pointing at its counterpart on
`langreel.com`, so search engines credit the new domain while these URLs keep serving.
GitHub Pages cannot return a 301, and a `<meta http-equiv="refresh">` would only bounce
1.0 users through a visible redirect for no benefit.

**Do not sync `website/langreel/` from the LangReel app repository over this directory.**
That directory is now the *build source* for langreel.com: its pages hold one copy of the
markup with `data-i18n` keys, and the text lives in `website/i18n/<lang>.json`. The pages
here still use the older `lang-pane` markup with the JA/EN toggle that `site.js` drives.
Copying the new source over these would delete the toggle and leave a Japanese-only page.

Edit these files here, directly, and only when something must stay accurate — the contact
address, or a legal correction. Everything else belongs on langreel.com.
