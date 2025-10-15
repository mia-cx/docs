---
title: canvas
authors:
description:
created: 2025-10-15T12:34:09+02:00
modified: 2025-10-15T16:53:22+02:00
license:
license_url:
---

canvas is a web platform that lets record labels, publishers and host and market their content effectively.

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
| [ToneDen](https://www.toneden.io/)                 | €41/mo            | €82/mo (per artist) | - No "future pre-save"                                                                                                             |
| [LinkFire](https://www.linkfire.com/pricing)       | $27/mo            | $55/mo              | - Limited artist slots for labels<br>- No free plan<br>- No Ad platform integration                                                |
| [Soundplate](https://click.soundplate.com/pricing) | $20/mo            | POA                 | - No "future pre-save"<br>- No Ad platform integration                                                                             |

The plans above also include many features that many starting artists and labels don't and probably won't need.

All of the current operating services in the market have customers overpaying for features they don't need, and the costs to host these features are very small. Even factoring in payroll for support agents, their margins would be very attractive. According to [growjo](https://growjo.com/company/Feature.fm), around 2022, feature.fm had ~21 employees, and an estimated annual revenue of $2.9M per year.

One huge feature gap that I've experienced trying all of these services is identity or branding. All of these "smart links" look the same, and look largely uninteresting ([Patch - australis](https://too.fm/australis), [Sekai - You](https://sekai.music/you), [SMOKE by 2TD](https://hypeddit.com/2tdsmoke)).

### Identity

Art is personal. The way you present your art should be, too. Modern social media make everyone look the same. If apart from an avatar and a banner image, you look the same as everyone else, how do you stand out? How can you present your art, consistent with your brand? Worse still, are smart links and linktrees. These are egregiously impossible to customize, when that should be their primary purpose, to represent you.

### Centralization

Managing your discography across a multitude of platforms is basically a full-time job. A musician, on average, will have profiles that all need to be maintained (by themselves) with their content on:

- Bandcamp
- Facebook
- Instagram
- SoundCloud
- TikTok
- Twitter
- YouTube

Nowadays, it's not unusual to see artists manage profiles on even more platforms like:

- Bluesky
- Newgrounds
- Twitch

Labels, in turn would manage all of these profiles for each of their artists, unless they have the artists manage these themselves.

All of this is before you even get into distributing your music to DSPs like Spotify, Apple Music and the like.

### Distribution



### Data Quality Management

### Collaboration

## The target audience

canvas will initially be geared and primarily targeted to independent musicians and small labels, publishers & collectives, hereafter known as "publishing entities". People that are having a hard time platforming their identity in the industry. Later on, this will also expand to artists with different media (paint, film, literary).

I am aware of a pitfall in this target audience being that "aspirers" (people that are just starting out) tend to either give up or "graduate" and then move on to bigger, (usually more expensive) industry standard offerings. I will address this pitfall by expanding canvas' offerings over time and slowly build it up as a suite of tools useful to the entire industry, not just the small and independent.

A secondary target audience is the listener, the consumer of the art. It doesn't make much sense for publishing entities to put their art on a platform that doesn't incentivize people to actually engage with content on that platform.

In short, the aim is to make creating, managing and marketing art and information easier and cheaper for publishing entities, as well as incentivizing their audience to engage with their content on the platform.

## The vision

## The solution(s)
