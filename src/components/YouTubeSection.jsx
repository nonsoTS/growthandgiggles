import React, { useState } from 'react';
import { Play } from 'lucide-react';

const YouTubeSection = ({ videoId, videoTitle, videoSubtitle, videoAlt, videoMetaTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // User to add actual YouTube video URL id here
  // const videoId = "Y4JspeXxLQo"; 

  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{videoTitle}</h2>
          {videoSubtitle && (
            <p className="text-xl text-gray-400">
              { videoSubtitle }
            </p>
          ) }
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-black aspect-video relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {!isPlaying ? (
            <>
              <img 
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                alt={videoAlt} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={videoMetaTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;