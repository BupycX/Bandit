function richag()
{
var random_a = document.getElementById('random_a');
var random_b = document.getElementById('random_b');
var random_c = document.getElementById('random_c');
var money = document.getElementById('money');

	if (money.value <=0)
	{
	alert ("У вас недостаточно денег");
	return;
	}
	money.value = money.value-10
	for (var i = 0; i<=100000; i++)
	{
	random_a.value = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
	random_b.value = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
	random_c.value = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
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
