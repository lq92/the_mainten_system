function show(obj){
	obj.style.display = 'flex'
}
function hide(obj){
	obj.style.display = 'none'
}
function random(min, max){
	return Math.floor((max - min + 1) * Math.random()) + min;
}
function Area(position, name = '1号小区' , status = 'normal'){
	this.position = position || { x: random(0, 1000), y: random(0, 450), width: 20, height: 20};
	this.name = name;
	this.status = status;
}
Area.prototype.init = function(){
	let div = document.createElement('div');
	div.style.cssText = `
		position: absolute;
		left: ${this.position.x}px;
		top: ${this.position.y}px;
		width: ${this.position.width}px;
		height: ${this.position.height}px;
		border-radius: 50%;
		background: #f00;
		box-shadow: 0 0 6px 6px #f00
	`;
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
	let first = new Area();
	mapBoxHook.appendChild(first.init())
}, false)