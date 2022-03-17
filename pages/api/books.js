import { createProxyMiddleware } from 'http-proxy-middleware'

const apiProxy = createProxyMiddleware({
  target: `${process.env.BOOKS_API_BASE_URL}/books`,
  changeOrigin: true,
  pathRewrite: { [`^/api/books`]: '' },
  secure: false,
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Authorization', process.env.BOOKS_API_AUTHORIZATION)
  },
})

const proxy = (req, res) => {
  return apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result
    }
    throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`)
  })
}

export default proxy

export const config = {
  api: {
    bodyParser: false,
  },
}
