---
layout: post
title: "it turns out the twitter problem was my fault"
tags: [webdev, php]
---

Who would have thought?

The problem was that I couldn't use swedish characters like "åäö" in the tweets.
I presumed that this was an error in the library I used, but the problem was that the php
file wasn't utf-8 encoden (which i thought it was). Easy to solve after all.