const btnBranding = document.querySelector('.btn--primary');
const btnWebsites = document.querySelector('.btn--secondary');
const btnEvents = document.querySelector('.btn--accent');
const projectsContainer = document.getElementById('projects');
let isProjectsVisible = false;
let currentCategory = null;

const portfolioItems = [
    { 
        title: 'Брендбук Кофейни', 
        image: 'images/project1.jpg',
        description: 'Разработка фирменного стиля', 
        category: 'branding'
    },
    { 
        title: 'Логотип для IT компании', 
        image: 'images/project2.jpg', 
        description: 'Создание современного образа', 
        category: 'branding'
    },
    {
        title: 'Ребрендинг отеля', 
        image: 'images/project3.jpg', 
        description: 'Обновление визуального стиля', 
        category: 'branding'
    },
    { 
        title: 'Интернет-магазин', 
        image: 'images/project4.jpg',
        description: 'E-commerce решение под ключ', 
        category: 'websites'
    },
    { 
        title: 'Корпоративный портал', 
        image: 'images/project5.jpg', 
        description: 'Внутренний сайт для компании', 
        category: 'websites'
    },
    {
        title: 'Landing Page', 
        image: 'images/project6.jpg', 
        description: 'Одностраничный сайт для продукта', 
        category: 'websites'
    },
    { 
        title: 'Выставка БРИКС', 
        image: 'images/project7.jpg',
        description: 'Организация пространства и айдентики', 
        category: 'events'
    },
    { 
        title: 'Конференция TechTalk', 
        image: 'images/project8.jpg', 
        description: 'Техническое оснащение и брендинг', 
        category: 'events'
    },
    {
        title: 'Фестиваль музыки', 
        image: 'images/project9.jpg', 
        description: 'Разработка концепции и дизайна', 
        category: 'events'
    }
];

async function toggleProjects(category, button) {
    if (isProjectsVisible && currentCategory === category) {
        await hideProjects();
        resetButtons();
    } else {
        if (isProjectsVisible) {
            await hideProjects();
        }
        
        showProjects(category, button);
    }
}

function hideProjects() {
    return new Promise(resolve => {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
        
        setTimeout(() => {
            projectsContainer.classList.remove('visible');
            projectsContainer.classList.add('hidden');
            
            setTimeout(() => {
                projectsContainer.innerHTML = '';
                isProjectsVisible = false;
                currentCategory = null;
                resolve();
            }, 300);
        }, 200);
    });
}

function showProjects(category, button) {
    renderProjects(category);
    
    resetButtons();
    
    button.style.backgroundColor = '#000000';
    
    setTimeout(() => {
        projectsContainer.classList.remove('hidden');
        projectsContainer.classList.add('visible');
        
        isProjectsVisible = true;
        currentCategory = category;
    }, 30);
}

function resetButtons() {
    btnBranding.textContent = 'Брендинг';
    btnBranding.style.backgroundColor = '#878787';
    
    btnWebsites.textContent = 'Сайты';
    btnWebsites.style.backgroundColor = '#878787';
    
    btnEvents.textContent = 'Мероприятия';
    btnEvents.style.backgroundColor = '#878787';
}

function renderProjects(category) {
    if (!projectsContainer.innerHTML) {
        const filteredProjects = portfolioItems.filter(item => item.category === category);
        
        projectsContainer.innerHTML = filteredProjects.map(item => `
            <div class="project-card">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }
}

btnBranding.addEventListener('click', () => toggleProjects('branding', btnBranding));
btnWebsites.addEventListener('click', () => toggleProjects('websites', btnWebsites));
btnEvents.addEventListener('click', () => toggleProjects('events', btnEvents));

// Получаем элементы
const learnMoreBtn = document.getElementById('learnMoreBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Открываем поп-ап при нажатии на кнопку
learnMoreBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Показываем поп-ап
});

// Закрываем поп-ап при нажатии на кнопку закрытия
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Скрываем поп-ап
});

// Закрываем поп-ап при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Скрываем поп-ап
    }
});

// Получаем все элементы аккордеона
const accordionItems = document.querySelectorAll('.accordion-item');

// Добавляем обработчик событий для каждого элемента аккордеона
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    
    title.addEventListener('click', () => {
        // Закрываем все открытые аккордеоны
        accordionItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.display = 'none'; // Скрываем содержимое
            }
        });
        
        // Переключаем активный класс для текущего элемента
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('active')) {
            content.style.display = 'block'; // Показываем содержимое
        } else {
            content.style.display = 'none'; // Скрываем содержимое
        }
    });
});

function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл к секции "О нас"
}