// Crear un nuevo objeto Date, que contendra la fecha y hora actual
var fechaActual = new Date();
// Variable que contiene año actual
var anoActual = fechaActual.getFullYear();

// Obtener el mes actual( los meses comienzan desde 0, 
//por lo que se le suma 1 )
var mesActual = fechaActual.getMonth() + 1;

//Obtener el dia actual
var diaActual = fechaActual.getDate();

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');
const labelYears = document.getElementById('labelYears');
const labelMonth = document.getElementById('labelMonth');
const LabelDay = document.getElementById('LabelDay');
const btn_calculate = document.getElementById('btn_calculate');
const show_age = document.getElementById('show_age');
const show_month = document.getElementById('show_month');
const show_day = document.getElementById('show_day');
const message_day = document.getElementById('message_day');
const message_month = document.getElementById('message_month');
const message_year = document.getElementById('message_year');

years.addEventListener('input', validateyear => {
	if (years.value > anoActual){
		labelYears.removeAttribute('class', 'label_style');
		labelYears.setAttribute('class', 'label_state_error');
		years.removeAttribute('class', 'input_style');
		years.setAttribute('class', 'input_state_error');
		message_year.classList.remove("hidden");
	}else{
		labelYears.removeAttribute('class', 'label_state_error');
		labelYears.setAttribute('class', 'label_style');
		years.classList.remove('input_state_error');
		years.setAttribute('class', 'input_style');
		message_year.classList.add("hidden");
	}
});

months.addEventListener('input', validatemonth => {
	if (months.value > 12 || months.value < 0 ){
		labelMonth.removeAttribute('class', 'label_style');
		labelMonth.setAttribute('class', 'label_state_error');
		months.removeAttribute('class', 'input_style');
		months.setAttribute('class', 'input_state_error');
		message_month.classList.remove("hidden");
	}else {
		labelMonth.removeAttribute('class', 'label_state_error');
		labelMonth.setAttribute('class', 'label_style');
		months.classList.remove('input_state_error');
		months.setAttribute('class', 'input_style');
		message_month.classList.add("hidden");
	}
});

days.addEventListener('input', validatedays => {
	if (days.value > 31 || days.value < 0){
		LabelDay.removeAttribute('class', 'label_style');
		LabelDay.setAttribute('class', 'label_state_error');
		days.removeAttribute('class', 'input_style');
		days.setAttribute('class', 'input_state_error');
		message_day.classList.remove("hidden");
	}else {
		LabelDay.removeAttribute('class', 'label_state_error');
		LabelDay.setAttribute('class', 'label_style');
		days.classList.remove('input_state_error');
		days.setAttribute('class', 'input_style');
		message_day.classList.add("hidden");
	}
});

btn_calculate.addEventListener('click', e => {
	//primero se valida si la fecha ingresada es valida
	if (years.value === "" || years.value > anoActual) {
			alert("Su fecha es invalida");
			message_year.classList.remove("hidden");
			years.setAttribute('class', 'input_state_error');
	}
	//primero se verifica si el año ingresa es menor o igual al actual
	else if(years.value <= anoActual){
		//se verefica si el usuario cumplio años con un operador ternario
		//ademas, se verifica si el dia es mayor o igual al dia de su cumpleaños
		let NoCumplioAnos = months.value < mesActual || months.value >= mesActual && days.value < diaActual ? show_age.innerText = anoActual - years.value - 1 :  show_age.innerText = anoActual - years.value;
		if (months.value < mesActual || months.value >= mesActual && days.value < diaActual) {
			show_month.innerText = 12 - (months.value - mesActual) - 1;
			show_day.innerText = 30 - (days.value - diaActual);
		} else {
			show_month.innerText = mesActual - months.value;
			show_day.innerText = diaActual - days.value;
			//     ageInMonths = currentMonth - monthOfBirth;
//     ageInDays = currentDay - dayOfBirth;
		}
	}
});

// function calcularEdad() {
//   var yearOfBirth = parseInt(document.getElementById("yearOfBirth").value);
//   var monthOfBirth = parseInt(document.getElementById("monthOfBirth").value);
//   var dayOfBirth = parseInt(document.getElementById("dayOfBirth").value);

//   var today = new Date();
//   var currentYear = today.getFullYear();
//   var currentMonth = today.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
//   var currentDay = today.getDate();

//   var ageInYears = currentYear - yearOfBirth;
//   var ageInMonths, ageInDays;

//   if (currentMonth < monthOfBirth || (currentMonth === monthOfBirth && currentDay < dayOfBirth)) {
//     ageInYears--;
//     ageInMonths = 12 - (monthOfBirth - currentMonth) - 1;
//     ageInDays = 30 - (dayOfBirth - currentDay);
//   } else {
//     ageInMonths = currentMonth - monthOfBirth;
//     ageInDays = currentDay - dayOfBirth;
//   }

//   alert("Tu edad es: " + ageInYears + " años, " + ageInMonths + " meses y " + ageInDays + " días.");



