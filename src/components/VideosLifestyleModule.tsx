'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { curatedVideos, CuratedVideo } from '@/data/videos';
import { winterGearChecklist, calgaryClimatePhenomena } from '@/data/lifestyleWinter';
import { 
  Play, 
  Video, 
  Snowflake, 
  Sun, 
  Wind, 
  ExternalLink, 
  X, 
  Clock
} from 'lucide-react';

export function VideosLifestyleModule() {
  const { t, activeVideoId, openVideoModal, closeVideoModal, isRtl } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<CuratedVideo | null>(null);

  const handlePlayVideo = (vid: CuratedVideo) => {
    setSelectedVideo(vid);
    openVideoModal(vid.embedId);
  };

  return (
    <section id="videos-lifestyle" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 mb-2">
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span>LIVED EXPERIENCE & WINTER ADAPTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.videos.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.videos.subtitle}
            </p>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {curatedVideos.map((vid) => (
            <div
              key={vid.id}
              className="glass-panel glass-card-hover rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Real YouTube Thumbnail & Play Trigger */}
                <div
                  onClick={() => handlePlayVideo(vid)}
                  className="relative h-44 bg-slate-900 cursor-pointer group flex items-center justify-center border-b border-slate-800 overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${vid.embedId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
                  <div className="absolute w-12 h-12 rounded-full bg-red-600/95 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-black/60">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/85 font-mono text-[10px] text-white">
                    {vid.duration}
                  </span>
                  <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded font-mono text-[10px] font-semibold border ${
                    vid.language === 'Arabic' 
                      ? 'bg-amber-950/90 text-amber-300 border-amber-700/60' 
                      : 'bg-slate-950/90 text-sky-400 border-sky-800/60'
                  }`}>
                    {vid.language === 'Arabic' ? 'عربي' : 'EN'} • {isRtl ? vid.arabicCategory : vid.category}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[11px] text-slate-400 block mb-1 font-medium">
                    {vid.channelName} • {vid.publishedYear}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 mb-2">
                    {isRtl ? vid.arabicTitle : vid.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-light">
                    {isRtl ? vid.arabicWhyWatch : vid.whyWatch}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => handlePlayVideo(vid)}
                  className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Play className="w-3 h-3 text-red-400 fill-red-400" />
                  <span>Watch &amp; Key Takeaways</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideoId && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl overflow-hidden glass-panel border border-slate-700 rounded-2xl shadow-2xl bg-slate-950">
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-sm font-bold text-white truncate max-w-md">
                    {selectedVideo.title}
                  </span>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Responsive Embed */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5 text-xs text-slate-300 space-y-3">
                <strong className="text-sky-400 block text-xs uppercase tracking-wider">
                  Core Relocation Takeaways:
                </strong>
                <ul className="space-y-1.5">
                  {selectedVideo.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                  <span>Channel: {selectedVideo.channelName}</span>
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                  >
                    <span>Open in YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* First Winter Survival Guide Section */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              WINTER CLIMATE & PRACTICAL READINESS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {t.winter.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {t.winter.subtitle}
            </p>
          </div>

          {/* Chinook & Sunshine Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-xs">
            <div className="glass-panel-sky rounded-2xl p-5 border border-sky-500/30">
              <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                <Wind className="w-4 h-4" />
                <span>{isRtl ? calgaryClimatePhenomena.chinooks.arabicTitle : calgaryClimatePhenomena.chinooks.title}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {isRtl ? calgaryClimatePhenomena.chinooks.arabicDescription : calgaryClimatePhenomena.chinooks.description}
              </p>
            </div>

            <div className="glass-panel-gold rounded-2xl p-5 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <Sun className="w-4 h-4" />
                <span>{isRtl ? calgaryClimatePhenomena.sunshine.arabicTitle : calgaryClimatePhenomena.sunshine.title}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {isRtl ? calgaryClimatePhenomena.sunshine.arabicDescription : calgaryClimatePhenomena.sunshine.description}
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2">
                <Clock className="w-4 h-4" />
                <span>{isRtl ? calgaryClimatePhenomena.daylightCycle.arabicTitle : calgaryClimatePhenomena.daylightCycle.title}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {isRtl ? calgaryClimatePhenomena.daylightCycle.arabicDescription : calgaryClimatePhenomena.daylightCycle.description}
              </p>
            </div>
          </div>

          {/* Winter Gear Checklist (Must Have vs Nice to Have) */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-sky-400" />
                <span>Family Winter Outfitting Checklist (5 Members)</span>
              </h4>
              <span className="text-xs text-amber-400 font-mono">
                Total Budget: ~$2,000–$2,800 CAD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {winterGearChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        item.priority === 'MUST HAVE'
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {item.priority}
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">
                        ${item.estimatedCostFamilyCAD} CAD
                      </span>
                    </div>

                    <h5 className="font-bold text-white mb-1.5">
                      {isRtl ? item.arabicName : item.name}
                    </h5>
                    <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                      {isRtl ? item.arabicWhyNeeded : item.whyNeeded}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
