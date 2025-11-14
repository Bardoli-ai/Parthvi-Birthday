# How to Change MP3 (Frontend Only)

## Easy Steps:

1. **Open the file:**
   - Go to: `frontend/src/components/MusicLanding.jsx`

2. **Find the AUDIO_CONFIG section** (at the very top of the component):
   ```javascript
   // ============================================
   // CONFIGURATION - CHANGE MP3 URL HERE
   // ============================================
   const AUDIO_CONFIG = {
     audioUrl: 'YOUR_MP3_URL_HERE',
     songTitle: 'A Song Just For You',
     giftedBy: 'Jainish Chaudhari and Dhruv Patel'
   };
   // ============================================
   ```

3. **Change the values:**
   - `audioUrl`: Replace with your new MP3 file URL
   - `songTitle`: Change the song title if needed
   - `giftedBy`: Update the names if needed

4. **Save and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update MP3 file"
   git push
   ```

5. **Netlify auto-deploys!** Your changes will be live in 2-3 minutes.

---

## Example:

```javascript
const AUDIO_CONFIG = {
  audioUrl: 'https://example.com/my-new-birthday-song.mp3',
  songTitle: 'Birthday Special 2025',
  giftedBy: 'Jainish, Dhruv and Friends'
};
```

---

## Where to host MP3 files:
- **Google Drive:** Upload file → Right click → Get link → Make sure it's set to "Anyone with link can view"
- **Dropbox:** Upload → Share → Copy link → Change `?dl=0` to `?dl=1` at the end
- **GitHub:** Upload to your repo → Click file → Click "Raw" → Copy URL
- Any CDN or file hosting service

**Important:** The URL must be publicly accessible (no login required).
