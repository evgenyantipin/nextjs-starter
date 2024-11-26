import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => <EmblaCarousel slides={SLIDES} options={OPTIONS} />;

export default Carousel;
