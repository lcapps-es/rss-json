# CUGOS Feed API

The Google Feed API was deprecated, so we could no longer show the recent posts to the Google Group on our website. This is a small Heroku app that converts the RSS XML feed into a consumable JSON response so we can use it at cugos.org.

**Why can't we just make an ajax request to the RSS feed?** Great question. RSS XML feed by default (especially Google) have strict cross-origin policies, meaning a different URI cannot access the data. Here's some [background reading](http://stackoverflow.com/a/10069132).

# Usage

Make a request to the following URI

```
https://cugosfeedapi.herokuapp.com/?count=15
```

And you'll get a response like this

```JSON
{
  "rss": {
    "$": {
      "version": "2.0"
    },
    "channel": {
      "title": "Cascadia Users of Geospatial Open Source",
      "link": "https://groups.google.com/d/forum/cugos",
      "description": "CUGOS aims to facilitate general support and regional meetings for people who are interested in Open Source GIS software. &nbsp;This is the official discussion group for CUGOS related questions and activities.",
      "language": "en",
      "item": [
        {
          "title": "last call - QGIS class in Seattle - Practical QGIS January 23rd/24th",
          "link": "https://groups.google.com/d/msg/cugos/ue9SOqEgWjg/_S2CxndOBQAJ",
          "description": "There are still some seats available for the class \"Practical QGIS\" - a 2 day class/hands on workshop in Seattle on Monday January 23rd and Tuesday January 24th, 2017 The class will focus on learning QGIS doing practical exercises in a workshop style setting. ArcGIS users will learn how to",
          "guid": {...},
          "author": "\nkarsten",
          "pubDate": "Wed, 04 Jan 2017 02:17:02 UTC"
        },
        {
          "title": "Annual Meeting... and CUGOS Pizza Extravaganza - 12/14/16 6pm UW",
          "link": "https://groups.google.com/d/msg/cugos/alF12ccaKkI/5Btqu-ftCAAJ",
          "description": "http://cugos.org/meetings/2016/12/14/cugos_monthly/ Just a friendly reminder that tomorrow will be the final CUGOS meeting of 2016. It will act as our annual business meeting as we hold our elections for the board of directors. The election process is documented here: http://cugos.org/electi",
          "guid": {...},
          "author": "\nAaron Racicot",
          "pubDate": "Tue, 13 Dec 2016 20:20:25 UTC"
        }
      ]
    }
  }
}
```

# Contribute

```shell
npm install
npm start # localhost:5000
```

Head over to localhost:5000 and you'll see a JSON response.
