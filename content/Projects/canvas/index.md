---
title: canvas
authors:
description:
created: 2025-10-15T12:34:09+02:00
modified: 2025-10-15T21:58:23+02:00
license:
license_url:
---

canvas is a web platform that lets record labels, publishers and host and market their content effectively.

## The target audience

canvas will initially be geared and primarily targeted to independent musicians and small labels, publishers & collectives, hereafter known as "publishing entities". People that are having a hard time platforming their identity in the industry. Later on, this will also expand to artists with different media (paint, film, literary).

I am aware of a pitfall in this target audience being that "aspirers" (people that are just starting out) tend to either give up or "graduate" and then move on to bigger, (usually more expensive) industry standard offerings. I will address this pitfall by expanding canvas' offerings over time and slowly build it up as a suite of tools useful to the entire industry, not just the small and independent.

A secondary target audience is the listener, the consumer of the art. It doesn't make much sense for publishing entities to put their art on a platform that doesn't incentivize people to actually engage with content on that platform.

In short, the aim is to make creating, managing and marketing art and information easier and cheaper for publishing entities, as well as incentivizing their audience to engage with their content on the platform.

## The problem(s)

I've been making music since 2012, and publishing it since 2016. Over the years I've made musician friends in the industry and even started a record label to help others publish their music too. In my journey running the label I've been in charge of Audio Engineering (Mastering), [DQM](https://www.ibm.com/think/topics/data-quality-management), [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management), Distribution to [DSPs](https://soundcharts.com/blog/what-is-a-dsp-digital-service-provider-in-music) and Marketing campaigns. When I was doing all of these things, essentially on my own, I ran into a whole host of problems that currently do not have any solutions (that are feasible for small labels or indie artists). With canvas I want to solve these problems one by one, and make them available and affordable for everyone.

### Conversion

