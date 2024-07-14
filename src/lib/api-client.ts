import WpApiClient from 'wordpress-api-client'

export const apiClient = new WpApiClient(process.env.NEXT_PUBLIC_WORDPRESS_URL!)

