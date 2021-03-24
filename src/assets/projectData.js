import Coffeelings from '../components/projects/Coffeelings';
import coffeelings from './projects/coffeelings.png';
import Boba from '../components/projects/Boba';
import boba from './projects/boba.png';
import Daince from '../components/projects/Daince';
import daince from './projects/daince.png';
import GoodMorning from '../components/projects/GoodMorning';
import goodmorning from './projects/goodmorning.png';
import CardioCasino from '../components/projects/CardioCasino';
import cardiocasino from './projects/cardiocasino.png';
import SliceOfScythe from '../components/projects/SliceOfScythe';
import sliceofscythe from './projects/sliceofscythe.png';
import Art from '../components/projects/Art';
import illust from './projects/illust.png';

const projects = [
  {
    url: "coffeelings",
    title: "coffeelings ☕",
    description: "mood tracking chrome extension",
    img: coffeelings,
    component: Coffeelings,
  },
  {
    url: "goodmorning",
    title: "good morning! 🌞",
    description: "morning routine simulator",
    img: goodmorning,
    component: GoodMorning,
  },
  {
    url: "boba",
    title: "boba ✨",
    description: "boba-themed mobile puzzle game",
    img: boba,
    component: Boba,
  },
  {
    url: "cardiocasino",
    title: "cardiocasino 💞",
    description: "interactive look at cardiovascular research",
    img: cardiocasino,
    component: CardioCasino,
  },
  {
    url: "daince",
    title: "daince 💃",
    description: "learn to dance with ai",
    img: daince,
    component: Daince,
  },
  {
    url: "sliceofscythe",
    title: "slice of scythe 🎩",
    description: "ludum dare 44 point-and-click game",
    img: sliceofscythe,
    component: SliceOfScythe,
  },
  {
    url: "art",
    title: "art portfolio 🎨",
    description: "illustrations about introspection",
    img: illust,
    component: Art,
  },
];

export default projects;
