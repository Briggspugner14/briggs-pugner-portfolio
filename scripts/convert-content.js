// Simple script to convert content.txt to data.json
// Run with: node convert-content.js

const fs = require('fs');

function parseContentFile(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const lines = content.split('\n');
    
    const data = {
        personalInfo: {},
        education: {},
        awards: [],
        projects: [],
        skills: {
            programming: [],
            software: [],
            languages: []
        }
    };
    
    let currentSection = '';
    let currentItem = {};
    let currentSkillCategory = '';
    let inDetailedContent = false;
    let detailedContent = {};
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('## ')) {
            currentSection = line.substring(3).toLowerCase().replace(/\s+/g, '');
        } else if (line.startsWith('### ')) {
            const subsection = line.substring(4).toLowerCase().replace(/\s+/g, '');
            if (subsection.includes('award')) {
                if (Object.keys(currentItem).length > 0) {
                    data.awards.push(currentItem);
                }
                currentItem = {};
                inDetailedContent = false;
            } else if (subsection.includes('project')) {
                if (Object.keys(currentItem).length > 0) {
                    if (Object.keys(detailedContent).length > 0) {
                        currentItem.detailedContent = detailedContent;
                    }
                    data.projects.push(currentItem);
                }
                currentItem = {};
                detailedContent = {};
                inDetailedContent = false;
            } else if (subsection.includes('achievement')) {
                // Handle achievements
            } else if (subsection.includes('programming')) {
                currentSkillCategory = 'programming';
            } else if (subsection.includes('software')) {
                currentSkillCategory = 'software';
            } else if (subsection.includes('language')) {
                currentSkillCategory = 'languages';
            }
        } else if (line.startsWith('#### ')) {
            const subsection = line.substring(5).toLowerCase().replace(/\s+/g, '');
            if (subsection.includes('detailedcontent')) {
                inDetailedContent = true;
            }
        } else if (line.includes(':')) {
            const [key, value] = line.split(':').map(s => s.trim());
            const cleanKey = key.toLowerCase().replace(/\s+/g, '');
            
            if (inDetailedContent && currentSection === 'projects') {
                // Handle detailed content for projects
                if (cleanKey === 'overview') detailedContent.overview = value;
                else if (cleanKey === 'objectives') detailedContent.objectives = value;
                else if (cleanKey === 'technicalapproach') detailedContent.technicalApproach = value;
                else if (cleanKey === 'additionaltechnologies') detailedContent.additionalTechnologies = value.split(',').map(t => t.trim());
                else if (cleanKey === 'keycontributions') detailedContent.keyContributions = value;
                else if (cleanKey === 'results') detailedContent.results = value;
                else if (cleanKey === 'futurework') detailedContent.futureWork = value;
            } else if (currentSection === 'personalinformation') {
                data.personalInfo[cleanKey] = value;
            } else if (currentSection === 'education') {
                if (cleanKey === 'achievements') {
                    // Skip, handled separately
                } else {
                    data.education[cleanKey] = value;
                }
            } else if (currentSection === 'awards&recognition') {
                if (cleanKey === 'title') currentItem.title = value;
                else if (cleanKey === 'organization') currentItem.organization = value;
                else if (cleanKey === 'date') currentItem.date = value;
                else if (cleanKey === 'icon') currentItem.icon = value;
                else if (cleanKey === 'description') currentItem.description = value;
            } else if (currentSection === 'projects') {
                if (cleanKey === 'title') currentItem.title = value;
                else if (cleanKey === 'role') currentItem.role = value;
                else if (cleanKey === 'duration') currentItem.duration = value;
                else if (cleanKey === 'image') currentItem.image = value;
                else if (cleanKey === 'description') currentItem.description = value;
                else if (cleanKey === 'technologies') currentItem.technologies = value.split(',').map(t => t.trim());
                else if (cleanKey === 'link') currentItem.link = value;
                else if (cleanKey === 'status') currentItem.status = value;
                else if (cleanKey === 'institution') currentItem.institution = value;
                else if (cleanKey === 'subtitle') currentItem.subtitle = value;
            } else if (currentSection === 'skills') {
                if (currentSkillCategory && value) {
                    const level = isNaN(value) ? value : parseInt(value);
                    data.skills[currentSkillCategory].push({
                        name: key,
                        level: level
                    });
                }
            }
        } else if (line.startsWith('- ')) {
            // Handle achievements list
            if (currentSection === 'education') {
                if (!data.education.achievements) {
                    data.education.achievements = [];
                }
                data.education.achievements.push(line.substring(2));
            } else if (inDetailedContent && currentSection === 'projects') {
                // Handle detailed content lists
                const listItem = line.substring(2);
                if (!detailedContent.listItems) {
                    detailedContent.listItems = [];
                }
                detailedContent.listItems.push(listItem);
            }
        }
    }
    
    // Add the last item if it exists
    if (Object.keys(currentItem).length > 0) {
        if (currentSection === 'awards&recognition') {
            data.awards.push(currentItem);
        } else if (currentSection === 'projects') {
            data.projects.push(currentItem);
        }
    }
    
    return data;
}

// Convert and save
try {
    const data = parseContentFile('content.txt');
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    console.log('Successfully converted content.txt to data.json');
} catch (error) {
    console.error('Error converting file:', error.message);
}
