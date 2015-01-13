var _         = require('lodash');
var Util      = require('./Util.js');
var Q         = require('q');
var request   = require('request');

var KimFilter = require('./index.js');

var data = {
  "name": "function_filters",
  "count": 30,
  "frequency": "Manual Crawl",
  "version": 3,
  "newresults": true,
  "lastrunstatus": "success",
  "lastsuccess": "Tue Jan 06 2015 02:43:31 GMT+0000 (UTC)",
  "thisversionstatus": "success",
  "thisversionrun": "Tue Jan 06 2015 02:43:29 GMT+0000 (UTC)",
  "results": {
    "News": [
      {
        "ID": "1.",
        "Title": {
          "href": "https://stories.californiasunday.com/2015-01-04/begich-towers-whittier-alaska/",
          "text": "A town of about 200 people, almost all of whom live in the same building"
        },
        "Karma": "329 points"
      },
      {
        "ID": "2.",
        "Title": {
          "href": "http://www.ifc0nfig.com/moonpig-vulnerability/",
          "text": "Moonpig.com Vulnerability – Exposes customer results"
        },
        "Karma": "171 points"
      },
      {
        "ID": "3.",
        "Title": {
          "href": "http://iquantny.tumblr.com/post/107245431809/how-software-in-half-of-nyc-cabs-generates-5-2",
          "text": "How Software in Half of NYC Cabs Generates $5.2M a Year in Extra Tips"
        },
        "Karma": "145 points"
      },
      {
        "ID": "4.",
        "Title": {
          "href": "http://www.spacetelescope.org/news/heic1502/",
          "text": "Hubble captures the sharpest ever view of Andromeda Galaxy"
        },
        "Karma": "100 points"
      },
      {
        "ID": "5.",
        "Title": {
          "href": "https://wit.ai/blog/2015/01/05/wit-ai-facebook",
          "text": "Wit.ai (YC W14) Is Joining Facebook"
        },
        "Karma": "128 points"
      },
      {
        "ID": "6.",
        "Title": {
          "href": "http://www.panic.com/blog/the-2014-panic-report/",
          "text": "The 2014 Panic Report"
        },
        "Karma": "123 points"
      },
      {
        "ID": "7.",
        "Title": {
          "href": "http://www.donotlick.com/2015/01/05/8-increase-in-reddit-account-registrations/",
          "text": "CSS changes that increased Reddit account creation by 200K yearly users"
        },
        "Karma": "42 points"
      },
      {
        "ID": "8.",
        "Title": {
          "href": "http://cactusformac.com/",
          "text": "Cactus for Mac – A fast, easy and free static site generator"
        },
        "Karma": "81 points"
      },
      {
        "ID": "9.",
        "Title": {
          "href": "https://www.wordsapi.com/",
          "text": "Show HN: WordsAPI"
        },
        "Karma": "103 points"
      },
      {
        "ID": "10.",
        "Title": {
          "href": "http://www.plosone.org/article/info:doi/10.1371/journal.pone.0083325&",
          "text": "Identifiable Images of Bystanders Extracted from Corneal Reflections (2013)"
        },
        "Karma": "144 points"
      },
      {
        "ID": "11.",
        "Title": {
          "href": "http://dev.stephendiehl.com/fun/",
          "text": "Write You a Haskell: Building a modern functional compiler from first principles"
        },
        "Karma": "363 points"
      },
      {
        "ID": "12.",
        "Title": {
          "href": "https://blog.compose.io/new-year-new-resultsbase-postgresql-on-compose/",
          "text": "Now available: auto-scaling PostgreSQL deployments"
        },
        "Karma": "109 points"
      },
      {
        "ID": "13.",
        "Title": {
          "href": "http://www.nytimes.com/2015/01/06/business/media/dish-network-announces-web-based-pay-tv-offering.html",
          "text": "Dish Network Announces Web-Based Pay TV Offering"
        },
        "Karma": "50 points"
      },
      {
        "ID": "14.",
        "Title": {
          "href": "http://hpiers.obspm.fr/iers/bul/bulc/bulletinc.dat",
          "text": "A positive leap second will be introduced at the end of June 2015"
        },
        "Karma": "174 points"
      },
      {
        "ID": "15.",
        "Title": {
          "href": "http://www.nytimes.com/2015/01/05/arts/writers-say-they-feel-censored-by-surveillance.html?_r=0",
          "text": "Writers Say They Feel Censored by Surveillance"
        },
        "Karma": "191 points"
      },
      {
        "ID": "16.",
        "Title": {
          "href": "http://www.nytimes.com/aponline/2014/12/30/us/ap-us-georgia-website-hack.html?_r=0",
          "text": "Georgia Tech Student Indicted in UGA Hack"
        },
        "Karma": "70 points"
      },
      {
        "ID": "17.",
        "Title": {
          "href": "http://chrome.blogspot.com/2015/01/introducing-google-cast-for-audio.html",
          "text": "Introducing Google Cast for audio"
        },
        "Karma": "203 points"
      },
      {
        "ID": "18.",
        "Title": {
          "href": "http://econlog.econlib.org/archives/2015/01/diversity_of_th.html",
          "text": "Diversity of the Mind"
        },
        "Karma": "43 points"
      },
      {
        "ID": "19.",
        "Title": {
          "href": "http://www.bloomberg.com/news/2015-01-05/verizon-said-to-approach-aol-about-possible-takeover-or-venture.html",
          "text": "Verizon Said to Approach AOL About Possible Takeover"
        },
        "Karma": "12 points"
      },
      {
        "ID": "20.",
        "Title": {
          "href": "https://github.com/philipwalton/flexbugs/",
          "text": "Flexbugs: a list of flexbox bugs and cross-browser solutions to them"
        },
        "Karma": "3 points"
      },
      {
        "ID": "21.",
        "Title": {
          "href": "https://news.ycombinator.com/item?id=8842298",
          "text": "Teespring (YC W13) Is Hiring a Senior UI/Front-End Engineer"
        },
        "Karma": ""
      },
      {
        "ID": "22.",
        "Title": {
          "href": "http://arstechnica.com/gaming/2015/01/pokemon-plays-twitch-how-a-robot-got-irc-running-on-an-unmodified-snes/",
          "text": "Pokémon plays Twitch: How a robot got IRC running on an unmodified SNES"
        },
        "Karma": "117 points"
      },
      {
        "ID": "23.",
        "Title": {
          "href": "https://chatsecure.org/blog/chatsecure-ios-v3-released/",
          "text": "Show HN: ChatSecure iOS v3.0 (OTR + Tor + XMPP)"
        },
        "Karma": "59 points"
      },
      {
        "ID": "24.",
        "Title": {
          "href": "http://archive.wired.com/wired/archive/1.04/gibson.html",
          "text": "Disneyland with the Death Penalty (1993)"
        },
        "Karma": "100 points"
      },
      {
        "ID": "25.",
        "Title": {
          "href": "http://www.wired.com/2012/10/ff-why-products-fail/all/",
          "text": "Why Things Fail: From Tires to Helicopter Blades (2012)"
        },
        "Karma": "79 points"
      },
      {
        "ID": "26.",
        "Title": {
          "href": "http://www.economist.com/news/briefing/21637355-freelance-workers-available-moments-notice-will-reshape-nature-companies-and",
          "text": "The future of work: There’s an app for that"
        },
        "Karma": "59 points"
      },
      {
        "ID": "27.",
        "Title": {
          "href": "https://www.storyworth.com",
          "text": "Story Worth – privately collect and share family stories"
        },
        "Karma": "26 points"
      },
      {
        "ID": "28.",
        "Title": {
          "href": "http://lispblog.xach.com/post/107215169193/corman-lisp-sources-are-now-available",
          "text": "Corman Lisp sources are now available"
        },
        "Karma": "158 points"
      },
      {
        "ID": "29.",
        "Title": {
          "href": "http://www.gq.com/news-politics/201501/chinas-richest",
          "text": "The Bling Dynasty – The Nouveau Riche in China"
        },
        "Karma": "29 points"
      },
      {
        "ID": "30.",
        "Title": {
          "href": "https://www.youtube.com/watch?v=XNqOU4jx62I",
          "text": "Onewheel [video]"
        },
        "Karma": "66 points"
      }
    ]
  }
};

