import { categoryColors, categoryNames, elements } from './elements.js';

const container = document.getElementById('grid-container');
const modal = document.getElementById('modal');
const mContent = document.getElementById('m-content');
const closeButton = document.getElementById('close-modal');

function render() {
    elements.forEach(e => {
        const div = document.createElement('div');
        div.className = 'element';
        div.style.gridColumn = e.c;
        div.style.gridRow = e.r;
        
        const color = categoryColors[e.cat] || '#576574';
        div.style.color = color;
        div.style.borderColor = color + "40"; // add transparency
        
        div.innerHTML = `
            <span class="atomic-number">${e.n}</span>
            <span class="symbol">${e.s}</span>
            <span class="name">${e.nm}</span>
        `;
        
        div.onclick = () => showDetails(e, color);
        container.appendChild(div);
    });
}

function showDetails(e, color) {
    document.getElementById('m-sym').innerText = e.s;
    document.getElementById('m-sym').style.color = color;
    document.getElementById('m-sym').style.borderColor = color;
    
    document.getElementById('m-name').innerText = e.nm;
    document.getElementById('m-cat').innerText = categoryNames[e.cat];
    document.getElementById('m-cat').style.background = color;
    document.getElementById('m-cat').style.color = (e.cat === 'noble-gas' || e.cat === 'unknown') ? '#fff' : '#000';

    document.getElementById('m-num').innerText = e.n;
    document.getElementById('m-mass').innerText = e.m;
    document.getElementById('m-config').innerText = e.el;
    document.getElementById('m-eng').innerText = e.en;
    
    // 生成简短介绍
    const descMap = {
        "H": "宇宙中最丰富的元素。",
        "He": "惰性气体，用于气球。",
        "Li": "用于电池。",
        "C": "生命的基础。",
        "O": "呼吸必须的气体。",
        "Au": "贵金属，用于货币和首饰。",
        "U": "用于核能。",
        // ... 可以继续添加特定介绍，这里使用通用模板
    };
    document.getElementById('m-desc').innerText = descMap[e.s] || `${e.nm} (${e.en}) 是一种${categoryNames[e.cat]}。原子序数为 ${e.n}。`;

    mContent.style.borderColor = color;
    mContent.style.boxShadow = `0 0 50px ${color}30`;
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

closeButton.addEventListener('click', closeModal);

render();

