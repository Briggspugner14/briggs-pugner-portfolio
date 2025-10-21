# Website Folder Organization

## New Folder Structure

Your Academic Website has been reorganized into a clean, logical folder structure:

```
Academic_Website/
├── assets/                    # All images and media files
│   └── WebsiteImages/         # Project images and photos
│       ├── 3-axis-cover.png
│       ├── cell_impedance.png
│       ├── FlowCytometryDesk.jpg
│       ├── launcher_control.jpg
│       ├── Launcher.jpg
│       ├── LCS_Wiring.png
│       ├── MLP_Blk_Diagram.png
│       ├── NASA_Award.jpg
│       ├── RadiativeCooling.jpg
│       ├── ShippingContainer.jpg
│       ├── SickleDetectionCover.png
│       ├── SULI_Poster.png
│       └── UMES_Symposium.jpg
├── content/                   # Content management files
│   ├── content.txt           # Main content file
│   └── data.json             # Data configuration
├── docs/                      # Documentation files
│   ├── Briggs_Pugner.pdf     # Resume/CV
│   ├── CONTENT_MANAGEMENT_GUIDE.md
│   ├── README.md
│   └── WEBSITE_INFORMATION.md
├── projects/                  # All project-related files
│   ├── automated-launcher-control-system.html
│   ├── automated-launcher-control-system.txt
│   ├── cell-impedance-project.html
│   ├── cell-impedance-project.txt
│   ├── moments-of-inertia-project.html
│   ├── moments-of-inertia-project.txt
│   ├── muse-stellarator-project.html
│   ├── muse-stellarator-project.txt
│   ├── project-template.html
│   ├── radiative-cooling-project.html
│   ├── radiative-cooling-project.txt
│   ├── sickle-cell-detection-project.html
│   └── sickle-cell-detection-project.txt
├── scripts/                   # JavaScript and automation scripts
│   ├── convert-content.js
│   ├── generate-project-pages.js
│   └── script.js
├── index.html                 # Main website page
└── styles.css                 # Main stylesheet
```

## Updated File Paths

All file paths have been updated to reflect the new organization:

### Image Paths
- **From project HTML files (in projects/ folder):** `../assets/WebsiteImages/filename.jpg`
- **From project text files (in projects/ folder):** `../assets/WebsiteImages/filename.jpg`
- **From content files (in content/ folder):** `assets/WebsiteImages/filename.jpg`
- **From root files (index.html, etc.):** `assets/WebsiteImages/filename.jpg`

### CSS Paths
- **From project HTML files (in projects/ folder):** `../styles.css`
- **From root files (index.html, etc.):** `styles.css`

### Project Links
- **Old:** `project-name.html`
- **New:** `projects/project-name.html`

### Content Files
- **Old:** `content.txt` (in root)
- **New:** `content/content.txt`

## Benefits of This Organization

1. **Clean Structure** - Easy to navigate and find files
2. **Logical Grouping** - Related files are grouped together
3. **Scalable** - Easy to add new projects, images, or content
4. **Maintainable** - Clear separation of concerns
5. **Professional** - Industry-standard folder organization

## Project Text Files

Each project now has its own dedicated text file in the `projects/` folder:
- `radiative-cooling-project.txt`
- `cell-impedance-project.txt`
- `muse-stellarator-project.txt`
- `sickle-cell-detection-project.txt`
- `automated-launcher-control-system.txt`
- `moments-of-inertia-project.txt`

These files contain:
- Project overview and details
- Image placeholders with correct paths
- Content management notes
- Links to corresponding HTML pages

## Next Steps

1. **Add Images** - Use the placeholder sections in each project file to add new images
2. **Update Content** - Fill in the template sections with your specific project details
3. **Maintain Structure** - Keep new files organized in the appropriate folders
4. **Update Scripts** - Modify any scripts that reference the old file paths if needed
