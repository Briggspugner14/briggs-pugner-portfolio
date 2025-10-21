// Script to generate individual project pages from data.json
// Run with: node generate-project-pages.js

const fs = require('fs');
const path = require('path');

// Read the project template
const template = fs.readFileSync('project-template.html', 'utf8');

// Read the data file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Function to create a project page
function createProjectPage(project) {
    let pageContent = template;
    
    // Replace placeholders with actual content
    pageContent = pageContent.replace('Loading...', project.title);
    pageContent = pageContent.replace('Loading...', project.subtitle || project.description);
    pageContent = pageContent.replace('Loading...', project.duration);
    pageContent = pageContent.replace('Loading...', project.role);
    pageContent = pageContent.replace('Loading...', project.institution || 'University of Maryland Eastern Shore');
    pageContent = pageContent.replace('Loading...', project.status || 'Ongoing');
    
    // Update page title
    pageContent = pageContent.replace('Project - Briggs Pugner', `${project.title} - Briggs Pugner`);
    
    // Update overview
    const overview = project.detailedContent?.overview || project.description;
    pageContent = pageContent.replace('Loading...', overview);
    
    // Update image
    if (project.image) {
        pageContent = pageContent.replace(
            '<i class="fas fa-cog fa-spin" style="font-size: 4rem; color: #2563eb;"></i>',
            `<img src="${project.image}" alt="${project.title}">`
        );
    }
    
    // Update technologies
    const allTechnologies = [...(project.technologies || []), ...(project.detailedContent?.additionalTechnologies || [])];
    const techTags = allTechnologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    pageContent = pageContent.replace('<div class="tech-stack" id="tech-stack">', `<div class="tech-stack" id="tech-stack">${techTags}`);
    
    // Add detailed content sections
    if (project.detailedContent) {
        addDetailedContent(pageContent, project.detailedContent);
    }
    
    return pageContent;
}

function addDetailedContent(pageContent, detailedContent) {
    // Add objectives
    if (detailedContent.objectives) {
        const objectivesList = detailedContent.objectives.split('\n').filter(item => item.trim()).map(item => `<li>${item.trim()}</li>`).join('');
        pageContent = pageContent.replace(
            '<div class="project-section" id="objectives-section" style="display: none;">',
            '<div class="project-section" id="objectives-section">'
        );
        pageContent = pageContent.replace(
            '<ul class="content-list" id="objectives-list">',
            `<ul class="content-list" id="objectives-list">${objectivesList}`
        );
    }
    
    // Add technical approach
    if (detailedContent.technicalApproach) {
        const sections = detailedContent.technicalApproach.split(/(?=[A-Z][^:]*:)/).filter(s => s.trim());
        const technicalContent = sections.map(section => {
            const [title, content] = section.split(':').map(s => s.trim());
            return `
                <div class="technical-approach">
                    <h4>${title}</h4>
                    <p>${content}</p>
                </div>
            `;
        }).join('');
        
        pageContent = pageContent.replace(
            '<div class="project-section" id="technical-approach-section" style="display: none;">',
            '<div class="project-section" id="technical-approach-section">'
        );
        pageContent = pageContent.replace(
            '<div id="technical-approach-content">',
            `<div id="technical-approach-content">${technicalContent}`
        );
    }
    
    // Add contributions
    if (detailedContent.keyContributions) {
        const contributionsList = detailedContent.keyContributions.split('\n').filter(item => item.trim()).map(item => `<li>${item.trim()}</li>`).join('');
        pageContent = pageContent.replace(
            '<div class="project-section" id="contributions-section" style="display: none;">',
            '<div class="project-section" id="contributions-section">'
        );
        pageContent = pageContent.replace(
            '<ul class="content-list" id="contributions-list">',
            `<ul class="content-list" id="contributions-list">${contributionsList}`
        );
    }
    
    // Add results
    if (detailedContent.results) {
        pageContent = pageContent.replace(
            '<div class="project-section" id="results-section" style="display: none;">',
            '<div class="project-section" id="results-section">'
        );
        pageContent = pageContent.replace('Loading...', detailedContent.results);
    }
    
    // Add future work
    if (detailedContent.futureWork) {
        pageContent = pageContent.replace(
            '<div class="project-section" id="future-work-section" style="display: none;">',
            '<div class="project-section" id="future-work-section">'
        );
        pageContent = pageContent.replace('Loading...', detailedContent.futureWork);
    }
    
    return pageContent;
}

// Generate pages for each project
if (data.projects) {
    data.projects.forEach(project => {
        if (project.link) {
            const pageContent = createProjectPage(project);
            const filename = project.link;
            
            // Create backup if file exists
            if (fs.existsSync(filename)) {
                fs.copyFileSync(filename, `${filename}.backup`);
            }
            
            // Write the new file
            fs.writeFileSync(filename, pageContent);
            console.log(`Generated: ${filename}`);
        }
    });
    
    console.log('All project pages generated successfully!');
} else {
    console.log('No projects found in data.json');
}
