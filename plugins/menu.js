exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'أوامر متقدمة ',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'أوامر خاصة بالمجموعة',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'أموامر الادمين',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }]
      await client.sendList(m.chat, '', `HELLO ! had lbot qayda tatwir ☺️ | @wox_bella | by neo-xr ♥️`, '', 'clicker hna 👆!', [{
         rows
      }], m)
   },
   error: false
} 
