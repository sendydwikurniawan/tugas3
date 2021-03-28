document.getElementById("nama").innerHTML = prompt("Masukkan nama: ");
var waktu = new Date();
if(waktu.getHours() >= 0 && waktu.getHours() <= 9) {
	document.getElementById("waktu").innerHTML = "Pagi";
}else if(waktu.getHours() > 9 && waktu.getHours() <= 15) {
	document.getElementById("waktu").innerHTML = "Siang";
}else if(waktu.getHours() > 15 && waktu.getHours() <= 18) {
	document.getElementById("waktu").innerHTML = "Sore";
}else {
	document.getElementById("waktu").innerHTML = "Malam";
}

function hasilSilinder() {
	var tinggi_silinder = (document.getElementById("thisTslider").value);
	var jari2_silinder = (document.getElementById("thisJ").value);
	tinggi_silinder = tinggi_silinder.replace(",", ".");
	var tinggi_silinder1 = tinggi_silinder.replace(".", "");
	console.log(tinggi_silinder);
	jari2_silinder = jari2_silinder.replace(",", ".");
	var jari2_silinder1 = jari2_silinder.replace(".", "");
	console.log(jari2_silinder);
	var reg = new RegExp('^\\d+$');
	if(tinggi_silinder == "" || jari2_silinder == "") {
		alert("Mohon masukkan input silinder terlebih dahulu");
		return;
	}
	if(!reg.test(tinggi_silinder1) || !reg.test(jari2_silinder1)) {
		alert("Masukkan input Silider hanya boleh berupa angka");
		document.getElementById("thisTslider").value = "";
		document.getElementById("thisJ").value = "";
		document.getElementById("lp-silinder").innerHTML = "";
		document.getElementById("vm-silinder").innerHTML = "";
		return;
	}
	tinggi_silinder = parseFloat(tinggi_silinder);
	jari2_silinder = parseFloat(jari2_silinder);
	console.log(tinggi_silinder);
	console.log(jari2_silinder);
	document.getElementById("lp-silinder").innerHTML = 2 * 3.14 * jari2_silinder * (jari2_silinder + tinggi_silinder);
	document.getElementById("vm-silinder").innerHTML = 3.14 * jari2_silinder * jari2_silinder * tinggi_silinder;
}

function hasilKerucut() {
	var tinggi_kerucut = (document.getElementById("thisTkerucut").value);
	var jari2_kerucut = (document.getElementById("thisJkerucut").value);
	var garis_pelukis = (document.getElementById("thisJgp").value);
	var tinggi_kerucut1 = tinggi_kerucut.replace(",",".");
	tinggi_kerucut1 = tinggi_kerucut1.replace(".", "");
	var jari2_kerucut1 = jari2_kerucut.replace(",",".");
	jari2_kerucut1 = jari2_kerucut1.replace(".","");
	var garis_pelukis1 = garis_pelukis.replace(",",".");
	garis_pelukis1 = garis_pelukis1.replace(".","");
	var reg = new RegExp('^\\d+$');

	if(tinggi_kerucut == "" || jari2_kerucut == "" || garis_pelukis == "") {
		alert("Mohon masukkan input kerucut terlebih dahulu");
		return;
	}

	if(!reg.test(tinggi_kerucut1) || !reg.test(jari2_kerucut1) || !reg.test(garis_pelukis1)) {
		alert("Masukkan input Kerucut hanya boleh berupa angka");
		document.getElementById("thisTkerucut").value = "";
		document.getElementById("thisJgp").value = "";
		document.getElementById("thisJkerucut").value = "";
		document.getElementById("lp-kerucut").innerHTML = "";
		document.getElementById("vm-kerucut").innerHTML = "";
		return;
	}
	tinggi_kerucut = parseFloat(tinggi_kerucut);
	jari2_kerucut = parseFloat(jari2_kerucut);
	garis_pelukis = parseFloat(garis_pelukis);
	document.getElementById("lp-kerucut").innerHTML = (jari2_kerucut + garis_pelukis) * (3.14 * jari2_kerucut);
	document.getElementById("vm-kerucut").innerHTML = (3.14 * jari2_kerucut * jari2_kerucut * tinggi_kerucut)/3;
}

function hasilBola() {
	var jari2_bola = (document.getElementById("thisJbola").value);
	jari2_bola = jari2_bola.replace(",",".");
	var jari2_bola1 = jari2_bola.replace(".","");
	if(jari2_bola == "") {
		alert("Masukkan input jari-jari bola terlebih dahulu");
		return;
	}
	var reg = new RegExp('^\\d+$');
	if(!reg.test(jari2_bola1)) {
		alert("Masukkan input Bola hanya boleh berupa angka");
		document.getElementById("thisJbola").value = "";
		document.getElementById("lp-bola").innerHTML = "";
		document.getElementById("vm-bola").innerHTML = "";
		return;
	}
	jari2_bola = parseFloat(jari2_bola);
	document.getElementById("lp-bola").innerHTML = 4 * 3.14 * jari2_bola * jari2_bola;
	document.getElementById("vm-bola").innerHTML = (4*3.14 * jari2_bola * jari2_bola * jari2_bola)/3;
}
