const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`MeaLeaH Nitro Bot | Giriş Yapıldı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'mealeah') {
    msg.reply('https://steamcommunity.com/id/melihktr/');
  }
  if (msg.content === '31') {
    msg.reply('SJ')
  }
});



client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = "834119204688232538"){
		if(message.content.startsWith("dmr!nitro")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye >= 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin | MeaLeaH");
		}
		}
		catch(err){
			message.channel.send("Teknik bir hata oluştu! | MeaLeaH");
		}
		}
		}
 	


});

client.login('ODM0MTIwNjc4MDEzMTQxMDQy.YH8Rag.PJNzxxsi0mbV5CfSvGV9NDO9wDc');