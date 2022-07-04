exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'ADVANCE',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'OWNER',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }]
      await client.sendList(m.chat, '', `HELLO ! had lbot qayda tatwir ☺️ | @wox_bella | by neo-xr ♥️`, '', 'clicker hna 👆!', [{
         rows
      }], m)
   },
   error: false
} 
