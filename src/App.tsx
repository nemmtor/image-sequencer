import { ImageSequencer } from './ImageSequencer'

const BASE_NAME = `hero-sequence/IDRISS_HERO_`;
const images = Array.from(Array(31).keys()).map((_, index) => `${BASE_NAME}${index.toString().padStart(4, '0')}.png`)

function App() {
  return <ImageSequencer images={images} />
}

export default App
