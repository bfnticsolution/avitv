function initializeSchedule() {
    // Sample program data - in a real app this would come from an API
    const programData = {
        "today": [
            {
                "time": "06:00 - 07:00",
                "title": "Journal Matinal",
                "category": "Information",
                "description": "Les nouvelles du matin avec notre équipe de journalistes"
            },
            {
                "time": "07:00 - 08:00",
                "title": "Débat Économique",
                "category": "Information",
                "description": "Analyse des enjeux économiques du pays"
            },
            // More programs...
        ],
        "week": [
            // Weekly program data
        ]
    };
    
    // Render today's schedule
    if (document.getElementById('today-schedule')) {
        const scheduleContainer = document.getElementById('today-schedule');
        scheduleContainer.innerHTML = '';
        
        programData.today.forEach(program => {
            const programElement = document.createElement('div');
            programElement.className = 'schedule-item';
            programElement.innerHTML = `
                <div class="schedule-time">${program.time}</div>
                <div class="schedule-details">
                    <h4 class="schedule-title">${program.title}</h4>
                    <p class="schedule-desc">${program.description}</p>
                    <span class="schedule-category ${program.category.toLowerCase()}">${program.category}</span>
                </div>
            `;
            scheduleContainer.appendChild(programElement);
        });
    }
    
    // Render weekly schedule if on schedule page
    if (document.getElementById('weekly-schedule')) {
        // Similar implementation for weekly schedule
    }
    
    // Current program highlight
    if (document.querySelector('.current-program')) {
        // You would typically get this data from your API
        const currentProgram = {
            time: "20:00 - 21:00",
            title: "Journal Télévisé",
            description: "Les dernières actualités nationales et internationales"
        };
        
        document.querySelector('.current-program .program-time').textContent = currentProgram.time;
        document.querySelector('.current-program .program-title').textContent = currentProgram.title;
        document.querySelector('.current-program .program-desc').textContent = currentProgram.description;
    }
}