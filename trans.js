
document.querySelectorAll('.link').forEach(item => {

	item.addEventListener('click',event =>{

		event.preventDefault();
		const link= item.getAttribute('href');

		document.body.style.opacity = 0;
		setTimeout(()=>{
			window.location.href = link;
		}, 500);
	});
});