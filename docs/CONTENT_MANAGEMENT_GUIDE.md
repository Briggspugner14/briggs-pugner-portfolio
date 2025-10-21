# Content Management System Guide

This guide explains how to easily manage and update your academic portfolio website content using the text-based content management system.

## 📁 File Structure

```
academic-website/
├── content.txt              # Main content file (edit this!)
├── data.json               # Generated JSON data
├── convert-content.js      # Conversion script
├── generate-project-pages.js # Project page generator
├── project-template.html   # Template for project pages
├── index.html             # Main portfolio page
├── styles.css             # Website styling
├── script.js              # Website functionality
└── [project-pages].html   # Individual project pages
```

## 🚀 Quick Start

### 1. Edit Your Content
Open `content.txt` and make your changes. This file contains all your website content in an easy-to-read format.

### 2. Convert to JSON
Run the conversion script:
```bash
node convert-content.js
```

### 3. Generate Project Pages (Optional)
If you've updated project details, regenerate the individual project pages:
```bash
node generate-project-pages.js
```

### 4. View Your Changes
Open your website in a browser to see the updates!

## ✏️ Content File Structure

### Personal Information
```
## Personal Information
Name: Your Name
Title: Your Title
Description: Your description
Email: your.email@domain.com
Phone: (123) 456-7890
Location: Your Location
LinkedIn: https://linkedin.com/in/yourprofile
Website: https://yourwebsite.com
```

### Education
```
## Education
Degree: Your Degree
Institution: Your University
Duration: 2020 - 2024
Description: Your education description

### Achievements
- Achievement 1
- Achievement 2
- Achievement 3
```

### Awards & Recognition
```
## Awards & Recognition

### Award 1
Title: Award Name
Organization: Awarding Organization
Date: 2024
Icon: trophy
Description: Award description
```

### Projects
```
## Projects

### Project 1
Title: Project Name
Role: Your Role
Duration: 2024 - 2025
Image: WebsiteImages/project-image.jpg
Description: Brief project description
Technologies: Technology 1, Technology 2, Technology 3
Link: project-page.html
Status: Ongoing
Institution: Your Institution
Subtitle: Project Subtitle

#### Detailed Content
Overview: Detailed project overview
Objectives:
- Objective 1
- Objective 2
- Objective 3
Technical Approach:
Section 1: Description of technical approach section 1
Section 2: Description of technical approach section 2
Additional Technologies: Additional Tech 1, Additional Tech 2
Key Contributions:
- Contribution 1
- Contribution 2
- Contribution 3
Results: Project results and impact
Future Work: Future work and next steps
```

### Skills
```
## Skills

### Programming Languages
Python: 90
JavaScript: 85
C++: 80

### Engineering Software
SolidWorks: 85
AutoCAD: 80

### Languages
English: Native
Spanish: Fluent
```

## 🔧 Advanced Features

### Dynamic Project Pages
The system can generate individual project pages automatically. Each project can have:

- **Basic Information**: Title, role, duration, status, institution
- **Overview**: Detailed project description
- **Objectives**: List of research/project objectives
- **Technical Approach**: Detailed technical sections
- **Technologies**: All technologies used (basic + additional)
- **Contributions**: Your specific contributions
- **Results**: Project outcomes and impact
- **Future Work**: Next steps and future directions

### Content Validation
The conversion script includes basic validation to ensure:
- Required fields are present
- Data types are correct
- Links and images are properly formatted

## 📝 Editing Tips

### Adding a New Project
1. Add a new `### Project X` section in `content.txt`
2. Fill in all the basic information
3. Add detailed content under `#### Detailed Content`
4. Run `node convert-content.js`
5. Run `node generate-project-pages.js` to create the individual page

### Updating Existing Content
1. Edit the relevant section in `content.txt`
2. Run `node convert-content.js`
3. If it's a project, also run `node generate-project-pages.js`

### Adding New Awards
1. Add a new `### Award X` section
2. Fill in title, organization, date, icon, and description
3. Run `node convert-content.js`

## 🎨 Customization

### Icons
Use Font Awesome icon names for awards:
- `trophy` - Trophy icon
- `medal` - Medal icon
- `rocket` - Rocket icon
- `graduation-cap` - Graduation cap
- `star` - Star icon
- `certificate` - Certificate icon

### Technologies
List technologies separated by commas. The system will automatically create tags for them.

### Images
Place images in the `WebsiteImages/` folder and reference them with the full path.

## 🚀 Deployment

### Local Development
```bash
# Start a local server
npx live-server

# Or use Python
python -m http.server 8000
```

### Production Deployment
1. Upload all files to your hosting platform
2. Ensure `data.json` is accessible
3. Test that all project pages load correctly

## 🔍 Troubleshooting

### Common Issues

**Content not updating:**
- Make sure you ran `node convert-content.js` after editing
- Check that `data.json` was updated
- Clear your browser cache

**Project pages not working:**
- Run `node generate-project-pages.js` after updating project content
- Check that the project link in `content.txt` matches the filename

**Images not loading:**
- Verify image paths in `content.txt` are correct
- Ensure images exist in the `WebsiteImages/` folder

**JSON parsing errors:**
- Check for syntax errors in `content.txt`
- Make sure all sections are properly formatted
- Verify that colons and dashes are used correctly

### Getting Help
- Check the console for JavaScript errors
- Validate your `content.txt` format
- Ensure all required fields are present

## 📋 Content Checklist

Before publishing, verify:
- [ ] All personal information is current
- [ ] Education details are accurate
- [ ] Awards and achievements are up to date
- [ ] Project descriptions are complete
- [ ] All images load correctly
- [ ] Links work properly
- [ ] Skills and technologies are current
- [ ] Contact information is correct

## 🎯 Best Practices

1. **Keep it current**: Regularly update your content
2. **Be specific**: Provide detailed descriptions for projects
3. **Use consistent formatting**: Follow the established structure
4. **Test thoroughly**: Always test changes locally first
5. **Backup regularly**: Keep backups of your content files
6. **Version control**: Use Git to track changes

This system makes it incredibly easy to maintain your academic portfolio without touching any HTML or CSS code!
