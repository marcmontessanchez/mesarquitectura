
// Persistencia de página al recargar
window.addEventListener('load', function () {
    const savedPage = localStorage.getItem('currentPage') || 'home';
    showPage(savedPage);
});

const portfolioData = {
    unifamiliar: {
        title: 'Vivienda Unifamiliar',
        description: 'Proyectos de viviendas unifamiliares personalizadas, desde chalets aislados hasta casas entre medianeras. Cada proyecto es diseñado según las necesidades específicas del cliente, combinando funcionalidad, estética y eficiencia energética.',
        details: [
            'Diseño integral de viviendas unifamiliares',
            'Chalets aislados con terreno amplio',
            'Casas entre medianeras',
            'Reformas de viviendas unifamiliares',
            'Proyecto y dirección de obra'
        ],
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1565183938294-07173cecf89f?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1576678927484-cc907957a753?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
        ]
    },
    reformas: {
        title: 'Reformas Integrales',
        description: 'Transformación completa de espacios existentes manteniendo la integridad estructural del edificio. Nos especializamos en modernizar viviendas antiguas combinando respeto por la estructura original con diseño contemporáneo.',
        details: [
            'Reformas de cocinas y baños',
            'Reorganización de espacios',
            'Mejora de eficiencia energética',
            'Actualización de instalaciones',
            'Acabados de calidad'
        ],
        images: [
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1565183938294-07173cecf89f?w=400&h=300&fit=crop'
        ]
    },
    plurifamiliar: {
        title: 'Edificios Plurifamiliares',
        description: 'Proyectos de edificios residenciales colectivos con múltiples unidades. Experiencia en diseño de edificios que optimizan espacios comunes y privados.',
        details: [
            'Diseño de edificios de viviendas',
            'Optimización de espacios comunes',
            'Áreas de circulación eficientes',
            'Estacionamientos y servicios',
            'Proyectos sostenibles'
        ],
        images: [
            'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1494438690385-39957f3b2900?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1493857671505-72967e0e0760?w=400&h=300&fit=crop'
        ]
    },
    supervision: {
        title: 'Supervisión Técnica',
        description: 'Dirección técnica integral de obras desde el inicio hasta la finalización. Control de calidad, cumplimiento de normativas y coordinación de todos los trabajos.',
        details: [
            'Coordinación de obra',
            'Control de calidad',
            'Supervisión de subcontratas',
            'Cumplimiento de normativas',
            'Resolución de imprevistos'
        ],
        images: [
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1565183938294-07173cecf89f?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1576678927484-cc907957a753?w=400&h=300&fit=crop'
        ]
    },
    administrativa: {
        title: 'Gestión Administrativa',
        description: 'Trámites completos ante organismos públicos y administraciones. Gestión de cédulas de habitabilidad, certificados energéticos y permisos municipales.',
        details: [
            'Cédulas de habitabilidad',
            'Certificados energéticos',
            'Permisos municipales',
            'Trámites administrativos',
            'Coordinación con administraciones'
        ],
        images: [
            'https://images.unsplash.com/photo-1566994391951-1a6a92381bb5?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1586998097191-0dbfe2ff89f0?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
        ]
    },
    asesoramiento: {
        title: 'Asesoramiento Técnico',
        description: 'Consultoría especializada en decisiones arquitectónicas y constructivas. Asesoramiento en mejoras, ampliaciones y aspectos técnicos del proyecto.',
        details: [
            'Asesoramiento en diseño',
            'Estudio de viabilidad',
            'Análisis de costos',
            'Recomendaciones técnicas',
            'Consultoría especializada'
        ],
        images: [
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1566994391951-1a6a92381bb5?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1576678927484-cc907957a753?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
        ]
    }
};

function openPortfolioDetail(category) {
    const data = portfolioData[category];
    const modalContent = document.getElementById('modalContent');

    let html = `
                <div class="modal-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                <div class="modal-body">
                    <h3>Características principales:</h3>
                    <ul>
            `;

    data.details.forEach(detail => {
        html += `<li>${detail}</li>`;
    });

    html += `</ul>
                    <h3>Galería de Proyectos:</h3>
                    <div class="modal-gallery">
            `;

    data.images.forEach(image => {
        html += `
                    <div class="gallery-item">
                        <img src="${image}" alt="Proyecto" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                `;
    });

    html += `</div></div>`;

    modalContent.innerHTML = html;
    document.getElementById('portfolioModal').classList.add('active');
}

function closePortfolioDetail(event) {
    if (event && event.target.id !== 'portfolioModal') return;
    document.getElementById('portfolioModal').classList.remove('active');
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    localStorage.setItem('currentPage', pageId);
    window.scrollTo(0, 0);
}
