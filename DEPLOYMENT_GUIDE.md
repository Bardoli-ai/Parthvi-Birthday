# Deployment Guide

Your project has **Frontend** and **Backend** that need to be deployed separately.

## 🎨 Frontend Deployment (Netlify) - DONE ✅

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add netlify config"
   git push
   ```

2. **Netlify will automatically redeploy** with the new `netlify.toml` config

---

## 🖥️ Backend Deployment (Choose One Option)

Your backend needs to be deployed separately. Here are the easiest options:

### Option 1: Render (Recommended - Free Tier Available)

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Name:** `parthvi-birthday-backend`
   - **Root Directory:** `backend`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Environment Variables:**
     - Add `MONGO_URL` (get free MongoDB from [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))
     - Add `DB_NAME` = `parthvi_music`

5. Click "Create Web Service"
6. Copy your backend URL (e.g., `https://parthvi-birthday-backend.onrender.com`)

### Option 2: Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repo
4. Click "Add variables" and add:
   - `MONGO_URL`
   - `DB_NAME`
5. Copy your backend URL

### Option 3: Vercel (Serverless)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Configure root directory to `backend`
4. Add environment variables
5. Deploy

---

## 🔗 Connect Frontend to Backend

After deploying backend, update your frontend environment:

1. In your GitHub repo, go to Netlify dashboard
2. Go to "Site settings" → "Environment variables"
3. Update `REACT_APP_BACKEND_URL` to your deployed backend URL
   - Example: `https://parthvi-birthday-backend.onrender.com`

4. Redeploy your Netlify site

---

## 🎵 Quick Deploy (If you just want to test)

For now, if you want to skip backend deployment, you can make the frontend work with the audio URL directly:

Just use the current setup - the MP3 URL is already public and accessible!

---

## Need Help?

If you want the simplest solution, I can help you:
1. Set up a free MongoDB Atlas database
2. Deploy backend on Render (free tier)
3. Connect everything together

Let me know which deployment option you prefer!
