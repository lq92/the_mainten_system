function show(obj){
	obj.style.display = 'flex'
}
function hide(obj){
	obj.style.display = 'none'
}
function random(min, max){
	return Math.floor((max - min + 1) * Math.random()) + min;  // 返回一个随机整数
}
function createElement(ele, cssObj){
	ele = document.createElement(ele);
	ele.style.cssText = cssObj;
	return ele;
}
function Area(info){
	this.position = info.position || { x: random(0, 1000), y: random(0, 450), width: 24, height: 24};
	this.name = info.name || '1号小区';
	this.statusColor = info.statusColor || 'rgb(71, 209, 71)';
}
Area.prototype.init = function(){
	let divObj = `
		position: absolute;
		left: ${this.position.x};
		top: ${this.position.y};
		width: ${this.position.width}px;
		height: ${this.position.height}px;
		border-radius: 50%;
		background: ${this.statusColor};
		box-shadow: 0 0 6px 0 ${this.statusColor};
	`,
		spanObj = `
		position: absolute;
		z-index: 10;
		top: -88px;
		left: 50%;
		transform: translateX(-50%);
		width: 132px;
		height: 74px;
		background: rgb(255, 255, 255);
		color: rgb(51, 51, 51);
		font-size: 18px;
		line-height: 74px;
		text-align: center;
		border-radius: 8px;
	`,
		strongObj = `
		position: absolute;
		z-index: 8;
		left: 56px;
		top: 74px;
		width: 0;
		height: 0;
		border: 10px solid transparent;
		border-top-color: rgb(255, 255, 255);
	`;
	let div = createElement('div', divObj),
			span = createElement('span', spanObj),
			strong = createElement('strong', strongObj);
	span.textContent = this.name;
	span.appendChild(strong);
	div.appendChild(span);
	return div;
}
window.addEventListener('load', () => {
	let map = document.querySelector('#map'),
			threeD = document.querySelector('#three_d'),
			mapInfoHook = document.querySelector('.map_info_hook'),
			threedInfoHook = document.querySelector('.threed_info_hook'),
			mapBoxHook = document.querySelector('.map_box_hook'),
			threedBoxHook = document.querySelector('.threed_box_hook');
	map.addEventListener('click', () => {
		show(mapInfoHook)
		hide(threedInfoHook)
		show(mapBoxHook)
		hide(threedBoxHook)
		map.classList.toggle('active')
		threeD.classList.toggle('active')
	}, false)		
	threeD.addEventListener('click', () => {
		show(threedInfoHook)
		hide(mapInfoHook)
		show(threedBoxHook)
		hide(mapBoxHook)
		map.classList.toggle('active')
		threeD.classList.toggle('active')
	}, false)	
	let positionArr = [
		{ position: { x: '16%', y: '36%', width: 24, height: 24}, name: '3号小区', statusColor: 'rgb(245, 64, 64)' },
		{ position: { x: '4%', y: '73%', width: 24, height: 24}, name: '2号小区', statusColor: 'rgb(255, 241, 84)' },
		{ position: { x: '39%', y: '19%', width: 24, height: 24}, name: '3号小区', statusColor: 'rgb(245, 64, 64)' },
		{ position: { x: '37%', y: '86%', width: 24, height: 24}, name: '2号小区', statusColor: 'rgb(245, 64, 64)' },
		{ position: { x: '49%', y: '50%', width: 24, height: 24}, name: '3号小区', statusColor: 'rgb(245, 64, 64)' },
		{ position: { x: '63%', y: '58%', width: 24, height: 24}, name: '4号小区', statusColor: 'rgb(71, 209, 71)' },
		{ position: { x: '76%', y: '34%', width: 24, height: 24}, name: '4号小区', statusColor: 'rgb(71, 209, 71)' },
		{ position: { x: '86%', y: '75%', width: 24, height: 24}, name: '4号小区', statusColor: 'rgb(71, 209, 71)' }
	];
	let documentfragment = document.createDocumentFragment();
	positionArr.forEach(item => {
		documentfragment.appendChild(new Area(item).init())
	})
	mapBoxHook.appendChild(documentfragment)
}, false)