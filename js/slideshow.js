let n=1;
let slideshow=setInterval(changeImg,5000);

function changeImg(){
	n++;
	if(n>3){
		n=1;
	}
	let newFile='images/'+'slide'+n+'.jpg';
	
	for(let i=1;i<=10;i++){
		setTimeout(function(){
			let alpha=(5-i)/10;
			document.getElementById('photo').style.opacity=alpha;
		},i*100);
	}
	setTimeout(function(){
		document.getElementById('photo').setAttribute('src',newFile);
	},500);

	for(let i=11;i<=20;i++){
		setTimeout(function(){
			let alpha=(i-5)/10;
			document.getElementById('photo').style.opacity=alpha;
		},i*100);
	}
}
