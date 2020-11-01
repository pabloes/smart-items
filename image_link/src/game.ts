import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import ImageLink, { Props } from './item'

const imageLink = new ImageLink()
const spawner = new Spawner<Props>(imageLink)

spawner.spawn(
  'imageLink',
  new Transform({
    position: new Vector3(4, 1, 8),
    scale: new Vector3(4, 4, 4),
  }),
  {
    image: 'https://i.imgur.com/d25gO61.jpg',
    link: 'https://events.decentraland.org/en/'
  }
)
