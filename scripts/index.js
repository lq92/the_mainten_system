function show(obj){
	obj.style.display = 'flex'
}
function hide(obj){
	obj.style.display = 'none'
}
function random(min, max){
	return Math.floor((max - min + 1) * Math.random()) + min;
}
function createElement(ele, cssObj){
	ele = document.createElement(ele);
	ele.style.cssText = cssObj;
	return ele;
}
function Area(position, name = '1号小区' , statusColor = 'rgb(71, 209, 71)'){
	this.position = position || { x: random(0, 1000), y: random(0, 450), width: 24, height: 24};
	this.name = name;
	this.statusColor = statusColor;
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
			threedBoxHook = document.querySelector('.threed_box_hook')
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
	// 1700 906
	// fault: rgb(245, 64, 64), normal: rgb(71, 209, 71), mainten: rgb(255, 241, 84)
	let onePostion = { x: '16%', y: '36%', width: 24, height: 24},
			oneName = '3号小区',
			oneStatusColor = 'rgb(245, 64, 64)',
			one = new Area(onePostion, oneName, oneStatusColor);
	let twoPosition = { x: '4%', y: '73%', width: 24, height: 24},
			twoName = '2号小区',
			twoStatusColor = 'rgb(255, 241, 84)',
			two = new Area(twoPosition, twoName, twoStatusColor);
	let threePosition = { x: '39%', y: '19%', width: 24, height: 24},
			threeName = '3号小区',
			threeStatusColor = 'rgb(245, 64, 64)',
			three = new Area(threePosition, threeName, threeStatusColor);
	let fourPosition = { x: '37%', y: '86%', width: 24, height: 24},
			fourName = '2号小区',
			fourStatusColor = 'rgb(255, 241, 84)',
			four = new Area(fourPosition, fourName, fourStatusColor);
	let fivePosition = { x: '49%', y: '50%', width: 24, height: 24},
			fiveName = '3号小区',
			fiveStatusColor = 'rgb(245, 64, 64)',
			five = new Area(fivePosition, fiveName, fiveStatusColor);
	let sixPosition = { x: '63%', y: '58%', width: 24, height: 24},
			sixName = '4号小区',
			sixStatusColor = 'rgb(71, 209, 71)',
			six = new Area(sixPosition, sixName, sixStatusColor);
	let sevenPosition = { x: '76%', y: '34%', width: 24, height: 24},
			sevenName = '4号小区',
			sevenStatusColor = 'rgb(71, 209, 71)',
			seven = new Area(sevenPosition, sevenName, sevenStatusColor);
	let eightPosition = { x: '86%', y: '75%', width: 24, height: 24},
			eightName = '4号小区',
			eightStatusColor = 'rgb(71, 209, 71)',
			eight = new Area(eightPosition, eightName, eightStatusColor);
	mapBoxHook.appendChild(one.init())
	mapBoxHook.appendChild(two.init())
	mapBoxHook.appendChild(three.init())
	mapBoxHook.appendChild(four.init())
	mapBoxHook.appendChild(five.init())
	mapBoxHook.appendChild(six.init())
	mapBoxHook.appendChild(seven.init())
	mapBoxHook.appendChild(eight.init())
}, false)