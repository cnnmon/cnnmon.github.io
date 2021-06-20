import coffee_static from "../assets/projects/coffee_static.png";
import coffee_thumb from "../assets/projects/coffee_thumb.gif";
import gm_static from "../assets/projects/gm_static.png";
import gm_thumb from "../assets/projects/gm_thumb.gif";
import boba_static from "../assets/projects/boba_static.png";
import boba_thumb from "../assets/projects/boba_thumb.gif";
import cardio_static from "../assets/projects/cardio_static.png";
import cardio_thumb from "../assets/projects/cardio_thumb.gif";
import mp_static from "../assets/projects/mp_static.png";
import mp_thumb from "../assets/projects/mp_thumb.gif";
import daince_thumb from "../assets/projects/daince_thumb.gif";
import daince_static from "../assets/projects/daince_static.png";
import ashes_thumb from "../assets/projects/ashes_thumb.gif";
import ashes_static from "../assets/projects/ashes_static.png";
import slice_thumb from "../assets/projects/slice_thumb.gif";
import slice_static from "../assets/projects/slice_static.png";
import kitty_thumb from "../assets/projects/kitty_thumb.gif";
import kitty_static from "../assets/projects/kitty_static.png";
import spacebar_thumb from "../assets/projects/spacebar_thumb.gif";
import spacebar_static from "../assets/projects/spacebar_static.png";
import art_thumb from "../assets/projects/art_thumb.gif";
import art_static from "../assets/projects/art_static.jpg";

export const tags = {
  GAME: "game",
  WEB: "web",
  MOBILE: "mobile",
  UIUX: "ui/ux",
  ART: "art",
  ANIMATION: "animation",
  WRITING: "writing",
}

export const tools = {
  REACT: "react",
  AIRTABLE: "airtable",
  REDUX: "redux",
  UNITY: "unity & c#",
  PTS: "paint tool sai",
  XCODE: "xcode",
  HTMLCSS: "html/css",
  JS: "javascript",
  REAPER: "reaper",
}

export const getProject = (name) => {
  return projects.find(p => p.name === name);
}

const projects = [
  {
    name: "Blueprint, Mee Panyar",
    description: "PWA app supporting rural solar grid technicians",
    thumb: mp_thumb,
    static: mp_static,
    date: "sept 2020 - may 2021",
    tags: [tags.WEB, tags.MOBILE],
    tools: [tools.REACT, tools.REDUX, tools.AIRTABLE],
    link: "https://github.com/calblueprint/meepanyar",
  },
  {
    name: "BOBA",
    description: "iOS puzzle game about drinking boba",
    thumb: boba_thumb,
    static: boba_static,
    date: "aug 2020",
    tags: [tags.MOBILE, tags.GAME, tags.ART],
    tools: [tools.UNITY, tools.PTS, tools.XCODE],
    link: "https://apps.apple.com/us/app/boba-puzzle-game/id1526026791/",
  },
  {
    name: "DAINCE",
    description: "72-hour project. learn to dance with ai",
    thumb: daince_thumb,
    static: daince_static,
    date: "june 2020",
    tags: [tags.WEB, tags.UIUX],
    tools: [tools.HTMLCSS, tools.JS, tools.PTS],
    link: "https://devpost.com/software/same-home-different-hacks-cssi-2020-team-1",
  },
  {
    name: "coffeelings",
    description: "mood tracker & journaling chrome extension",
    thumb: coffee_thumb,
    static: coffee_static,
    date: "march 2020",
    tags: [tags.WEB, tags.ART],
    tools: [tools.HTMLCSS, tools.JS, tools.PTS],
    link: "https://chrome.google.com/webstore/detail/coffeelings/hcbddpppkcnfjifbcfnhmelpemdoepkk/",
  },
  {
    name: "CardioCasino",
    description: "slots simulator about childhood & cardiovascular risk",
    thumb: cardio_thumb,
    static: cardio_static,
    date: "oct 2019",
    tags: [tags.GAME, tags.ART],
    tools: [tools.UNITY, tools.PTS, tools.REAPER],
    link: "https://cnnmon.itch.io/cardiocasino",
  },
  {
    name: "LD45, Ashes to Ash",
    description: "72-hour project. platformer game about collecting emotions",
    thumb: ashes_thumb,
    static: ashes_static,
    date: "oct 2019",
    tags: [tags.GAME, tags.ART, tags.ANIMATION],
    tools: [tools.UNITY, tools.PTS],
    link: "https://ldjam.com/events/ludum-dare/45/ashes-to-ash/",
  },
  {
    name: "LD44, Slice of Scythe",
    description: "72-hour project. point-and-click game about grim reapers and hats",
    thumb: slice_thumb,
    static: slice_static,
    date: "apr 2019",
    tags: [tags.GAME, tags.ART],
    tools: [tools.UNITY, tools.PTS],
    link: "https://cnnmon.itch.io/slice-of-scythe",
  },
  {
    name: "good morning!",
    description: "morning routine simulator",
    thumb: gm_thumb,
    static: gm_static,
    date: "jan 2019",
    tags: [tags.GAME, tags.ART, tags.ANIMATION],
    tools: [tools.UNITY, tools.PTS],
    link: "https://cnnmon.itch.io/goodmorning",
  },
  {
    name: "AP Art, introspection",
    description: "digital illustration sustained investigation",
    thumb: art_thumb,
    static: art_static,
    date: "sep 2019 - may 2020",
    tags: [tags.ART],
    tools: [tools.PTS],
    link: "https://www.behance.net/gallery/121922563/introspection",
  },
  {
    name: "KittyClinic",
    description: "cat clinic simulator about the effects of holistic treatment",
    thumb: kitty_thumb,
    static: kitty_static,
    date: "nov 2018",
    tags: [tags.GAME, tags.ART, tags.WRITING],
    tools: [tools.UNITY, tools.PTS],
    link: "https://cnnmon.itch.io/kittyclinic",
  },
  {
    name: "Spacebar",
    description: "space-based endless runner and typing game",
    thumb: spacebar_thumb,
    static: spacebar_static,
    date: "sep 2018",
    tags: [tags.GAME, tags.ART, tags.ANIMATION],
    tools: [tools.UNITY, tools.PTS],
    link: "https://cnnmon.itch.io/spacebar",
  },
]

export default projects;
