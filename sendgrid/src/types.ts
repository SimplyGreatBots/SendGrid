interface EmailContent {
    type: string
    value: string
  }
  
  interface EmailAddress {
    email: string
    name?: string
  }
  
  interface Personalization {
    to: EmailAddress[]
    cc?: EmailAddress[]
  }
  
  export interface SendGridEmail {
    personalizations: Personalization[]
    from: EmailAddress
    subject: string
    content: EmailContent[]
  }

  export interface SendGridError {
    errors: Array<{
      field: string;
      message: string;
    }>;
  }