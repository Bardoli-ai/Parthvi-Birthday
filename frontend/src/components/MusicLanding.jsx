import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Heart, Music2, Volume2, Gift, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import './MusicLanding.css';

// ============================================
// CONFIGURATION - CHANGE MP3 URL HERE
// ============================================
const AUDIO_CONFIG = {
  audioUrl: 'https://customer-assets.emergentagent.com/job_songcraft-for-you/artifacts/8rton931_We%E2%80%99ve%20seen%20each%20other%20break%2C%20we%E2%80%99ve%20seen%20%20%282%29.mp3',
  songTitle: 'A Song Just For You',
  giftedBy: 'Jainish Chaudhari and Dhruv Patel'
};
// ============================================

const MusicLanding = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [showGift, setShowGift] = useState(true);
  const audioRef = useRef(null);

  const lyrics = `[Verse 1]
We've seen each other break, we've seen each other bloom,
Shared secrets in the dark, and laughter in a crowded room.
Through heartbreaks and chaos, through all of life's spin,
You taught us to stay soft — and still be strong within.

[Pre-Chorus]
You never wear a mask, you never fake the light,
You're the calm in our storm, the truth in the night.

[Chorus]
Because of you, the world feels a little brighter,
The weight feels a little lighter.
You keep the child in us alive,
Make us better men, help us thrive.
So here's to you, the wild and kind,
A soul like yours is hard to find.
Happy birthday, Parthvi — stay you, stay true,
We've got your back, we always do.

[Verse 2]
We've bitched, we've laughed, we've made our stand,
Sometimes against the world, sometimes hand in hand.
We fight and forgive, 'cause that's just our way,
But every goodbye feels too far away.

[Bridge]
You remind us that being real is rare,
That love's not perfect, but it's there.
So if the nights get dark and long,
We'll be there — with your favorite song.

[Final Chorus]
Because of you, life's a little sweeter,
Every high a bit higher, every low a bit neater.
You keep the magic in the mundane,
The laughter after the pain.
So here's to you — our heart, our friend,
The one who makes time stop and bend.
Happy birthday Parthvi, our beautiful light,
Stay you — the world feels right.`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      if (showGift) {
        setTimeout(() => setShowGift(false), 1000);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleHeartClick = () => {
    setHeartClicked(true);
    setTimeout(() => setHeartClicked(false), 2000);
  };

  return (
    <div className="music-landing">
      <audio ref={audioRef} src={AUDIO_CONFIG.audioUrl} preload="metadata" />
      
      {/* Confetti elements */}
      <div className="confetti-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`confetti confetti-${i % 5}`} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }} />
        ))}
      </div>

      {/* Floating music and gift elements */}
      <div className="floating-elements">
        <Music2 className="float-element" style={{ top: '10%', left: '10%' }} />
        <Gift className="float-element" style={{ top: '15%', right: '12%' }} />
        <Sparkles className="float-element" style={{ bottom: '15%', left: '15%' }} />
        <Music2 className="float-element" style={{ bottom: '20%', right: '10%' }} />
      </div>

      <div className="content-wrapper">
        {/* Birthday Header */}
        <div className="birthday-header">
          <Gift className="gift-icon-header" />
          <h2 className="birthday-greeting">Happy Birthday Parthvi!</h2>
        </div>

        {/* Top Section - Cover Art with Gift */}
        <div className="cover-section">
          <div className="cover-art-wrapper">
            {showGift && (
              <div className="gift-overlay">
                <Gift size={120} className="gift-box-icon" />
                <p className="gift-text">Tap play to unwrap your gift</p>
              </div>
            )}
            <div className={`cover-art ${isPlaying ? 'playing' : ''} ${!showGift ? 'revealed' : ''}`}>
              <div className="cover-placeholder">
                <Music2 size={80} className="cover-icon" />
                <div className="sound-waves">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="song-title">{AUDIO_CONFIG.songTitle}</h1>
          <p className="song-subtitle">Gifted By: {AUDIO_CONFIG.giftedBy}</p>
        </div>

        {/* Middle Section - Music Player */}
        <div className="player-section">
          <div className="player-controls">
            <Button
              onClick={togglePlay}
              size="lg"
              className="play-button"
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </Button>
          </div>

          <div className="progress-section">
            <span className="time-display">{formatTime(currentTime)}</span>
            <div className="progress-bar-container" onClick={handleSeek}>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="progress-pulse"></div>
                </div>
              </div>
            </div>
            <span className="time-display">{formatTime(duration)}</span>
          </div>

          <Button
            onClick={() => setShowLyrics(!showLyrics)}
            variant="outline"
            className="lyrics-toggle"
          >
            <Volume2 size={18} className="mr-2" />
            {showLyrics ? 'Hide Lyrics' : 'Show Lyrics'}
          </Button>
        </div>

        {/* Lyrics Section */}
        {showLyrics && (
          <div className="lyrics-section">
            <pre className="lyrics-text">{lyrics}</pre>
          </div>
        )}

        {/* Bottom Section - Message */}
        <div className={`message-section ${showMessage ? 'visible' : ''}`}>
          <p className="message-text">
            Every note in this song has a memory,<br />
            every lyric a little piece of our story.
          </p>
          <button
            className={`heart-button ${heartClicked ? 'clicked' : ''}`}
            onClick={handleHeartClick}
          >
            <Heart className="heart-icon" fill={heartClicked ? 'currentColor' : 'none'} />
          </button>
          {heartClicked && (
            <p className="heart-message">You're our favorite person</p>
          )}
        </div>

        {/* Footer Signature */}
        <div className="signature">
          <p>With love, Jainish & Dhruv</p>
        </div>
      </div>
    </div>
  );
};

export default MusicLanding;