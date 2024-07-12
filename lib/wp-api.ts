import WpApiClient, { WPCategory, WPPage, WPPost } from 'wordpress-api-client'

export const apiClient = new WpApiClient(process.env.WORDPRESS_URL!)

