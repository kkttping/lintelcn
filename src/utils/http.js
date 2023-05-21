
import { Directus } from '@directus/sdk';


/**
 * @class Http
 */
class Http {

  /**
   * @memberof Http
   * @type {Directus} #service
   */
  static #service;

  /**
   * @static 获取实例
   * @return {Directus} 
   * @memberof Http
   */
  static get to() {
    if (this.#service) return this.#service;
    return new Directus("");
  }
}

export default Http;