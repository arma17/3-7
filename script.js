const button = document.querySelector('button');
const projectsContainer = document.getElementById('projects');
let isProjectsVisible = false; // Флаг состояния

const portfolioItems = [
    { 
        title: 'Проект 1', 
        image: 'images/project1.jpg', // Путь к изображению!
        description: 'Лендинг для кофейни' 
    },
    { 
        title: 'Проект 2', 
        image: 'images/project2.jpg', 
        description: 'Мобильное приложение' 
    },
    {
        title: 'Проект 3', 
        image: 'images/project3.jpg', 
        description: 'Выставка БРИКС' 
    }
];

// Функция для переключения видимости проектов
function toggleProjects() {
    isProjectsVisible = !isProjectsVisible;
    
    if (isProjectsVisible) {
        // Всегда рендерим проекты при открытии
        projectsContainer.innerHTML = portfolioItems.map(item => `
            <div class="project-card">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
        
        projectsContainer.classList.remove('hidden');
        button.textContent = 'Скрыть работы';
        button.style.backgroundColor = '#dc3545';
    } else {
        projectsContainer.classList.add('hidden');
        button.textContent = 'Посмотреть работы';
        button.style.backgroundColor = '#007bff';
    }

    console.log('Состояние:', isProjectsVisible);
    console.log('Содержимое контейнера:', projectsContainer.innerHTML);
}

button.addEventListener('click', toggleProjects);