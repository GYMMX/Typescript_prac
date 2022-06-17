//타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알리는 것
// @ts-check
/**
 * initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns
 */

export function init(config) {
  return true;
}

/**
 * exits the program
 * @param {number} code
 * @returns
 */
export function exit(code) {
  return code + 1;
}
