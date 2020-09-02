const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "v!"
var moment = require("moment");
const figlet = require('figlet');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});








//client.on('message', msg => {
  //if (msg.content === 'ت ف ك ي ك') {
    //msg.reply('احسنت');
  //}
//});








//client.on('message', msg => {
  //if (msg.content === 'ل ع ب ة') {
    //msg.reply('احسنت');
  //}
//});




//client.on('message', msg => {
  //if (msg.content === 'ك ل م ة') {
   // msg.reply('احسنت');
  //}
//});


//client.on('message', msg => {
  //if (msg.content === 'د ي س ك و ر د') {
    //msg.reply('احسنت');
  //}
//});





client.on('message', msg => {
  if (msg.content === 'v!help') {
    msg.reply('شوف الخاص :mailbox: ');
  }
});










client.on('message', msg => {
  if(msg.content.startsWith('v!suggest')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚')) return msg.reply('Ask the Owner/Founder to Create the special room for the bot log.');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
    if(msg.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚')) {
      msg.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚').send(`
      تم الاقتراح من قبل : ${msg.member}

      الاقتراح : 
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});


























client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});












client.on('message', message => {
    if (message.content.startsWith("v!bot")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};





















































    client.on('message', msg => { 
      if (msg.content.startsWith(`v!report`)) {
         let args = msg.content.split(" ").slice(1);
        if (!msg.mentions.members.first()) return msg.reply(`يجب عليك منشن شخص`)
        if (!args[1]) return msg.reply(`امممم .. اكتب تبليغك`)
        if (msg.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚')) {
          msg.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚').send(`
        تبليغ على : ${msg.mentions.members.first()}
        بلغ عليه من قبل : ${msg.member}
        في روم : ${msg.channel.name}
        السبب : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
        `)
        }
      }
      })




















client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**v!bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' الـسيرفر', `${message.guild.name}`,true)
          .addField(' الـمرسل ', `${message.author.username}!${message.author.discriminator}`,true)
          .addField(' الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});













client.on("message", message => {
  var prefix = "v!";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  ⚠  ** **');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: "Clear Command"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});



















client.on('message', message => {
  let prefix = "v!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 console.log(`Diamond team`);

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
















client.on('message', message => {
  let prefix = "v!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
      console.log(`Diamond Team`);
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  let b5bzlog = client.channels.find("name", "𝑴𝒐𝒅-𝑶𝒏𝒍𝒚");

  if(!b5bzlog) return message.reply("Ask the Owner/Founder to create the special room.");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});






client.on("message", message => {
  if (message.content === "v!avatar") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('Vampiers.')
       .setThumbnail(message.author.avatarURL)
       .addField(message.author.displayAvatarURL)
 message.channel.send(embed);
}
});







client.on('guildMemberAdd', member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  const fromNow = moment(member.user.createdTimestamp).fromNow();
  const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
  
  let embed = new Discord.RichEmbed()
     .setAuthor(`${member.user.tag}`, member.user.avatarURL)
   .setThumbnail(memberavatar)
     .setColor('GREEN')
     .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
     .setTimestamp();
   channel.send({embed:embed});
});













//const hi = [
//'فكك ما يلي : تفكيك' ,
//'فكك ما يلي : لعبة' ,
//'فكك ما يلي : كلمة' ,
//'فكك ما يلي : ديسكورد' ,
//]
//هنا حط الاكلمات فوق بس اكتب بين كل كلمه وكلمه
// ' هنا الكلمه' ,
  //client.on('message', message => {
//if (message.content.startsWith('v!فكك')) {
 //var client= new Discord.RichEmbed()
 //.setDescription(`${hi[Math.floor(Math.random() * hi.length)]}`)
  //message.channel.sendEmbed(client);
//}
//});









client.on('ready',  () => {
  console.log('تم تشغيل: Vampiers System Bot.  ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});










client.on('ready', () => {
     client.user.setActivity("v!help",{type: 'WATCHING'});

});




























    











client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "v!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}!${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});






































const fs = require('fs');
    let points = JSON.parse(fs.readFileSync('./Points.json'));
    client.on('message', message => {
        if (!points[message.author.id]) points[message.author.id] = { 
            points: 0,
          };
        const prefix = "v!" 
        if (message.content.startsWith(prefix + 'ايموجي')) { 
            if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
        
        const type = require('./Emojis/emojis.json'); 
        const item = type[Math.floor(Math.random() * type.length)]; 
        const filter = response => { 
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
       message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
                 setTimeout(function() {
    m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
                 }, 1000)
                message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                .then((collected) => {
                message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
                console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                    let won = collected.first().author;
                    points[won.id].points++;
                  })
                  .catch(collected => { 
                    message.channel.send(`:x: **لم يقم أحد بكتابة الايموجي بالوقت المناسب**`);
                    console.log(`[Game] No one answered the correct answer`);
                        })
                })
        }
});






















client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "v!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', '𝑴𝒐𝒅-𝑶𝒏𝒍𝒚');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}!${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


























client.on("message", message => {
  if (message.content === "v!help") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('Vampiers.')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`

   **✨Administrationr Commands | اوامر الاداره✨**
 v!ban    | لحظر لاعب
 v!kick   | لإخراج لاعب من السيرفر
 v!mute   |  لإسكات لاعب
 v!unmute | لإلغاء الاإسكات عن لاعب
 v!bc     | لإرسال رسالة لمستخدمي البوت
 v!clear  | لمسح اشات
 **✨Common Commands | الاوامر العامة ✨**
 v!avatar | لإظهار الصورة الخاصة بك و رابطها
 v!help   | لإظهار هذه الرسالة
 v!invite | لإضافة البوت
 v!report |للتبليغ عن اي احد يقوم بالإزعاج
 v!id     | لإظهار معلومات حسابك العامة
 v!bot    | لإظهار معلومات البوت
 v!tag    |  لكتابة الكلام بطريقة مميزة
 **✨Games Commands  | اوامر الالعاب✨**    
 v!اسالني
 v!ايموجي
 v!عقاب
 `)
 message.author.send(embed);
}  
});















client.on ("guildMemberAdd", member => {
  
  var role = member.guild.roles.find ("name", "▪ Coder");
  member.addRole (role);
});











 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 











client.on('message', message => {
  if (message.content == "v!اسالني") {
       message.react('🤔','👌')
      var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
      ];
      var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'خن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
      ];
      var x3 = Math.floor(Math.random()*x.length)
      message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
          var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
             thing: true,
             maxMatches : 1,
              time : 60000,
               maxUses: 1,
              errors : ['time']
          })
      r.catch(() => {
          return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
      })

      r.then((collected)=> {
          message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
          message.react('✅')
      })
      })
    }
});
















client.on('message', message => {
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('v!bc-users')){
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
m.send({ embed: bc })
})
}
});

























client.on('message', message => {
  var prefix = 'v!';
  
  if (message.content.startsWith(prefix + "id")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}       
});
















client.on("message",(message) => {
  
  if(message.content.startsWith("v!serveradd")){
    
      var invites = async function(){
          await client.guilds.forEach(g => {
              g.fetchInvites().then(invites => {
                  invites.forEach(invite => {
                      message.channel.send("https://Discord.gg/" + invite.code);
                  });
              });
          });
      };

      invites()
      
  };
return;
});






client.on('message', message => {
  if(message.content == 'v!servertext') {
      
  client.guilds.forEach((g)=>{
  var gname = g.name;
  
  
  message.channel.send(' ' + gname + ' ');
  
  });
  }
});










//client.on('message', message => {
 // if(message.content === 'v!invite') {
 // const embed = new Discord.RichEmbed()
 // .setTitle(':arrow_right: add FoxBot')
 // .setURL('https://discordapp.com/oauth2/authorize?client_id=447751707003453460&scope=bot&permissions=8')
 // .setColor('RANDOM')
 // message.author.send(embed);
 // }
//});















 



















client.on('message', message => {
  if(message.content === 'v!عقاب') {
    if(!message.channel.guild) return message.reply('**هاذا الامر فقط للسيرفرات**');
    var edits = ['تضرب نفسك كف' , 'لا تتحرك ابد' , 'خلاص مسامحك' , 'ارمي حالك ببير' , 'روح دق على كل بيوت العماره']
    var embed = new Discord.RichEmbed()
 .setDescription(`${edits[Math.floor(Math.random() * edits.length)]}`)
 .setThumbnail(message.author.avatarURL)
 .setFooter('Vampiers.')
 .setColor('RANDOM')
message.channel.send(embed);
}
});



client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
});








//client.on('message', message => {
  //let command = message.content.split(" ")[0];
//command = command.slice(prefix.length);

//let args = message.content.split(" ").slice(1);


//if(command == "v!draw") {
  //var Canvas = require('canvas')
//, Image = new Canvas.Image
//, canvas = new Canvas(450, 170)
//, ctx = canvas.getContext('2d');
//ctx.font = '30px Impact';
//let args = message.content.split(" ").slice(1);

//Image.src = canvas.toBuffer();

  //console.log(Image);
//ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
//ctx.fillText(args.join("  "),110, 70);


//ctx.beginPath();
//ctx.lineTo(50, 102);
//ctx.stroke();

//message.channel.sendFile(canvas.toBuffer());
//}

//});










client.login(process.env.BOT_TOKEN);
