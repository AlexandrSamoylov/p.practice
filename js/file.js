function show(state)
	{
	document.getElementById('window1').style.display = state;	
	document.getElementById('gray1').style.display = state; 		
	}	
function showw(state)
	{
	document.getElementById('window2').style.display = state;	
	document.getElementById('gray2').style.display = state; 		
	}	
document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form');
	form.addEventListener('submit', formsend);

	async function formsend(e){
		e.preventDefault();
		let error = formValidate(form);
	}
	function formValidation(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
				
			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}else {
				if (input.value === ''){
					formAddError(input);
					error++;
				}
			}

		}
	}
});