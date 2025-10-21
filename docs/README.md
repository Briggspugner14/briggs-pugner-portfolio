# Academic Portfolio Website

A modern, responsive website to showcase your academic achievements, research, publications, and professional accomplishments.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, animated skill bars, and hover effects
- **Comprehensive Sections**:
  - Hero section with personal introduction
  - Education timeline
  - Publications showcase
  - Awards and recognition
  - Research projects
  - Skills and expertise
  - Contact form
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Print Friendly**: Includes print functionality for PDF generation

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to add your personal information
3. **Deploy**: Upload the files to any web hosting service

## Customization Guide

### 1. Personal Information

Update the following sections in `index.html`:

#### Hero Section (Lines 45-60)
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Academic Achievements & Research Portfolio</p>
<p class="hero-description">
    Welcome to my academic portfolio showcasing my educational journey, 
    research contributions, publications, and achievements in the field of [Your Field].
</p>
```

#### Contact Information (Lines 400-420)
```html
<p>your.email@university.edu</p>
<p>University Name, City, Country</p>
<p>+1 (555) 123-4567</p>
```

### 2. Education Section

Replace the sample education entries with your own:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Degree</h3>
        <h4>Your University</h4>
        <p class="timeline-date">Start Year - End Year</p>
        <p class="timeline-description">
            Description of your studies and achievements.
        </p>
        <div class="achievements">
            <span class="achievement-tag">GPA: X.XX/4.0</span>
            <span class="achievement-tag">Honor/Award</span>
        </div>
    </div>
</div>
```

### 3. Publications

Add your publications in the publications section:

```html
<div class="publication-card">
    <div class="publication-header">
        <h3>Your Paper Title</h3>
        <span class="publication-type">Journal/Conference/Book Chapter</span>
    </div>
    <p class="publication-authors">Your Name, Co-Author Name, et al.</p>
    <p class="publication-venue">Journal/Conference Name, Vol. X, Issue Y, Year</p>
    <p class="publication-abstract">
        Brief description of your research findings.
    </p>
    <div class="publication-links">
        <a href="link-to-paper" class="publication-link">
            <i class="fas fa-external-link-alt"></i> View Paper
        </a>
        <a href="citation-link" class="publication-link">
            <i class="fas fa-quote-left"></i> Cite
        </a>
    </div>
</div>
```

### 4. Awards and Recognition

Update the awards section with your achievements:

```html
<div class="award-card">
    <div class="award-icon">
        <i class="fas fa-trophy"></i>
    </div>
    <h3>Award Name</h3>
    <p class="award-organization">Organization Name</p>
    <p class="award-date">Year</p>
    <p class="award-description">
        Description of the award and its significance.
    </p>
</div>
```

### 5. Research Projects

Add your research projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-microscope"></i>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p class="project-role">Your Role</p>
        <p class="project-duration">Start Date - End Date</p>
        <p class="project-description">
            Description of your project and contributions.
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="project-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> View Details
            </a>
        </div>
    </div>
</div>
```

### 6. Skills

Update the skills section with your expertise:

```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="XX%"></div>
    </div>
</div>
```

### 7. Social Media Links

Update the social media links in the contact section:

```html
<a href="your-linkedin-url" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
<a href="your-google-scholar-url" class="social-link">
    <i class="fab fa-google-scholar"></i>
</a>
<a href="your-researchgate-url" class="social-link">
    <i class="fab fa-researchgate"></i>
</a>
<a href="your-orcid-url" class="social-link">
    <i class="fab fa-orcid"></i>
</a>
```

## Styling Customization

### Colors
The main color scheme is defined in `styles.css`. You can change the primary colors by updating these CSS variables:

```css
/* Primary blue color */
#2563eb

/* Gradient colors */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Fonts
The website uses the Inter font family. You can change this by updating the Google Fonts import in the HTML head section.

### Layout
The website uses CSS Grid and Flexbox for responsive layouts. You can adjust spacing, sizes, and layouts by modifying the CSS classes.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
Academic_Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Deployment Options

### 1. GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

### 2. Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly

### 3. Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Deploy with one click

### 4. Traditional Web Hosting
Upload the files to any web hosting service via FTP or file manager.

## Tips for Success

1. **Keep it updated**: Regularly update your publications, awards, and projects
2. **Use high-quality content**: Ensure all information is accurate and well-written
3. **Optimize images**: If you add photos, compress them for faster loading
4. **Test responsiveness**: Check your site on different devices and browsers
5. **SEO optimization**: Add relevant keywords to improve search visibility

## Support

If you need help customizing your portfolio or have questions about the code, feel free to reach out or refer to the HTML, CSS, and JavaScript comments for guidance.

## License

This project is open source and available under the MIT License.
