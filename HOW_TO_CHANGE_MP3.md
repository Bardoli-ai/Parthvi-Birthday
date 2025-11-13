# How to Change the MP3 File

## Simple Steps:

1. **Open the backend file:**
   - Go to: `backend/server.py`

2. **Find the AUDIO_CONFIG section** (at the top of the file):
   ```python
   # ============================================
   # AUDIO CONFIGURATION - CHANGE MP3 URL HERE
   # ============================================
   AUDIO_CONFIG = {
       "audio_url": "YOUR_MP3_URL_HERE",
       "song_title": "A Song Just For You",
       "gifted_by": "Jainish Chaudhari and Dhruv Patel"
   }
   # ============================================
   ```

3. **Change the values:**
   - `audio_url`: Replace with your new MP3 file URL
   - `song_title`: Change the song title if needed
   - `gifted_by`: Update the names if needed

4. **Save and push to GitHub:**
   ```bash
   git add backend/server.py
   git commit -m "Update MP3 file"
   git push
   ```

5. **Done!** The changes will be live after deployment.

## Example:

```python
AUDIO_CONFIG = {
    "audio_url": "https://example.com/my-new-song.mp3",
    "song_title": "Birthday Special 2025",
    "gifted_by": "Jainish, Dhruv and Friends"
}
```

## Where to host MP3 files:
- Google Drive (make sure link is public)
- Dropbox (use direct download link)
- Amazon S3
- Any CDN or file hosting service

**Note:** Make sure the URL ends with `.mp3` and is publicly accessible.