var data_bypage = {
  "name": "function_filters",
  "count": 120,
  "frequency": "Manual Crawl",
  "version": 8,
  "newresults": true,
  "lastrunstatus": "success",
  "lastsuccess": "Fri Jan 09 2015 19:52:30 GMT+0000 (UTC)",
  "thisversionstatus": "success",
  "thisversionrun": "Fri Jan 09 2015 19:52:19 GMT+0000 (UTC)",
  "results": [
    {
      "page": "1",
      "url": "https://news.ycombinator.com/news?p=1",
      "News": [
        {
          "ID": "1",
          "Title": {
            "href": "http://blog.rust-lang.org/2015/01/09/Rust-1.0-alpha.html",
            "text": "Announcing Rust 1.0 Alpha"
          },
          "Karma": "294 points"
        },
        {
          "ID": "2",
          "Title": {
            "href": "http://www.johnskylar.com/post/107416685924/a-career-in-science-will-cost-you-your-firstborn",
            "text": "A Career in Science Will Cost You Your Firstborn"
          },
          "Karma": "189 points"
        },
        {
          "ID": "3",
          "Title": {
            "href": "http://thorconpower.com/",
            "text": "ThorCon Power"
          },
          "Karma": "70 points"
        },
        {
          "ID": "4",
          "Title": {
            "href": "http://news.stanford.edu/news/2014/december/ai-century-study-121614.html",
            "text": "Stanford to host 100-year study on artificial intelligence"
          },
          "Karma": "39 points"
        },
        {
          "ID": "5",
          "Title": {
            "href": "http://grack.com/blog/2015/01/09/abusing-css3-selectors/",
            "text": "Abusing CSS3's nth-child selector to invent new ones"
          },
          "Karma": "34 points"
        },
        {
          "ID": "6",
          "Title": {
            "href": "http://krebsonsecurity.com/2015/01/lizard-stresser-runs-on-hacked-home-routers/",
            "text": "Lizard Stresser Runs on Hacked Home Routers"
          },
          "Karma": "67 points"
        },
        {
          "ID": "7",
          "Title": {
            "href": "http://www.braveclojure.com/core-async/",
            "text": "Master Concurrent Processes with core.async"
          },
          "Karma": "93 points"
        },
        {
          "ID": "8",
          "Title": {
            "href": "https://newscientist.com/article/dn26753?cmpid=NLC%7CNSNS%7C2015-0108-GLOBAL",
            "text": "Mathematician's anger over his unread 500-page proof"
          },
          "Karma": "38 points"
        },
        {
          "ID": "9",
          "Title": {
            "href": "http://arstechnica.com/science/2015/01/supermassive-black-hole-binary-discovered/",
            "text": "Supermassive Black Hole Binary Discovered"
          },
          "Karma": "38 points"
        },
        {
          "ID": "10",
          "Title": {
            "href": "https://github.com/prakhar1989/awesome-courses",
            "text": "List of University Courses for Learning Computer Science"
          },
          "Karma": "231 points"
        },
        {
          "ID": "11",
          "Title": {
            "href": "http://modong.github.io/pcc-page",
            "text": "PCC: Performance-oriented Congestion Control"
          },
          "Karma": "48 points"
        },
        {
          "ID": "12",
          "Title": {
            "href": "http://blog.fogcreek.com/increase-defect-detection-with-our-code-review-checklist-example",
            "text": "Code Review Checklist"
          },
          "Karma": "142 points"
        },
        {
          "ID": "13",
          "Title": {
            "href": "http://www.wsj.com/articles/box-inc-expects-to-raise-up-to-186-9-million-in-ipo-1420805949",
            "text": "Box Moves Ahead With IPO"
          },
          "Karma": "21 points"
        },
        {
          "ID": "14",
          "Title": {
            "href": "http://2ld.de/edidoom/",
            "text": "Intel Edison-based video game console playing Doom"
          },
          "Karma": "28 points"
        },
        {
          "ID": "15",
          "Title": {
            "href": "http://enjoythemusic.com/hificritic/vol5_no3/listening_to_storage.htm",
            "text": "Significant sound quality differences between digital music storage technologies"
          },
          "Karma": "16 points"
        },
        {
          "ID": "16",
          "Title": {
            "href": "http://www.businessweek.com/articles/2015-01-08/takadu-helps-israel-be-a-most-efficient-water-manager#r=hp-lst",
            "text": "Israel's water ninja"
          },
          "Karma": "14 points"
        },
        {
          "ID": "17",
          "Title": {
            "href": "http://solsticlipse.com/2015/01/09/intel-real-sense-camera-on-linux.html",
            "text": "Intel RealSense camera on Linux"
          },
          "Karma": "16 points"
        },
        {
          "ID": "18",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8862542",
            "text": "What does it take to run a web app with 5K – 10K users?"
          },
          "Karma": "120 points"
        },
        {
          "ID": "19",
          "Title": {
            "href": "http://techeffigytutorials.blogspot.com/2015/01/markov-chains-explained.html",
            "text": "Markov Chains Explained"
          },
          "Karma": "19 points"
        },
        {
          "ID": "20",
          "Title": {
            "href": "http://blogs.wsj.com/digits/2015/01/08/google-wants-to-sell-you-auto-insurance/",
            "text": "Google Wants to Sell You Auto Insurance"
          },
          "Karma": "13 points"
        },
        {
          "ID": "21",
          "Title": {
            "href": "https://github.com/unbit/spockfs",
            "text": "SpockFS – An HTTP-based network filesystem"
          },
          "Karma": "10 points"
        },
        {
          "ID": "22",
          "Title": {
            "href": "http://peertopeer.io/",
            "text": "Peer to Peer – Hone your skills by watching live coding videos"
          },
          "Karma": "25 points"
        },
        {
          "ID": "23",
          "Title": {
            "href": "https://ginnabaker.wordpress.com/2014/12/06/nothing-you-can-do-impresses-me/",
            "text": "“Nothing you can do impresses me”"
          },
          "Karma": "125 points"
        },
        {
          "ID": "24",
          "Title": {
            "href": "http://azure.microsoft.com/blog/2015/01/08/azure-is-now-bigger-faster-more-open-and-more-secure/",
            "text": "Azure is now bigger, faster, more open, and more secure – Microsoft Azure Blog"
          },
          "Karma": "3 points"
        },
        {
          "ID": "25",
          "Title": {
            "href": "https://www.acritelli.com/hacking-voip-decrypting-sdes-protected-srtp-phone-calls/",
            "text": "Decrypting SDES Protected SRTP Phone Calls"
          },
          "Karma": "8 points"
        },
        {
          "ID": "26",
          "Title": {
            "href": "http://blog.codecombat.com/codecombat-is-hiring-chief-artisan",
            "text": "CodeCombat (YC W14) is hiring a Chief Artisan (level builder)"
          },
          "Karma": ""
        },
        {
          "ID": "27",
          "Title": {
            "href": "http://www.newyorker.com/news/news-desk/battle-new-orleans-birthed-american-democracy",
            "text": "How the Battle of New Orleans Birthed the American Character"
          },
          "Karma": "6 points"
        },
        {
          "ID": "28",
          "Title": {
            "href": "http://pipeline.corante.com/archives/2015/01/08/teixobactin_a_new_antibiotic_from_a_new_platform.php",
            "text": "Teixobactin: A New Antibiotic from a New Platform?"
          },
          "Karma": "15 points"
        },
        {
          "ID": "29",
          "Title": {
            "href": "http://cires.colorado.edu/news/press/2014/crowdsourcingscience.html?",
            "text": "Crowdsourcing Earth's magnetic field"
          },
          "Karma": "11 points"
        },
        {
          "ID": "30",
          "Title": {
            "href": "http://nautil.us/issue/20/creativity/the-strange-inevitability-of-evolution",
            "text": "The Strange Inevitability of Evolution"
          },
          "Karma": "7 points"
        }
      ]
    },
    {
      "page": "2",
      "url": "https://news.ycombinator.com/news?p=2",
      "News": [
        {
          "ID": "31",
          "Title": {
            "href": "http://www.scientificamerican.com/article/for-sale-your-name-here-in-a-prestigious-science-journal/",
            "text": "For Sale: “Your Name Here” in a Prestigious Science Journal"
          },
          "Karma": "42 points"
        },
        {
          "ID": "32",
          "Title": {
            "href": "http://www.latimes.com/science/sciencenow/la-sci-sn-beethoven-heartbeat-20150108-story.html?track=lat-email-healthreport",
            "text": "Is arrhythmia at the heart of Beethoven's music?"
          },
          "Karma": "10 points"
        },
        {
          "ID": "33",
          "Title": {
            "href": "https://blog.whitehatsec.com/north-koreas-naenara-web-browser-its-weirder-than-we-thought/",
            "text": "North Korea’s Naenara Web Browser: It’s Weirder Than We Thought"
          },
          "Karma": "104 points"
        },
        {
          "ID": "34",
          "Title": {
            "href": "http://community.wolfram.com/groups/-/m/t/418720",
            "text": "Perfectly centered break of a perfectly aligned pool ball rack"
          },
          "Karma": "5 points"
        },
        {
          "ID": "35",
          "Title": {
            "href": "http://tachyus.com/joinus/senior-front-end-engineer.html",
            "text": "TACHYUS Hiring Senior Front-End Engineer (JavaScript)"
          },
          "Karma": "4 points"
        },
        {
          "ID": "36",
          "Title": {
            "href": "http://languagelog.ldc.upenn.edu/nll/?p=16938",
            "text": "In the 20th century, the frequency of the definite article “the” decreased"
          },
          "Karma": "8 points"
        },
        {
          "ID": "37",
          "Title": {
            "href": "http://zephyrosanemos.com",
            "text": "Terrain Rendering and GUIs with WebGL"
          },
          "Karma": "116 points"
        },
        {
          "ID": "38",
          "Title": {
            "href": "https://www.reddit.com/r/Bitcoin/comments/2rrxq7/on_why_010s_release_notes_say_we_have_reason_to/",
            "text": "Why Bitcoin Core 0.10's release notes say “…libsecp256k1 is better than…OpenSSL”"
          },
          "Karma": "131 points"
        },
        {
          "ID": "39",
          "Title": {
            "href": "http://www.latimes.com/food/dailydish/la-dd-dont-soak-dried-beans-20140911-story.html",
            "text": "Don't soak your dried beans"
          },
          "Karma": "50 points"
        },
        {
          "ID": "40",
          "Title": {
            "href": "https://savannah.gnu.org/forum/forum.php?forum_id=8175",
            "text": "GNU Guix ported to ARM and other niceties of the new year"
          },
          "Karma": "53 points"
        },
        {
          "ID": "41",
          "Title": {
            "href": "http://philip.greenspun.com/careers/women-in-science?hn",
            "text": "Women in Science"
          },
          "Karma": "4 points"
        },
        {
          "ID": "42",
          "Title": {
            "href": "http://medicalxpress.com/news/2015-01-human-brain-memories-tidy-pruning.html",
            "text": "Human brain keeps memories tidy by pruning inaccurate ones"
          },
          "Karma": "11 points"
        },
        {
          "ID": "43",
          "Title": {
            "href": "http://blogs.wsj.com/indiarealtime/2015/01/07/indias-first-openly-transgender-mayor-in-her-own-words/",
            "text": "India's First Openly Transgender Mayor in Her Own Words"
          },
          "Karma": "30 points"
        },
        {
          "ID": "44",
          "Title": {
            "href": "http://www.andrewoswald.com/docs/entrepre.pdf",
            "text": "What makes an entrepreneur? (1998) [pdf]"
          },
          "Karma": "6 points"
        },
        {
          "ID": "45",
          "Title": {
            "href": "http://blog.codinghorror.com/the-god-login/",
            "text": "The God Login"
          },
          "Karma": "170 points"
        },
        {
          "ID": "46",
          "Title": {
            "href": "http://www.wired.com/2015/01/architecture-and-vision-warkawater/",
            "text": "A Bamboo Tower That Produces Water from Air"
          },
          "Karma": "8 points"
        },
        {
          "ID": "47",
          "Title": {
            "href": "http://blog.omarduarte.me/stuff-every-junior-developer-should-know/",
            "text": "Stuff Every Junior Developer Should Know"
          },
          "Karma": "7 points"
        },
        {
          "ID": "48",
          "Title": {
            "href": "https://jobs.lever.co/kamcord/8ce5e4ab-4718-4310-a3a9-1e3e357a22cf?lever-source=hackernews",
            "text": "Kamcord is looking for a Lead Designer"
          },
          "Karma": ""
        },
        {
          "ID": "49",
          "Title": {
            "href": "http://www.kellegous.com/j/2015/01/09/beware-comcast-business/",
            "text": "Don't Lose $2,000 to Comcast Business"
          },
          "Karma": "4 points"
        },
        {
          "ID": "50",
          "Title": {
            "href": "http://www.catb.org/~esr/faqs/hacker-howto.html",
            "text": "How to Become a Hacker (2001)"
          },
          "Karma": "64 points"
        },
        {
          "ID": "51",
          "Title": {
            "href": "http://brookeallen.com/pages/archives/1234",
            "text": "How my life was changed when I began caring about the people I did not hire"
          },
          "Karma": "563 points"
        },
        {
          "ID": "52",
          "Title": {
            "href": "http://thume.ca/screentunes/",
            "text": "On some LCD monitors this will cause them to emit a tone (epilepsy warning)"
          },
          "Karma": "132 points"
        },
        {
          "ID": "53",
          "Title": {
            "href": "http://www.askapache.com/hacking/ping-unix-darpa-muuss.html#ping_story_Ive_heard",
            "text": "The best ping story I've ever heard"
          },
          "Karma": "120 points"
        },
        {
          "ID": "54",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8863782",
            "text": "What are some good technology projects to donate to in 2015?"
          },
          "Karma": "4 points"
        },
        {
          "ID": "55",
          "Title": {
            "href": "http://www.3cosystem.com",
            "text": "Show HN: 3cosystem – biggest tech and event calendar in your city"
          },
          "Karma": "6 points"
        },
        {
          "ID": "56",
          "Title": {
            "href": "https://www.youtube.com/watch?v=ubaX1Smg6pY&=",
            "text": "Is it really 'Complex'? Or did we just make it 'Complicated'? [video]"
          },
          "Karma": "216 points"
        },
        {
          "ID": "57",
          "Title": {
            "href": "http://www.businessinsider.com/charlize-theron-10-million-huntsman-paycheck-2015-1",
            "text": "Charlize Theron Negotiated a $10MM Paycheck After Sony Hack Revealed Unequal Pay"
          },
          "Karma": "5 points"
        },
        {
          "ID": "58",
          "Title": {
            "href": "http://www.citylab.com/work/2015/01/americas-best-performing-cities-in-2014/384336/",
            "text": "America's Best Performing Cities in 2014"
          },
          "Karma": "4 points"
        },
        {
          "ID": "59",
          "Title": {
            "href": "https://lists.gnu.org/archive/html/emacs-devel/2015-01/msg00171.html",
            "text": "Lead Emacs developer considering forking over GCC and AST issues"
          },
          "Karma": "29 points"
        },
        {
          "ID": "60",
          "Title": {
            "href": "http://joachimesque.com/globe/#1",
            "text": "Le Paper Globe: a do-it-yourself terrestrial globe"
          },
          "Karma": "36 points"
        }
      ]
    },
    {
      "page": "3",
      "url": "https://news.ycombinator.com/news?p=3",
      "News": [
        {
          "ID": "61",
          "Title": {
            "href": "http://blog.rescale.com/which-one-to-worry-about-ebola-vs-influenza/",
            "text": "Infection Simulation: Ebola vs. Influenza"
          },
          "Karma": "5 points"
        },
        {
          "ID": "62",
          "Title": {
            "href": "http://www.cs.unm.edu/~dlchao/flake/doom/",
            "text": "Doom as a tool for system administration (1999)"
          },
          "Karma": "194 points"
        },
        {
          "ID": "63",
          "Title": {
            "href": "https://twitter.com/TcitWorld/status/553530506453987328/photo/1",
            "text": "Whois on any .fr domain displays “je suis charlie”"
          },
          "Karma": "121 points"
        },
        {
          "ID": "64",
          "Title": {
            "href": "http://sideprojects.assembly.com",
            "text": "Show HN: Save your side project"
          },
          "Karma": "172 points"
        },
        {
          "ID": "65",
          "Title": {
            "href": "http://dspace.mit.edu/bitstream/handle/1721.1/5731/AIM-514.pdf",
            "text": "Design of Lisp-Based Processors Or, LAMBDA: The Ultimate Opcode (1979) [pdf]"
          },
          "Karma": "82 points"
        },
        {
          "ID": "66",
          "Title": {
            "href": "http://www.forbes.com/sites/nathanvardi/2014/12/01/the-king-of-online-gambling-is-34/",
            "text": "The King of Online Gambling"
          },
          "Karma": "35 points"
        },
        {
          "ID": "67",
          "Title": {
            "href": "https://www.youtube.com/watch?v=g_ULtNYRCbg",
            "text": "Redstone Word Processor in Minecraft [video]"
          },
          "Karma": "159 points"
        },
        {
          "ID": "68",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8861587",
            "text": "Transcriptic, a robotic cloud biology lab, is hiring scientists and engineers"
          },
          "Karma": ""
        },
        {
          "ID": "69",
          "Title": {
            "href": "http://www.scrollslowhavefun.com/",
            "text": "Scroll Slow. Have Fun"
          },
          "Karma": "541 points"
        },
        {
          "ID": "70",
          "Title": {
            "href": "http://bjoern.brembs.net/2015/01/booming-university-administrations/",
            "text": "The Growth of Administrative Staff in Universities"
          },
          "Karma": "134 points"
        },
        {
          "ID": "71",
          "Title": {
            "href": "http://iamjwal.com/the-tough-decision-to-leave-the-classroom/",
            "text": "The Tough Decision to Leave the Classroom"
          },
          "Karma": "302 points"
        },
        {
          "ID": "72",
          "Title": {
            "href": "http://raidersec.blogspot.com/2013/06/how-browsers-store-your-passwords-and.html?m=1",
            "text": "How Browsers Store Your Passwords (and Why You Shouldn't Let Them)"
          },
          "Karma": "7 points"
        },
        {
          "ID": "73",
          "Title": {
            "href": "http://makezine.com/2015/01/08/voxel8-demonstrates-its-electronics-capable-3d-printer-at-ces-2015/",
            "text": "Voxel8 Demonstrates Its Electronics-Capable 3D Printer at CES 2015 [video]"
          },
          "Karma": "43 points"
        },
        {
          "ID": "74",
          "Title": {
            "href": "http://www.aaronkharris.com/someone-else-had-your-idea-first",
            "text": "Someone else had your idea first"
          },
          "Karma": "108 points"
        },
        {
          "ID": "75",
          "Title": {
            "href": "https://www.eff.org/deeplinks/2015/01/wake-charlie-hebdo-attack-lets-not-sacrifice-even-more-rights",
            "text": "In Wake of Charlie Hebdo Attack, Let’s Not Sacrifice Even More Rights"
          },
          "Karma": "275 points"
        },
        {
          "ID": "76",
          "Title": {
            "href": "http://qz.com/311832/hacked-emails-reveal-chinas-elaborate-and-absurd-internet-propaganda-machine/",
            "text": "Hacked emails reveal China’s Internet propaganda machine"
          },
          "Karma": "132 points"
        },
        {
          "ID": "77",
          "Title": {
            "href": "http://www.blinkenlights.com/pc.shtml",
            "text": "What was the first personal computer? (1999)"
          },
          "Karma": "66 points"
        },
        {
          "ID": "78",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8863588",
            "text": "Ask HN: What does Engineering culture in a super professional company look like?"
          },
          "Karma": "3 points"
        },
        {
          "ID": "79",
          "Title": {
            "href": "http://www.simonowens.net/how-reddit-created-the-worlds-largest-dialogue-between-scientists-and-the-general-public/",
            "text": "How Reddit Sparked a Dialogue Between Scientists and the General Public"
          },
          "Karma": "68 points"
        },
        {
          "ID": "80",
          "Title": {
            "href": "http://www.theguardian.com/business/2015/jan/08/cannabis-investor-peter-theil-paypal-founder",
            "text": "Peter Thiel becomes marijuana's first big investor"
          },
          "Karma": "127 points"
        },
        {
          "ID": "81",
          "Title": {
            "href": "https://firstlook.org/theintercept/2015/01/09/solidarity-charlie-hebdo-cartoons/",
            "text": "In Solidarity with a Free Press: Some More Blasphemous Cartoons"
          },
          "Karma": "5 points"
        },
        {
          "ID": "82",
          "Title": {
            "href": "http://www.businessweek.com/articles/2015-01-07/amazon-vs-dot-jet-dot-com-marc-lore-aims-to-beat-bezos",
            "text": "Amazon vs. Jet.com"
          },
          "Karma": "96 points"
        },
        {
          "ID": "83",
          "Title": {
            "href": "http://www.latimes.com/business/technology/la-fi-tn-fcc-chairman-wheeler-ces-net-neutrality-title-ii-20150107-story.html?track=rss&utm_source=dlvr.it&utm_medium=twitter&dlvrit=515009",
            "text": "FCC chairman tips his hand on net neutrality"
          },
          "Karma": "117 points"
        },
        {
          "ID": "84",
          "Title": {
            "href": "http://www.gamasutra.com/view/feature/4111/dirty_coding_tricks.php?print=1",
            "text": "Dirty Coding Tricks"
          },
          "Karma": "291 points"
        },
        {
          "ID": "85",
          "Title": {
            "href": "http://techgage.com/news/samsung-unveils-first-pcie-3-0-x4-based-m-2-ssd-delivering-speeds-of-over-2gbs/",
            "text": "Samsung Unveils SSD Delivering Speeds of Over 2 GB/s"
          },
          "Karma": "267 points"
        },
        {
          "ID": "86",
          "Title": {
            "href": "http://applicative.acm.org/index.html",
            "text": "Applicative by the ACM"
          },
          "Karma": "18 points"
        },
        {
          "ID": "87",
          "Title": {
            "href": "http://richardg867.wordpress.com/2015/01/01/notes-on-red-star-os-3-0/",
            "text": "Notes on Red Star OS 3.0"
          },
          "Karma": "96 points"
        },
        {
          "ID": "88",
          "Title": {
            "href": "http://www.engadget.com/2015/01/05/energous-wattup-wireless-charging-demo/",
            "text": "Router can power your devices wirelessly from 15 feet away"
          },
          "Karma": "64 points"
        },
        {
          "ID": "89",
          "Title": {
            "href": "http://secupwn.github.io/Android-IMSI-Catcher-Detector/",
            "text": "Android IMSI-Catcher Detector (AIMSICD)"
          },
          "Karma": "3 points"
        },
        {
          "ID": "90",
          "Title": {
            "href": "http://freesound.org/",
            "text": "Freesound: A collaborative resultsbase of Creative Commons-licensed sounds"
          },
          "Karma": "51 points"
        }
      ]
    },
    {
      "page": "4",
      "url": "https://news.ycombinator.com/news?p=4",
      "News": [
        {
          "ID": "91",
          "Title": {
            "href": "http://www.livinstudio.com/farm432/",
            "text": "Farm 432"
          },
          "Karma": "249 points"
        },
        {
          "ID": "92",
          "Title": {
            "href": "http://www.noshortageofwork.com/pages/4078",
            "text": "How to write if you cannot concentrate"
          },
          "Karma": "16 points"
        },
        {
          "ID": "93",
          "Title": {
            "href": "http://www.healthline.com/health-news/ms-patients-who-received-stem-cell-transplants-still-in-remission-010715",
            "text": "Most MS Patients Who Got Stem Cell Transplants Still in Remission Years Later"
          },
          "Karma": "121 points"
        },
        {
          "ID": "94",
          "Title": {
            "href": "http://mobility-labs.com/2015/how-parents-community-groups-use-results",
            "text": "How Parents and Community Groups Use Data"
          },
          "Karma": "6 points"
        },
        {
          "ID": "95",
          "Title": {
            "href": "https://www.openssl.org/news/secadv_20150108.txt",
            "text": "OpenSSL Security Advisory"
          },
          "Karma": "94 points"
        },
        {
          "ID": "96",
          "Title": {
            "href": "https://3drealms.com/news/3d-realms-vault-1994-design-tips-tom-hall-part-1/",
            "text": "Game Design Tips from Tom Hall (1994)"
          },
          "Karma": "70 points"
        },
        {
          "ID": "97",
          "Title": {
            "href": "http://pokemon.winrar.io",
            "text": "Show HN: Twilio plays Pokemon - Play pokemon via SMS using twilio"
          },
          "Karma": "9 points"
        },
        {
          "ID": "98",
          "Title": {
            "href": "http://phys.org/news/2015-01-super-insulated-indoor.html",
            "text": "Super-insulated clothing could eliminate need for indoor heating"
          },
          "Karma": "48 points"
        },
        {
          "ID": "99",
          "Title": {
            "href": "https://github.com/FredKSchott/CoVim",
            "text": "CoVim – Collaborative Editing for Vim"
          },
          "Karma": "11 points"
        },
        {
          "ID": "100",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8856411",
            "text": "Ask HN: What will be “uber-ified” next?"
          },
          "Karma": "15 points"
        },
        {
          "ID": "101",
          "Title": {
            "href": "https://www.reddit.com/r/IAmA/comments/2rgsan/i_am_elon_musk_ceocto_of_a_rocket_company_ama/",
            "text": "Elon Musk AMA"
          },
          "Karma": "566 points"
        },
        {
          "ID": "102",
          "Title": {
            "href": "http://arstechnica.com/science/2015/01/researchers-create-quantum-memory-thats-stable-for-six-hours/",
            "text": "Researchers create quantum memory that’s stable for six hours"
          },
          "Karma": "5 points"
        },
        {
          "ID": "103",
          "Title": {
            "href": "http://www.theverge.com/2015/1/7/7508651/leap-second-2015-earths-rotation-slowing",
            "text": "2015 is getting an extra second and that's a bit of a problem for the internet"
          },
          "Karma": "4 points"
        },
        {
          "ID": "104",
          "Title": {
            "href": "http://blog.norsecorp.com/2014/12/29/ex-employee-five-others-fingered-in-sony-hack/",
            "text": "Norse Investigation Focusing on a Small Group, Including Sony Ex-Employees"
          },
          "Karma": "3 points"
        },
        {
          "ID": "105",
          "Title": {
            "href": "http://www.thedailybeast.com/articles/2014/12/24/no-north-korea-didn-t-hack-sony.html",
            "text": "“No, North Korea Didn’t Hack Sony”"
          },
          "Karma": "75 points"
        },
        {
          "ID": "106",
          "Title": {
            "href": "http://qz.com/312537/the-secret-to-the-uber-economy-is-wealth-inequality/",
            "text": "The secret to the Uber economy is wealth inequality"
          },
          "Karma": "11 points"
        },
        {
          "ID": "107",
          "Title": {
            "href": "http://zinc.rs/",
            "text": "Zinc – Rust’s safety features applied to embedded development"
          },
          "Karma": "147 points"
        },
        {
          "ID": "108",
          "Title": {
            "href": "https://news.ycombinator.com/item?id=8863172",
            "text": "What effect would the reclass of ISP have on privacy (un)lawful results collection?"
          },
          "Karma": "4 points"
        },
        {
          "ID": "109",
          "Title": {
            "href": "http://www.bbc.co.uk/news/science-environment-30718558",
            "text": "Computer program 'perfect at poker'"
          },
          "Karma": "7 points"
        },
        {
          "ID": "110",
          "Title": {
            "href": "http://www.dignited.com/11641/facebook-opens-office-south-africa-first-africa/",
            "text": "Facebook opens their first office in Africa"
          },
          "Karma": "3 points"
        },
        {
          "ID": "111",
          "Title": {
            "href": "https://medium.com/productivity-in-the-cloud/6-links-that-will-show-you-what-google-knows-about-you-f39b8af9decc",
            "text": "6 links that will show you what Google knows about you"
          },
          "Karma": "4 points"
        },
        {
          "ID": "112",
          "Title": {
            "href": "http://www.telegraph.co.uk/news/worldnews/europe/france/11335676/Hacktivists-Anonymous-says-it-will-avenge-Charlie-Hebdo-attacks-by-shutting-down-jihadist-websites.html",
            "text": "'Hacktivist' group Anonymous says it will avenge Charlie Hebdo attacks"
          },
          "Karma": "4 points"
        },
        {
          "ID": "113",
          "Title": {
            "href": "http://blog.whttl.com/2015/01/09/ashton-speaks-to-ycombinator-startup-school/",
            "text": "Ashton Kutcher's Speech to Y Combinator's Startup School"
          },
          "Karma": "7 points"
        },
        {
          "ID": "114",
          "Title": {
            "href": "http://www.gamasutra.com/view/feature/131439/keeping_the_pirates_at_bay.php",
            "text": "Keeping the Pirates at Bay – Copy and Crack Protection (2001)"
          },
          "Karma": "49 points"
        },
        {
          "ID": "115",
          "Title": {
            "href": "https://docs.google.com/document/d/1OaatvGhEAq7VseQ9kkavxKNAfepWy2yhPUBs96FGV28/edit",
            "text": "Go 1.5 Bootstrap Plan"
          },
          "Karma": "133 points"
        },
        {
          "ID": "116",
          "Title": {
            "href": "https://www.codementor.io/learn-programming/now-good-time-learn-rust",
            "text": "Is Now a Good Time to Learn Rust?"
          },
          "Karma": "6 points"
        },
        {
          "ID": "117",
          "Title": {
            "href": "http://www.schneems.com/2015/01/09/how-to-troll-github-comments.html",
            "text": "How to (not) Troll GitHub Comments"
          },
          "Karma": "5 points"
        },
        {
          "ID": "118",
          "Title": {
            "href": "http://translations.unbabel.com/mailchimp/",
            "text": "Show HN: Reach new markets by translating your MailChimp campaigns"
          },
          "Karma": "4 points"
        },
        {
          "ID": "119",
          "Title": {
            "href": "http://www.thebaffler.com/salvos/the-problem-with-music",
            "text": "The Problem with Music (1993)"
          },
          "Karma": "65 points"
        },
        {
          "ID": "120",
          "Title": {
            "href": "https://medium.com/@richardeng/the-smalltalk-revolution-ee245c281f51",
            "text": "The Smalltalk Revolution"
          },
          "Karma": "80 points"
        }
      ]
    }
  ]
};


