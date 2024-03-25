import React, { Fragment } from 'react';
import VideoPreview from '../VideoPreview';

import easyOnMeThumbnail from '../../assets/images/eom-video-thumbnail.jpeg';
import wingsThumbnail from '../../assets/images/wings-thumbnail-video.jpeg';

const Videos = () => {
  return (
    <Fragment>
      <VideoPreview
        url='https://www.youtube.com/embed/Ch5yM42IwPM?&amp;color=white&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;autoplay=1'
        title='IRhay - Easy On Me Video.'
        thumbnail={easyOnMeThumbnail}
      />
      <VideoPreview
        url='https://www.youtube.com/embed/NHmugCLeMEg?&amp;color=white&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;autoplay=1'
        title='IRhay- Wings Music Video'
        thumbnail={wingsThumbnail}
      />
    </Fragment>
  );
};

export default Videos;
