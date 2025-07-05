import React from 'react';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';


function SocialShare() {
  const shareUrl = 'https://your-fitness-app.com';
  const title = 'Check out my fitness progress with FitTrack!';

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl mb-2">Share Your Progress</h2>
      <div className="flex space-x-4">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default SocialShare;
