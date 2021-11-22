const container = document.querySelector('#container')

// intro 버튼 동작
const intro = document.querySelector('#intro')
const intro_submenu = document.querySelector('#intro_submenu');
console.log(intro);

intro.addEventListener('mouseover',() => {
    container.classList.add('show')
    intro_submenu.classList.remove('submenu_list')
    intro_submenu.classList.add('show')
})
intro.addEventListener('mouseout',() => {
    container.classList.remove('show')
    intro_submenu.classList.remove('show')
    intro_submenu.classList.add('submenu_list')
    console.log(intro_submenu);
})
intro_submenu.addEventListener('mouseup',() => {
    intro_submenu.classList.remove('submenu_list')
    intro_submenu.classList.add('show')
})
intro_submenu.addEventListener('mouseout',() => {
    intro_submenu.classList.remove('show')
    intro_submenu.classList.add('submenu_list')
})


//주요업무 버튼 동작
const tasking = document.querySelector('#tasking')
const tasking_submenu = document.querySelector('#tasking_submenu');

tasking.addEventListener('mouseover',() => {
    container.classList.add('show')
    tasking_submenu.classList.remove('submenu_list')
    tasking_submenu.classList.add('show')
})
tasking.addEventListener('mouseout',() => {
    container.classList.remove('show')
    tasking_submenu.classList.remove('show')
    tasking_submenu.classList.add('submenu_list')
})
tasking_submenu.addEventListener('mouseover',() => {
    tasking_submenu.classList.remove('submenu_list')
    tasking_submenu.classList.add('show')
})
tasking_submenu.addEventListener('mouseout',() => {
    tasking_submenu.classList.remove('show')
    tasking_submenu.classList.add('submenu_list')
})



//운송의뢰 동작
const quest = document.querySelector('#quest')
const quest_submenu = document.querySelector('#quest_submenu');

quest.addEventListener('mouseover',() => {
    container.classList.add('show')
    quest_submenu.classList.remove('submenu_list')
    quest_submenu.classList.add('show')
})
quest.addEventListener('mouseout',() => {
    container.classList.remove('show')
    quest_submenu.classList.remove('show')
    quest_submenu.classList.add('submenu_list')
})
quest_submenu.addEventListener('mouseover',() => {
    quest_submenu.classList.remove('submenu_list')
    quest_submenu.classList.add('show')
})
quest_submenu.addEventListener('mouseout',() => {
    quest_submenu.classList.remove('show')
    quest_submenu.classList.add('submenu_list')
})


//커뮤니티 동작

const commu = document.querySelector('#commu')
const commu_submenu = document.querySelector('#commu_submenu');

commu.addEventListener('mouseover',() => {
    container.classList.add('show')
    commu_submenu.classList.remove('submenu_list')
    commu_submenu.classList.add('show')
})
commu.addEventListener('mouseout',() => {
    container.classList.remove('show')
    commu_submenu.classList.remove('show')
    commu_submenu.classList.add('submenu_list')
})
commu_submenu.addEventListener('mouseover',() => {
    commu_submenu.classList.remove('submenu_list')
    commu_submenu.classList.add('show')
})
commu_submenu.addEventListener('mouseout',() => {
    commu_submenu.classList.remove('show')
    commu_submenu.classList.add('submenu_list')
})