As an independent artist or small label, the primary goal is getting your music heard. There are plenty of websites that let you upload your music. [SoundCloud](https://en.wikipedia.org/wiki/SoundCloud), [Newgrounds](https://en.wikipedia.org/wiki/Newgrounds) even [YouTube](https://en.wikipedia.org/wiki/YouTube) are used extensively to host music. The hard part comes after uploading. How do you get people to actually find it? With a limited (often non-existent) budget, you're pretty much forced to just do word of mouth advertising. Shout it from the rooftops, and usually, post about it on [Twitter](https://en.wikipedia.org/wiki/Twitter), [Facebook](https://en.wikipedia.org/wiki/Facebook), [Instagram](https://en.wikipedia.org/wiki/Instagram), [TikTok](https://en.wikipedia.org/wiki/TikTok).

#### Landing pages

When you share your music with your friends, you usually know who they are. You know whether to send them your music through [WhatsApp](https://en.wikipedia.org/wiki/WhatsApp), [Telegram](<https://en.wikipedia.org/wiki/Telegram_(software)>), [Messenger](<https://en.wikipedia.org/wiki/Messenger_(Meta)>), [iMessage](https://en.wikipedia.org/wiki/IMessage), or something else. And you know what [streaming platform](https://en.wikipedia.org/wiki/Music_streaming_service) they use, so you can send them straight to [Spotify](https://en.wikipedia.org/wiki/Spotify), [Apple Music](https://en.wikipedia.org/wiki/Apple_Music) or [Deezer](https://en.wikipedia.org/wiki/Deezer), even.

Posting your music on social media is more of an open invitation. You don't know who will see your posts, so you can't know what [streaming platform](https://en.wikipedia.org/wiki/Music_streaming_service) they're on. That makes it harder to effectively get conversions from visitors, to listeners, to fans. If your post only has a link to one [streaming platform](https://en.wikipedia.org/wiki/Music_streaming_service), potential fans that use different services, experience very high friction from having to manually leave your post, then open their service of choice, and searching for it.

> [!info] Other side-effects
> 
> 1. When a user leaves a social media site to look for your music, that social media typically sees that as your post making users close the platform. This can result in that social media negatively impacting the visibility / reach of your post in their recommendation algorithm. Users clicking a link in your post is typically treated differently.
> 2. When a user has to search for your music manually, on their streaming service of choice, there is no guarantee that the user will actually find your music. There are huge amounts of songs and artists with similar if not identical titles. Search results are usually sorted by popularity, so unless your metadata is thoroughly disambiguated, it's unlikely to show up.

For that reason, most artists choose to share [landing pages](https://en.wikipedia.org/wiki/Landing_page#References), usually called "smart links". These reduce friction considerably for everyone that would've had to search manually, and the increased friction for the people who would've been able to just click through is very minimal.

#### Features & Cost

The base functionality of existing offerings of these smart links is usually free. What I've encountered, however is that when you need more functionality - most artists, and pretty much all labels do or will - the pricing for those features is very high, and plans are often structured poorly.  
Features that most indie artists and labels will need, ubiquitously locked behind a paid plan:

- Artist Pages (links to your profiles on different platforms, latest releases, etc.)
- Custom domains (touches on identity, which I will get into later)
- Remember visitor's preferred streaming service
- Scheduled pages (schedule smart links to go live when you want them to)
- Tracking pixels or Analytics sharing (with external services, like Meta so you're able to re-target ad campaigns based on actual conversions)

Other features that are rarely available on these services, even though they are really useful for the target audience:

- "Future pre-save" (lets users "pre-save" all future releases without having to pre-save every release individually)
- Integration with Ads platforms to simplify creating & running ad campaings.

Below is a list of these landing page services and the price of the cheapest plan that includes all of the above "essential" features.

| Service                                            | Price for Artists | Price for Labels    | Notes                                                                                                                              |
| -------------------------------------------------- | ----------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Feature.fm](https://feature.fm/pricing/artist)    | $19/mo            | $99/mo              | - Limited custom domains<br>- Limited analytics history<br>- Remember service only in higher plan.<br>- No Ad platform integration |
| [Linktree](https://linktr.ee/s/pricing/)           | €12/mo            | Not available       | - No "future pre-save"<br>- No Ad platform integration                                                                             |
| [Hypeddit](https://hypeddit.com/)                  | $10/mo            | Not available       | - No "future pre-save"<br>- No Ad platform integration                                                                             |
| [ToneDen](<https://www.toneden.io/>)                 | €41/mo            | €82/mo (per artist) | - No "future pre-save"                                                                                                             |
| [LinkFire](<https://www.linkfire.com/pricing>)       | $27/mo            | $55/mo              | - Limited artist slots for labels<br>- No free plan<br>- No Ad platform integration                                                |
| [Soundplate](<https://click.soundplate.com/pricing>) | $20/mo            | POA                 | - No "future pre-save"<br>- No Ad platform integration                                                                             |

The plans above also include many features that many starting artists and labels don't and probably won't need.

All of the current operating services in the market have customers overpaying for features they don't need, and the costs to host these features are very small. Even factoring in payroll for support agents, their margins would be very attractive. According to [growjo](https://growjo.com/company/Feature.fm), around 2022, feature.fm had ~21 employees, and an estimated annual revenue of $2.9M per year.

One huge feature gap that I've experienced trying all of these services is identity or branding. All of these "smart links" look the same, and look largely uninteresting ([Patch - australis](https://too.fm/australis), [Sekai - You](https://sekai.music/you), [SMOKE by 2TD](https://hypeddit.com/2tdsmoke)).

### Identity

Art is personal. The way you present your art should be, too. Modern social media make everyone look the same. If apart from an avatar and a banner image, you look the same as everyone else, how do you stand out? How can you present your art, consistent with your brand? Worse still, are smart links and linktrees. These are egregiously impossible to customize, when that should be their primary purpose, to represent you.

### Decentralization

Managing your discography across a multitude of platforms is basically a full-time job. A musician, on average, will have profiles that all need to be maintained (by themselves) with their content on:

- [Bandcamp](https://en.wikipedia.org/wiki/Bandcamp)
- [Facebook](https://en.wikipedia.org/wiki/Facebook)
- [Instagram](https://en.wikipedia.org/wiki/Instagram)
- [SoundCloud](https://en.wikipedia.org/wiki/SoundCloud)
- [TikTok](https://en.wikipedia.org/wiki/TikTok)
- [Twitter](https://en.wikipedia.org/wiki/Twitter)
- [YouTube](https://en.wikipedia.org/wiki/YouTube)

Nowadays, it's not unusual to see artists manage profiles on even more platforms like:

- [Bluesky](https://en.wikipedia.org/wiki/Bluesky)
- [Newgrounds](https://en.wikipedia.org/wiki/Newgrounds)
- [Twitch](<https://en.wikipedia.org/wiki/Twitch_(service)>)

Labels, in turn would manage all of these profiles for each of their artists, unless they have the artists manage these themselves.

All of this is before you even get into distributing your music to DSPs like [Spotify](https://en.wikipedia.org/wiki/Spotify), [Apple Music](https://en.wikipedia.org/wiki/Apple_Music) and the like.

### Distribution

Distribution your music is... frustrating... there's a lot of providers out there and all of them suffer from the same bad catalog management issues. Distribution is something I will need to look deeper into at a later time.

### Data Quality Management

Problems with DQM are things I encountered while organizing compilation albums. Keeping track of metadata, artist names, legal info, social media links, royalty split email addresses... You would think or even expect these are tools built into distribution partners, but no. We had to do this with our own spreadsheets.

### Collaboration

[Splice](<https://en.wikipedia.org/wiki/Splice_(platform)>) used to have "Splice Studio" which was basically a version control system for your music projects, and even let you simplify collaborating on your music. This was discontinued, and is something that's sorely missed by a huge group of people. I want to breathe new life into this concept.

## The vision

An all-in-one suite of tools helping creators get their art out the door and into the world.

### Modular Pricing

A core value of canvas is and will always be to keep things fair for artists. I want artists to only have to pay for the features they actually need. This _can_ be overwhelming for customers to figure out what we actually have on offer, that's why I want to introduce data-driven bundles so people can select a "preset" with features that are popular among artists and labels at different levels. These bundles can of course still be customized.

To make sure people learn about what we have on offer, we will have a free or "trial" version for as many features as possible, that lets them try it out and decide for themselves if they actually need it (This is not possible for some features, like custom domains, but these are so ubiquitous that a demo isn't really necessary).

Another way that I want to make this modular pricing attractive and sensible to potential customers is with a discount "curve", where the more features you add to your plan, the more of a discount you get, maxing out at a certain point of course.  
Each feature will have a cost of operation, what it will cost for it to actually run & function properly, as well as a percentage of what it costs to support me and any potential future employees. Second, every feature will have "base" pricing, somewhere above that cost of operation, that makes it competitive and attractive on its own.  
The discount curve will approach a midpoint between that base pricing and cost of operation, based on how many features are in your plan.  
This way we keep things modular, transparent and fair for artists, without disincentivizing them from looking at expanding their plan when they need new features.

### Feature parity

To be able to compete in an established market, we need to attain feature parity with the existing options, and even exceed them, to be attractive.

### Centralization

I see canvas combining "(micro)blogging" architecture with smart links, and even music streaming.

On the public side, a sort of amalgam or hybrid between a smart link provider like [Feature.fm](https://en.wikipedia.org/wiki/Feature.fm), a music platform like [SoundCloud](https://en.wikipedia.org/wiki/SoundCloud), a [microblogging](https://en.wikipedia.org/wiki/Microblogging)-esque experience with feeds and follows for users like on [Twitter](https://en.wikipedia.org/wiki/Twitter), while allowing for more macroblogging capabilities like [WordPress](https://en.wikipedia.org/wiki/WordPress) or [Medium](<https://en.wikipedia.org/wiki/Medium_(website)>) for writing more information and history about - or press releases for - your music, and finally an outlet like [Bandcamp](https://en.wikipedia.org/wiki/Bandcamp), to sell your music (and merch) directly to your fans as well (integrating with [Shopify](https://en.wikipedia.org/wiki/Shopify) or alike so we don't have to reinvent the wheel that is e-commerce).

While on the dashboard, artists and labels get extensive tooling to manage their catalog, leverage analytics, set up marketing campaigns, and even manage creatives for other platforms (sync posts).

All of these things exist, individually, with focus on diverging audiences, which makes it so artists and music publishers have to work around their quirks designed for a different target group to make it work for their purpose.

### Identity

Another core value of canvas is that artists get to present their content the way they want to. Profile pictures and banners, while included, are not the whole picture. We want you to be able to design the look of your entire page. Change every color in your theme, switch fonts, change alignment, and to an extent, change layouts. Think [tumblr](https://en.wikipedia.org/wiki/Tumblr). Your profile should feel like your own home page.

### User engagement

Visitors and other canvas users should be able to interact with posts on the platform through the usual _like_, _comment_, _repost_ and _subscribe_ methods. On top of that I want to make this a hotspot for curators by adding "collections". Collections will be similar to playlists or "lists", but the best analog is the Collections feature from the defunct [Google+](https://en.wikipedia.org/wiki/Google%2B).  
The standout difference between canvas collections and lists on other platforms is that users can follow collections like they would users, so that they see posts that are added to these collections on their feed.  
It would be cool to also allow for curators to add artists or labels to collections so it auto-populates a collection's feed with posts from these artists, like a "follow-list". Though, I will have to think about a way to let users "exclude" artists from a collection they follow so those artists' posts don't show up in that user's feed, even though they're in a collection that that user follows.  
There should also be a special type of collection which is functionally identical to a playlist, but curators can connect their canvas account with accounts on other streaming platforms and sync their playlists across streaming platforms.

## The road to get there

The best way to get to market, in my opinion is to start with the content management system. Build a "blogging engine" focused around art and music with "smart links" built in so artists can quickly adopt and port over their catalog to canvas and see an immediate improvement to their visual identity.

I plan on bringing on artists I know personally so they can help beta-test everything, report issues, request improvements, etc. During this stage I can also keep an eye on traffic and usage statistics to figure out pricing for these features.

When everything is stable I will enable "private beta" which will have application-based sign-up and let existing users invite x amount of others per month. I will also invite more of my network in the industry, people I don't know personally, but who I think will benefit from canvas, if not now, in the long run.

After the blogging engine, the next priority is to get pre-saves working so that artists will start to use canvas to announce their music as well.

The logical next step would be to introduce an analytics dashboard, and allow for sharing analytics with other platforms like [Meta Ads](https://en.wikipedia.org/wiki/Meta_Platforms), TikTok Ads, Twitter Ads, [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics), and more(?), so that people can set up ad campaigns to be retargeted based on real-time conversion data.

As soon as the first three milestones have been reached, I think canvas can be self-sustaining.  
At this point I will enable public sign-up and invite existing users to start using canvas as their main link aggregation platform.

Custom domains will be a cool and relatively simple additional feature to add after these to enhance incentive for artists to switch. I'm not sure how cheap I can manage custom domains, because automated SSL certificate generations tends to be a pain, but I will try to get this as low as possible to maybe even add this as a free bonus for early adopters.

After these, I will have to re-assess. Is canvas making enough money to afford marketing campaigns? Should we work on expanding the feature-set first?

I want every decision along the way to be transparent and in the interest of the users on the platform, and I will listen to user feedback to decide on which steps to take next.

This is also the point where I will think about starting work on Textile.
