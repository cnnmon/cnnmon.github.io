import { Typography } from '@material-ui/core';
import coffeelings from './projects/coffeelings.gif';
import coffeelings_pic1 from './projects/coffeelings_pic1.jpg';
import coffeelings_pic2 from './projects/coffeelings_pic2.jpg';
import goodmorning from './projects/goodmorning.png';
import goodmorning_pic1 from './projects/goodmorning_pic1.png';
import goodmorning_pic2 from './projects/goodmorning_pic2.png';
import goodmorning_pic3 from './projects/goodmorning_pic3.png';
import goodmorning_pic4 from './projects/goodmorning_pic4.png';
import boba from './projects/boba.gif';
import boba_pic1 from './projects/boba_pic1.png';
import boba_pic2 from './projects/boba_pic2.gif';
import boba_pic3 from './projects/boba_pic3.gif';
import cardiocasino from './projects/cardiocasino_pic1.gif';
import cardiocasino_pic1 from './projects/cardiocasino_pic1.gif';
import cardiocasino_pic2 from './projects/cardiocasino_pic2.gif';
import illust from './projects/illust.png';
import art1 from './art/art1.jpg';
import art2 from './art/art2.jpg';
import art3 from './art/art3.jpg';
import art4 from './art/art4.jpg';
import art5 from './art/art5.jpg';
import art6 from './art/art6.jpg';
import art7 from './art/art7.jpg';
import art8 from './art/art8.jpg';
import art9 from './art/art9.jpg';

const small = { width: '40%' };
const large = { width: '60%' };

