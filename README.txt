MONEY MOVES INDIA — WEBSITE FILES
==================================

WHAT'S INSIDE
-------------
index.html            → Homepage
blog.html              → All Articles page (with category filter buttons)
about.html             → About page
contact.html           → Contact page
privacy-policy.html    → Privacy Policy (needed for AdSense)
terms.html             → Terms & Conditions (needed for AdSense)
disclaimer.html        → Financial disclaimer (needed for AdSense)
posts/                 → All 10 blog articles, one HTML file each
css/style.css          → All the design/styling for every page
js/script.js           → Mobile menu + blog filter buttons
images/                → Empty folder — put any photos you want to add here

HOW TO PUT THIS LIVE ON YOUR GITHUB PAGES SITE
------------------------------------------------
You're using GitHub Pages (repo: shivanshchaurasia12-cmyk/moneymovesindia.com),
so do this:

1. Go to github.com and open your moneymovesindia.com repository.
2. For every OLD file at the top level (index.html, blog.html, about.html,
   contact.html, privacy-policy.html, terms.html, disclaimer.html, and
   anything inside an old posts/ folder) — click into the file, click the
   trash/delete icon, and commit the delete. This avoids old and new files
   mixing together.
3. Click "Add file" → "Upload files" (top right of the repo's file list).
4. Drag in EVERYTHING from inside this "mmi" folder (not the mmi folder
   itself — its contents: index.html, blog.html, about.html, etc., plus
   the whole css, js, and posts folders).
5. Scroll down and click "Commit changes".
6. Wait about 1-2 minutes, then visit
   https://shivanshchaurasia12-cmyk.github.io/moneymovesindia.com/
   and check:
   - Homepage loads
   - Click each nav link (Trading Basics, Side Income, Money Mistakes,
     Tools & Reviews, About) — they should all work
   - Click into a couple of articles from the blog page
   - Try it on your phone too — shrink your browser window to check
     the mobile menu (the three-line icon top right)

IF SOMETHING LOOKS BROKEN
--------------------------
- Blank page or missing styling → double check css/style.css was
  uploaded to a folder literally named "css" (lowercase).
- Articles not opening → double check the posts/ folder uploaded
  with all 10 files inside it.
- Menu not working on mobile → double check js/script.js uploaded.

ADSENSE NOTE
------------
This version was built with AdSense's content policies in mind —
real, original articles (not AI-spun), working Privacy Policy, Terms,
and Disclaimer pages, and no misleading claims. That said, Claude
already flagged an important separate issue in chat: if the AdSense
ACCOUNT was previously disabled for invalid traffic, a redesign alone
won't fix that — it's tied to the Google account, not the website.
