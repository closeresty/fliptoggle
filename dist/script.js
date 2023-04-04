let select = s => document.querySelector(s);
let dot = select('.dot');
let on = select('.on');
let off = select('.off');
let duration = 0.18;
gsap.set('svg', {
	visibility: 'visible'
})

let tl = gsap.timeline({
	paused: true,
	defaults: {
		duration: duration,
		ease: 'sine.inOut'
	}
});
tl.to('.buttonFlood', {
		floodOpacity: 0.24
}, 0)
.to('.buttonFlood_a', {
		floodOpacity: 0
}, 0)
.to('#lightGlow feFlood', {
	floodOpacity: 0	
}, 0)
.to('#darkGlow feFlood', {
	floodOpacity: 0.2	
}, 0)
.to('#lightGlow_a feFlood', {
		floodOpacity: 0.41	
}, 0)
.to('#darkGlow_a feFlood', {
		floodOpacity: 0.41	
}, 0)

select('.bg').onclick = e => {
	const state = Flip.getState(dot);
	(dot.parentNode == on ? off : on).appendChild(dot);
	Flip.from(state, {
		duration: duration*2,
		ease: 'elastic(0.7, 0.8)'
	})
	if(tl.time() > 0) {
		tl.reverse()
	} else {
		tl.play(0)
	}
}