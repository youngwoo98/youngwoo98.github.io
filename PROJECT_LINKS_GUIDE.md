# 🔗 Project Links Guide

## How It Works Now

The project buttons are **smart** - they only show when you have actual links!

### Behavior:

- ✅ **Has GitHub link** → Shows "Code" button
- ✅ **Has Live Demo link** → Shows "Live Demo" button
- ✅ **Has both** → Shows both buttons
- ❌ **Has neither** → Shows "Links coming soon"

## How to Add Your Links

Open `components/Projects.tsx` and update the project objects:

```typescript
const projects = [
  {
    title: t('project1.title'),
    description: t('project1.desc'),
    image: '/project1-screenshot.png',
    tags: ['Python', 'OpenCV', 'YOLO'],
    github: 'https://github.com/youngwoo98/project-name',  // ← Add your repo link
    live: 'https://your-project-demo.com',                  // ← Add demo link (or leave empty)
  },
  // ... more projects
];
```

## Examples

### Example 1: Has Both Links
```typescript
{
  github: 'https://github.com/youngwoo98/object-detection',
  live: 'https://object-detection-demo.vercel.app',
}
// Result: Shows both "Code" and "Live Demo" buttons
```

### Example 2: Only GitHub (No Demo)
```typescript
{
  github: 'https://github.com/youngwoo98/data-pipeline',
  live: '',  // Empty = no live demo
}
// Result: Shows only "Code" button
```

### Example 3: No Links Yet
```typescript
{
  github: '',
  live: '',
}
// Result: Shows "Links coming soon" text
```

### Example 4: Private Repo (No Code Link)
```typescript
{
  github: '',  // Private repo, don't share
  live: 'https://my-deployed-app.com',
}
// Result: Shows only "Live Demo" button
```

## Link Types You Can Use

### GitHub Links
- Main repo: `https://github.com/username/repo-name`
- Specific branch: `https://github.com/username/repo-name/tree/feature-branch`
- Release: `https://github.com/username/repo-name/releases`

### Live Demo Links
- Vercel: `https://project-name.vercel.app`
- Netlify: `https://project-name.netlify.app`
- GitHub Pages: `https://username.github.io/project-name`
- Heroku: `https://project-name.herokuapp.com`
- Custom domain: `https://your-custom-domain.com`

## Tips for Projects Without Live Demos

Some projects can't have live demos (like desktop apps, hardware projects, etc.):

### Option 1: Video Demo
Upload to YouTube and link:
```typescript
live: 'https://youtube.com/watch?v=YOUR_VIDEO_ID',
```

### Option 2: Demo Screenshots
Create a page with screenshots:
```typescript
live: 'https://github.com/username/project/wiki/Demo',
```

### Option 3: Documentation
Link to detailed README or docs:
```typescript
live: 'https://github.com/username/project#readme',
```

## Project Images

You can also update project screenshots:

### Option 1: Use Your Own Screenshots
```typescript
{
  image: '/projects/project1.png',  // Add to public/projects/
  // ...
}
```

### Option 2: Keep Placeholders
The current Unsplash images work as placeholders until you add your own.

## Full Example

```typescript
const projects = [
  {
    title: 'Real-time Object Detection',
    description: 'YOLO-based system for detecting objects in video streams',
    image: '/projects/object-detection.png',
    tags: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
    github: 'https://github.com/youngwoo98/object-detection-system',
    live: 'https://youtube.com/watch?v=demo123',  // Video demo
  },
  {
    title: 'Data Pipeline Dashboard',
    description: 'ETL pipeline with real-time analytics dashboard',
    image: '/projects/data-pipeline.png',
    tags: ['Python', 'Kafka', 'Flink', 'React'],
    github: 'https://github.com/youngwoo98/data-pipeline',
    live: 'https://data-dashboard.vercel.app',
  },
  {
    title: 'Robot Control Interface',
    description: 'Web-based control system for robotic hardware',
    image: '/projects/robot-interface.png',
    tags: ['React', 'ROS', 'WebSocket', 'Python'],
    github: '',  // Private/company code
    live: '',    // Hardware project, no online demo
  },
];
```

## Styling

The buttons now have:
- ✨ **Smooth hover animations** - Scale up on hover
- 🎯 **Visual feedback** - Color changes
- 🔗 **External link icons** - Clear visual cues
- 📱 **Mobile-friendly** - Touch-optimized

## What's Next?

1. **Add your actual project links** to `components/Projects.tsx`
2. **Replace placeholder images** with your project screenshots
3. **Update project descriptions** to match your real projects
4. **Commit and push** to see changes live

---

**Current Status**: Buttons are conditional and only show when you have links! ✨

