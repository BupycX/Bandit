function richag()
{

var random_a = document.getElementById('random_a');
var random_b = document.getElementById('random_b');
var random_c = document.getElementById('random_c');
var money = document.getElementById('money');
var src = document.getElementById('src');
one = random_a
var one = "img/apple.png";
var two = "img/banana.png";
var free = "img/cherry.png";

	if (money.value <=0)
	{
	alert ("У вас недостаточно денег");
	return;
	}
	money.value = money.value - 10;
	{
	random_a.value = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	random_b.value = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	random_c.value = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	}
	if (random_a.value == random_b.value && random_b.value == random_c.value)
	{
		money.value = parseInt(money.value) + 100
	}
	if (random_a.value == random_b.value || random_b.value == random_c.value || random_a.value == random_c.value)
	{
		money.value = parseInt(money.value) + 50
	}
}

function balanse_up ()
{
var donat = document.getElementById('donat');
if (donat.value <= 0)
return;
donat.value = donat.value - 1;
money.value = parseInt(money.value) + 100;
}