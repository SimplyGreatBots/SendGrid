import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'
import axios from 'axios'
import { SendGridEmail } from './types'

export default new bp.Integration({
  register: async (args) => {
    args.logger.forBot().info('Need to add test for valid API key')
  },
  unregister: async () => {
  },
  actions: {
    sendEmail: async (args): Promise<{}> => {
      args.logger.forBot().info('Test: Sending Email')
      const apiKey = args.ctx.configuration.apiKey
      const email: SendGridEmail = {
        personalizations: [
          {
            to: [
              { email: args.input.to }
            ],
          }
        ],
        from: { email: args.input.from },
        subject: args.input.subject,
        content: [
          {
            type: 'text/html',
            value: args.input.content
          }
        ]
      }
      const url = 'https://api.sendgrid.com/v3/mail/send';
  
      try {
        const response = await axios.post(url, email, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        })
        args.logger.forBot().info('Email sent successfully')
        return {}
      } catch (error) {
        args.logger.forBot().error('Error sending email', error)
        return {}
      }
    }
  },
  channels: {},
  handler: async () => {},
})
