const GetStreamRouter = require('express').Router()
const { validateGetStreamRequests } = require('../../middleware/GetStreamValidator')

GetStreamRouter.use(validateGetStreamRequests)

GetStreamRouter.post('/', (req, res) => {
  const { type, channel_type, channel_id, user, message, members, message_id, channels } = req.body

  switch (type) {
    case 'message.new':
      members.filter((member) => {
        const { online, id, unread_channels, unread_count, channel_unread_count, total_unread_count } = member.user
        const isSender = id === user.id

        if (!isSender && !online) {
          // send notificatin
        }
      })
      return null
    case 'channel.created':
      return null
    case 'member.added':
      return null
    case 'user.unread_message_reminder':
      const channelsLength = Object.keys(channels).length

      let messagesTotal = 0

      Object.values(channels).forEach((value) => {
        if (value.messages) {
          messagesTotal += value.messages.length
        }
      })

      if (messagesTotal > 0) {
        // send notification
      }
      return null
    default:
      break
  }

  res.status(200)
})

module.exports = { GetStreamRouter }
