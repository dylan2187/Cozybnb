import httpRequest from '..'

/**
 * @desc: 获取高性价比房源
 * @return: {*}
 */
export function getHomeGoodPriceData() {
  return httpRequest.get({
    url: '/home/goodprice',
  })
}

/**
 * @desc: 获取高评分房源
 * @return: {*}
 */
export function getHomeHighScoreData() {
  return httpRequest.get({
    url: '/home/highscore',
  })
}

/**
 * @desc: 获取折扣房源
 * @return: {*}
 */
export function getHomeDiscountData() {
  return httpRequest.get({
    url: '/home/discount',
  })
}

/**
 * @desc: 获取热门请求数据
 * @return: {*}
 */
export function getHomeHotRecommendData() {
  return httpRequest.get({
    url: '/home/hotrecommenddest',
  })
}

/**
 * @desc:获取向往城市数据
 * @return: {*}
 */
export function getHomeLongforData() {
  return httpRequest.get({
    url: '/home/longfor',
  })
}

/**
 * @desc: 获取plus房源数据
 * @return: {*}
 */
export function getHomePlusData() {
  return httpRequest.get({
    url: '/home/plus',
  })
}
