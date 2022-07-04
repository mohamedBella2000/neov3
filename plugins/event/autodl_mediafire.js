const { decode } = require('html-entities')
exports.run = {
   regex: /^(?:https?:\/\/)?(?:www\.)?(?:mediafire\.com\/)(?:\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting
   }) => {
      try {
         const regex = /^(?:https?:\/\/)?(?:www\.)?(?:mediafire\.com\/)(?:\S+)?$/;
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => v.match(regex))
            if (links.length != 0) {
               if (users.limit > 0) {
                  let limit = 1
                  if (users.limit >= limit) {
                     users.limit -= limit
                  } else return client.reply(m.chat, Func.texted('bold', `🚩 Your limit is not enough to use this feature.`), m)
               }
               client.sendReact(m.chat, '🔥', m.key)
               let old = new Date()
               Func.hitstat('mediafire', m.sender)
               links.map(async link => {
                  let json = await Api.mediafire(link)
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  let text = '◦  *الاسم : * : ' + unescape(decode(json.data.filename)) + '\n'
                  text += '◦  *الحجم : * : ' + json.data.size + '\n'
                  text += '◦  *نوع ملف : * : ' + json.data.extension + '\n'
                  text += '◦  *ماين* : ' + json.data.mime + '\n'
                  text += '◦  *تاريخ الرفع : * : ' + json.data.uploaded
                  let chSize = Func.sizeLimit(json.data.size, global.max_upload)
                  if (chSize.oversize) return client.reply(m.chat, `💀 حجم هذا الملف هو :  (${json.data.size}) بزاااف , نزلو راسك من هاذ ليان هههه  : ${await (await scrap.shorten(json.data.link)).data.url}`, m)
                  client.reply(m.chat, text, m).then(async () => {
                     client.sendFile(m.chat, json.data.link, unescape(decode(json.data.filename)), '', m)
                  })
               })
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   limit: true,
   download: true
}
