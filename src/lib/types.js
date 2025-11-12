/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {'album' | 'merch'} type
 * @property {number} price
 * @property {string} image_url
 * @property {string} created_at
 */

/**
 * @typedef {Object} Tour
 * @property {string} id
 * @property {string} date
 * @property {string} city
 * @property {string} venue
 * @property {string | null} ticket_url
 * @property {string} created_at
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product
 * @property {number} quantity
 */

 export {};
