var sort    = require('./sort.js');
var replace = require('./replace.js');
var pipe    = require('./pipe.js');


function transform(data, callback) {
  var filters = [sort, replace];
  pipe(data, function(err, cb) {
    if(err) return callback(err, data);
  }, filters);

  callback(null, data);
}


var data = {
  "name": "function_filters",
  "count": 30,
  "frequency": "Manual Crawl",
  "version": 3,
  "newdata": true,
  "lastrunstatus": "success",
  "lastsuccess": "Tue Jan 06 2015 02:43:31 GMT+0000 (UTC)",
  "thisversionstatus": "success",
  "thisversionrun": "Tue Jan 06 2015 02:43:29 GMT+0000 (UTC)",
  "results": {
    "collection1": [
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
          "text": "Moonpig.com Vulnerability – Exposes customer data"
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
          "href": "https://blog.compose.io/new-year-new-database-postgresql-on-compose/",
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


transform(data, function(err, data) {
  console.log(data.results["collection1"]);
});
