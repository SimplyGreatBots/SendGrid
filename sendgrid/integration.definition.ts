import { IntegrationDefinition, z } from '@botpress/sdk'
import { integrationName } from './package.json'

export default new IntegrationDefinition({
  name: integrationName,
  title: 'SendGrid',
  description: 'This integration allows you to send emails with SendGrid.',
  version: '0.0.2',
  readme: 'hub.md',
  icon: 'icon.svg',
  configuration: {
    schema: z.object({
      apiKey: z.string()
    }),
  },
  channels: {},
  actions: {
    sendEmail: {
      title: 'Send Email',
      description: 'Send an email with SendGrid',
      input: { 
        schema: z.object({
          from: z.string().email(),
          to: z.string(),
          subject: z.string(),
          content: z.string(),
        }),
      },
      output: {
        schema: z.object({}),
      },
    }
  },
})
