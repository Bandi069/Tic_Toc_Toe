let move=1;
let play=true;

$('table tr td').click(function(){
	if($(this).text()==""&& play){
		if((move%2)==1){
			$(this).append('X');
			$(this).css('color','#61892f');
		}else{
			$(this).append('O');
			$(this).css('color','#e85a4f');
		}
		move++;
	}
});
function findWinner(){
	player1=$('table tr:nth-child(1) td:nth-child(1)');
player1=$('table tr:nth-child(1) td:nth-child(1)');
player2=$('table tr:nth-child(1) td:nth-child(2)');
player3=$('table tr:nth-child(1) td:nth-child(3)');
player4=$('table tr:nth-child(2) td:nth-child(1)');
player5=$('table tr:nth-child(2) td:nth-child(2)');
player6=$('table tr:nth-child(2) td:nth-child(3)');
player7=$('table tr:nth-child(3) td:nth-child(1)');
player8=$('table tr:nth-child(3) td:nth-child(2)');
player9=$('table tr:nth-child(3) td:nth-child(3)');
}
