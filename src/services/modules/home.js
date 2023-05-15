import httpRequest from '..'

export function getHomeGoodPrice() {
  return httpRequest.get({
    url: '/home/goodprice',
  })
}
