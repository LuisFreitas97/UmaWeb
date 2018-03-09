var cadeiraEscolhida=0;

$(document).ready(function(){
	$("#projetoMiti"). click(function(){

	//Para mostrar conteúdo de outra pág 
	//$("#conteudoOutraPag").load("https://github.com/LuisFreitas97/SmartCharging");

	//Para mudar mesmo para outro url
	window.open("https://github.com/LuisFreitas97/SmartCharging","_blank")
	});
	});

$(document).ready(function(){
	$("#IHC"). click(function(){
	$("#infoRapidas").hide();
	$("#infoAluno").hide();
	$("#background").show();
	$("#bInfoRapidas").show();
	$("#bInfoTotal").show();
	cadeiraEscolhida=1;
	});
	});

$(document).ready(function(){
	$("#ER"). click(function(){
	$("#infoRapidas").hide();
	$("#infoAluno").hide();
	$("#background").show();
	$("#bInfoRapidas").show();
	$("#bInfoTotal").show();
	cadeiraEscolhida=2;
	});
	});

$(document).ready(function(){
	$("#REDES"). click(function(){
	$("#infoRapidas").hide();
	$("#infoAluno").hide();
	$("#background").show();
	$("#bInfoRapidas").show();
	$("#bInfoTotal").show();
	cadeiraEscolhida=3;
	});
	});

$(document).ready(function(){
	$("#navbarInfoAluno"). click(function(){
	$("#bInfoRapidas").hide();
	$("#bInfoTotal").hide();
	$("#infoRapidas").hide();
	$("#background").hide();
	$("#infoAluno").show();
	});
	});

//Funcção para mudar para os diversos sites das cadeiras
$(document).ready(function(){
	$("#bInfoTotal"). click(function(){
	if(cadeiraEscolhida==1)
	{
		//window.location.href= "https://sites.google.com/site/hciatuma2018/home";
		window.open("https://sites.google.com/site/hciatuma2018/home","_blank");
	}
	else if(cadeiraEscolhida==2)
	{	
		//window.location.href= "http://moodle.cee.uma.pt/course/view.php?id=59";
		window.open("http://moodle.cee.uma.pt/course/view.php?id=59","_blank");
	}
	else if(cadeiraEscolhida==3)
	{
		//window.location.href= "http://moodle.cee.uma.pt/course/view.php?id=118";
		window.open("http://moodle.cee.uma.pt/course/view.php?id=118","_blank");
	}
	});
	});

//Função para mostrar as informações rápidas de cada cadeira
$(document).ready(function(){
	$("#bInfoRapidas"). click(function(){
	if(cadeiraEscolhida==1)
	{
		$("#background").hide();
		$("#infoRapidas").show();
		$("#infoRapidas").empty();
		$("#infoRapidas").append("<img id='theImg' src='IHC.png'/>");
	}
	else if(cadeiraEscolhida==2)
	{	
		$("#background").hide();
		$("#infoRapidas").show();
		$("#infoRapidas").empty();
		$("#infoRapidas").append("<img id='theImg' src='ER1.png'/>");
		$("#infoRapidas").append("<img id='theImg' src='ER2.png'/>");
	}
	else if(cadeiraEscolhida==3)
	{
		$("#background").hide();
		$("#infoRapidas").show();
		$("#infoRapidas").empty();
		$("#infoRapidas").append("<img id='theImg' src='REDES1.png'/>");
		$("#infoRapidas").append("<img id='theImg' src='REDES2.png'/>");
	}
	});
	});
	

