export const highlights = [
  {
    name: "coffeelings",
    url: 'coffeelings',
    description: "Coffee-themed chrome extension for mood tracking, digital journaling, and wellness. 180k+ daily active users.",
    img: coffeelings,
    emoticon: '☕😊📔',
    details: {
      by: "Tiffany Wang",
      date: "March 2020",
      tags: "Web Dev, UI/UX, Art",
      tools: "HTML, CSS, JavaScript, Paint Tool SAI",
    },
    links: {
      "Chrome Web Store": "https://chrome.google.com/webstore/detail/coffeelings/hcbddpppkcnfjifbcfnhmelpemdoepkk/",
      "GitHub": "https://github.com/cnnmon/coffeelings",
    },
    body: (
      <div>
        <img src={coffeelings_pic1} style={large} alt="coffeeling's menu screen with a coffee cup and a few boxes of color mood options"></img>
        <Typography variant="h2">about</Typography>
        <Typography variant="body2">A digital journal and mood tracker chrome extension.<br /><br />Choose from coffee roasts to match your mood, save journal entries, and interact with a mood calendar that grows a little bit every day. Saves data locally. Works offline. Add sugar to taste.</Typography>
        <Typography variant="h2">why</Typography>
        <Typography variant="body2">I started thinking more about journaling last year — specifically, bullet journaling. But even though I could stare at bullet journal spreads for hours, I doubted I had the time, energy, or handwriting skills to pull it off. I wanted a way to maintain a layout digitally and update it in seconds.</Typography>
        <img src={coffeelings_pic2} style={large} alt="coffeeling's mood tracker screen with a grid, journal text to the left"></img>
        <Typography variant="h2">what</Typography>
        <Typography variant="body2">From the first time that day you open the extension, you're greeted with 5 options to rate how your day’s going — "amazing" to "stressed" — plus a small area to write down any thoughts and select a theme.<br /><br />The calendar itself is a grid populated with every day of the year, with the day's color being whatever mood was previously chosen for that day. These aren't static — you can click on a day at any time to cycle through and reinput moods. You can also read, edit, and delete any journal entries made through hovering and “locking” (right clicking) any given day.</Typography>
        <Typography variant="h2">how</Typography>
        <Typography variant="body2">Although I’m more of a tea person, I love the idea of starting your day in a warm, sunlit cafe with a cup of coffee. All assets, drawn in Paint Tool SAI, were built around that aesthetic. The extension was built in HTML, CSS, and JavaScript. All data is saved through Chrome’s localStorage API. Users are also given the option to download that data as a plaintext file to do <a href="https://medium.com/@azurite9925/text-to-understanding-analyzing-mood-using-coffeelings-2092040ce4a8" target="_blank" rel="noreferrer">whatever you want</a> with.</Typography>
      </div>
    ),
  },
  {
    name: "good morning!",
    url: 'goodmorning',
    description: "Colorful, feel-good point-and-click game about doing the perfect morning routine. Played by 206k worldwide.",
    img: goodmorning,
    emoticon: '🌞🛏️🧇',
    details: {
      by: "Tiffany Wang",
      date: "January 2019",
      tags: "Game Dev, Art, Animation",
      tools: "Unity, C#, Paint Tool SAI",
    },
    links: {
      "itch.io": "https://cnnmon.itch.io/goodmorning",
      "Newgrounds": "https://www.newgrounds.com/portal/view/727878",
      "GitHub": "https://github.com/cnnmon/goodmorning",
    },
    body: (
      <div>
        <img src={goodmorning_pic2} style={small} alt="wake up sequence with the word 'yawn' in a warm bedroom"></img>
        <img src={goodmorning_pic1} style={small} alt="dress up sequence with a girl looking at herself in the mirror"></img>
        <Typography variant="h2">about</Typography>
        <Typography variant="body2">A short morning routine simulator about starting your day right. Play through a few colorful minigames and puzzles, from waking up to packing your bags, until you're ready to take on the day.</Typography>
        <Typography variant="h2">why</Typography>
        <Typography variant="body2">From various Flash games to Mountains Studio’s “Florence”, I love stories told through a sequence of quick, light-hearted minigames. I wanted to make one of my own, inspired by the tone and aesthetic of lifestyle vloggers.</Typography>
        <img src={goodmorning_pic3} style={small} alt="journaling sequence with a desk, notebook, and cup of green tea"></img>
        <img src={goodmorning_pic4} style={small} alt="making waffles sequence with a toaster, board, and the words: too many in place of the counter"></img>
        <Typography variant="h2">what</Typography>
        <Typography variant="body2">Each step of the routine varies in intention, mechanics, and assets. In order, you (1) wake up, (2) brush your teeth, (3) make tea, (4) make waffles, (5) write in your notebook, (6) work on a project, (7) pick an outfit, and (8) pack your bag. Once you’re done with all these steps, you’ll be sent on your way. “Have a nice day!”</Typography>
        <Typography variant="h2">how</Typography>
        <Typography variant="body2">I wanted to reinforce themes of self-care and relaxation, so none of the minigames are timed, there’s lots of jokes and easter eggs throughout, and the game is easily completable in one sitting. The art and animation, drawn in Paint Tool SAI, were made to create a warmer, livelier version of reality. The game was built in Unity and C#. I used libraries like TMPro for text, LeanTween for animations, 2DxFx for visual effects, and Legendxh’s Snap-To-Grid for the base of the last minigame.</Typography>
      </div>
    ),
  },
  {
    name: "BOBA",
    url: 'boba',
    description: "Boba-themed, grid-based puzzle game for iOS. Customize your cup, order your favorite flavors and toppings, and get the highest score.",
    img: boba,
    tags: 'mobile, game, art',
    emoticon: '🐰🍵💖',
    details: {
      by: "Tiffany Wang",
      date: "August 2020",
      tags: "Game Dev, Art, Animation",
      tools: "Unity, C#, Paint Tool SAI",
    },
    links: {
      "iOS App Store": "https://apps.apple.com/us/app/boba-puzzle-game/id1526026791/",
    },
    body: (
      <div>
        <img src={boba_pic1} style={large} alt="text: boba, a bunny with boba sitting at a table"></img>
        <Typography variant="h2">about</Typography>
        <Typography variant="body2">A grid-based puzzle game about drinking bubble tea.<br /><br />Your task is to sip as many toppings as you can before your milk tea runs out. Analyze numbers and tap to locate bubbles just beneath the surface. Customize your boba tea cup, choose your favorite flavors and toppings, and aim for the highest score on each size.</Typography>
        <Typography variant="h2">why</Typography>
        <Typography variant="body2">I’m a big fan of boba. But it was rare, and on the off-chance I traveled far enough away from my small town to get some, I began noticing something: when I finished my drink, sometimes there’d be a handful of tapioca pearls left, dry, at the bottom of the cup. It felt like such a waste.<br /><br />So, I translated that experience and my love of boba into a puzzle game where your objective is to sip up as many pearls as possible before your drink runs out. It features a lot of order customization options, as per any boba shop.</Typography>
        <img src={boba_pic2} style={large} alt="boba's main screen, puzzle screen, and boba shop customization screen"></img>
        <Typography variant="h2">what</Typography>
        <Typography variant="body2">The puzzle itself is similar to Minesweeper with a twist: there’s 3 dimensions. Once the game starts, square grids are layered on top of each other, where every cell on each layer is randomized to either a topping or empty. The game is top-view, so only the top layer is completely visible and interactable — after all, you can only drink a drink from the top. Every time you tap a cell to“sip”, that cell will be removed and replaced by the cell on the layer right underneath. Your score and amount of drink left will then be affected accordingly.<br/><br/>Now, for the strategy: any cells that don’t contain a topping will contain, instead, a number. That number counts up however many toppings are nearby, like Minesweeper, but with the bombs being what you want to press. The 3rd dimension twist is that “nearby” means checking, not the top, but the grid right underneath the top, where the number just checks for toppings directly below the cell and directly below any cross-neighboring cell areas. So, whenever there’s a cross (or plus) of 1s, that means a topping can be found right underneath the middle — the cross marks the spot — and any higher numbers indicate overlapping crosses of 1s. As you have a limited amount of drink, you need to examine each number closely to see what your best move could be.<br/><br/>The game can becomes more challenging and complex with larger sizes, which can be selected alongside flavor (grid theme) and topping (pearl theme) before every game. You can also customize your boba cup as you’d like in a separate menu.</Typography>
        <img src={boba_pic3} style={small} alt="boba's main screen, puzzle screen, and boba shop customization screen"></img>
        <Typography variant="h2">how</Typography>
        <Typography variant="body2">The art was drawn in Paint Tool SAI. The game was built in Unity and C#. I used TMPro for text and heavily used LeanTween to make all the UI transitions dynamic and animated. The bubble screen transition was generated and exported out of Sony Vegas Pro. The design went through a few iterations, the first being the gif above.</Typography>
      </div>
    ),
  },
  {
    name: "Cleveland Clinic, CardioCasino",
    url: 'cardiocasino',
    description: "Slots simulator about the randomness of upbringing & its effect on cardiovascular risk later in life. Built for Cleveland Clinic's eXpressions program.",
    img: cardiocasino,
    tags: 'game, art, research, writing',
    emoticon: '💞🎰🧸',
    details: {
      by: "Tiffany Wang",
      date: "October 2019",
      tags: "Game Dev, Art, Writing, Sound Editing",
      tools: "Unity, C#, Paint Tool SAI, Reaper",
    },
    links: {
      "itch.io": "https://cnnmon.itch.io/cardiocasino",
      "GitHub": "https://github.com/cnnmon/CardioCasino",
    },
    body: (
      <div>
        <img src={cardiocasino_pic1} style={large} alt="the beginning of the game, a shadow of a child fades in and out, the slot machine is activated and slots roll"></img>
        <Typography variant="h2">about</Typography>
        <Typography variant="body2">A slot machine tied both to your childhood and your heart.<br /><br />From enduring a stressful home life to enjoying the luxuries of a well-off family, your slots decide what your childhood is like and what the current physical consequences will be. Try your hand at your slot machine and see where you end up!</Typography>
        <Typography variant="h2">why</Typography>
        <Typography variant="body2">You can’t help where, when, or how you grow up. From a stressful home life to a high-income household, the factors that define our childhood are a lottery — out of our control. I created “CardioCasino”, a life-simulator game, to interpret this phenomena as well as its effect on increasing risk of cardiovascular disease later in life. The basis of the game is from Cleveland Clinic sourced research.</Typography>
        <img src={cardiocasino_pic2} style={large} alt="story drawings and text appear ontop of the slot machine"></img>
        <Typography variant="h2">what</Typography>
        <Typography variant="body2">In the game, you interact with the virtual slot machine by clicking the button in the middle. It rolls through a variety of slot options. To represent the link to physical consequences, any red slots, negative psychosocial factors, will lower the heart health meter at the top right and green slots, positive psychosocial factors, will raise it. If you get 2 or more of the same slot, you’ll be greeted with a childhood memory that corresponds to the slot--for example, if you get a red house you’ll have experienced your parents fighting. The memory is interactable to an extent, as you can choose dialogue or things like whether to “walk” or “run”, but any actions will still lead to the same result and effect on your heart health. This illusion of choice emphasizes the lottery nature of our childhood. With every memory, you’ll also see a memento from that memory appear at the bottom.<br /><br />Once your meter hits 0, you’re given the chance to start over, but you’ll notice the mementos stay put throughout runs. Eventually, players will be able to collect all 8. This sends the player to the true ending: you discover that, although your slot machine results may be fated, maybe others’ aren’t.</Typography>
        <Typography variant="h2">how</Typography>
        <Typography variant="body2">The heart-themed, overgrown slot machine was first drawn on pen and paper, then finalized digitally in Paint Tool SAI. Icons were taken and modified from various artists in the Noun Project. Font is my own handwriting generated using Calligraphr. The game was built in Unity and C# and uses ink to create dialogue.<br /><br />A few scenarios in the ‘flashback’ scenes were conceptually inspired by real people’s stories. While working on this game, I opened up an anonymous Google Form where people online could share their stories relating to one or more of the psychosocial factors I chose. They’re sensitive topics, many of which I haven’t experienced first-hand, so I wanted to put a lot of care and effort in understanding and portraying them. I incorporated 20 people’s stories.</Typography>
      </div>
    ),
  },
  {
    name: "AP Art, Introspection",
    url: 'apart',
    description: "Sustained investigation over 9 pieces. Digital art.",
    img: illust,
    tags: 'art',
    emoticon: '🎨🧘🖌️',
    details: {
      by: "Tiffany Wang",
      date: "September 2019 - May 2020",
      tags: "Art",
      tools: "Clip Studio Paint, Photoshop, Paint Tool SAI",
    },
    links: null,
    body: (
      <div>
        <Typography variant="body2">In my senior year of high school, I created a digital art portfolio for AP Art based around the word <b>in·tro·spec·tion</b>: the examination or observation of one's own mental and emotional processes.</Typography>
        <img src={art1} style={small} title="Reflection" alt="Reflection"></img>
        <img src={art2} style={small} title="Ambition" alt="Ambition"></img>
        <img src={art3} style={small} title="why are you still here?" alt="why are you still here?"></img>
        <img src={art4} style={small} title="First Generation" alt="First Generation"></img>
        <img src={art5} style={small} title="Repression" alt="Repression"></img>
        <img src={art6} style={small} title="Idle Worship" alt="Idle Worship"></img>
        <img src={art7} style={small} title="So Much More" alt="So Much More"></img>
        <img src={art8} style={small} title="Cloud Watching" alt="Cloud Watching"></img>
        <img src={art9} style={small} title="Daydreaming" alt="Daydreaming"></img>
      </div>
    ),
  },
];

