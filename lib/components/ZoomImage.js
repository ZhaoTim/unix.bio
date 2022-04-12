import {
  Image,
} from '@geist-ui/core'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ZoomImage = (props) => {
  return (
    <Zoom wrapStyle={{ display: 'flex' }}>
      <Image {...props} />
    </Zoom>
  )
};

export default ZoomImage;