//Util.deletePropByString(results, 'results.News');
//console.log(Util.getPropByString(results, ''));

new KimFilter(data)
  .setCurrCollection('News')
  .split({
    property: 'Karma',
    separator: ' ',
    names: ['num', 'unit']
  })
  .remove({
    property: 'unit',
    operator: '!==',
    target: undefined
  })
  .toInt({
    property: 'num'
  })
  .currencyConvert({
    property: 'num',
    from: 'USD',
    to: 'CAD',
    decimal: 3
  })
  //.remove({
  //  property: 'num',
  //  operator: '>',
  //  target: 100
  //})
  .sort({
    property: 'num',
    lowToHigh: 0
  })
  //.toFloat({
  //  property: 'key1',
  //  decimal: 2
  //})
  //.merge({
  //  properties: ['key1', 'key2'],
  //  newProperties: ['num', 'unit'],
  //  newProp: 'Karma'
  //})
  //.renameProperty({
  //  property: 'Karma',
  //  newname: 'KM'
  //})
  //.removeProp({
  //  properties: ['Title']
  //})
  //.sort({
  //  property: 'KM.num',
  //  lowToHigh: 1
  //})
  //.replace({
  //  property: 'KM.unit',
  //  from: /^pts$/,
  //  to: 'pTs'
  //})
  //.toInt({
  //  property: 'KM.num',
  //})
  //.merge({
  //  properties: ['KM.num', 'KM.unit'],
  //  newProp: 'New_KM',
  //  newProperties: ['km_num', 'km_unit']
  //})
  //.removeProp({
  //  properties: ['KM'],
  //})
  //.sort({
  //  property: 'New_KM.km_num'
  //})
  .output(function(err, data) {
    if(err) {
      console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log("ERR: ", err);
    } else { 
      //data.results['News'].forEach(function(val, idx, arr) {
      //  console.log(val);
      //});
      data.results.forEach(function(entry, idx, arr) {
        console.log(entry);
      });
    }
  });


//request('http://finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1d1t1&s=' + 'USD'+ 'INR' + '=X', function(err, res, body) {
//  // "USDINR=X",63.1559,"1/7/2015","5:39pm"
//  var val = body.split(',')[1];
//  console.log(val)
//});