export const more = [
  {
    name: "Blueprint, Mee Panyar",
    details: {
      date: "September 2020 - May 2021",
      tags: "Mobile Dev",
    },
    description: "Mobile app built to support rural technicians in the maintenance and operation of solar grids.",
    link: "https://github.com/calblueprint/meepanyar",
  },
  {
    name: "Same Home Different Hacks, DAINCE",
    details: {
      date: "June 2020",
      tags: "Web Dev, UI/UX, Art",
    },
    description: "Learn how to dance with AI.",
    link: "https://devpost.com/software/same-home-different-hacks-cssi-2020-team-1",
  },
  {
    name: "Ludum Dare 45, Ashes to Ash",
    details: {
      date: "October 2019",
      tags: "Game Dev, Art, Animation",
    },
    description: "Platformer game about collecting emotions.",
    link: "https://ldjam.com/events/ludum-dare/45/ashes-to-ash/",
  },
  {
    name: "StudyBuddy",
    details: {
      date: "May 2019",
      tags: "Web Dev, UI/UX",
    },
    description: "Website that generates formatted, interactive notes from plaintext.",
    link: "https://cnnmon.github.io/studybuddy/",
  },
  {
    name: "Ludum Dare 44, Slice of Scythe",
    details: {
      date: "April 2019",
      tags: "Game Dev, Art",
    },
    description: "Point-and-click game about grim reapers/buying hats.",
    link: "https://cnnmon.itch.io/slice-of-scythe",
  },
  {
    name: "Cleveland Clinic, KittyClinic",
    details: {
      date: "November 2018",
      tags: "Game Dev, Art, Writing, Music",
    },
    description: "Cat clinic simulator about the emotional effects of holistic medicine.",
    link: "https://cnnmon.itch.io/kittyclinic",
  },
  {
    name: "Spacebar",
    details: {
      date: "September 2018",
      tags: "Game Dev, Art, Animation, Music",
    },
    description: "Space-based endless runner and typing game.",
    link: "https://cnnmon.itch.io/spacebar",
  },
];
