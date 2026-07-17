import { get } from '@vercel/blob'
import { createHmac, timingSafeEqual } from 'crypto'
import { NextRequest } from 'next/server'

const PRODUCTS: Record<string, string> = {
  'full-os': 'gm-ownership-report-os/v1.0/GM-Ownership-Report-OS-Full-OS-v1.0.zip',
  'playbook': 'gm-ownership-report-os/v1.0/GM-Ownership-Report-OS-PDF-Playbook-v1.0.zip',
}

function isValidToken(product: string, expires: string, token: string): boolean {
  const secret = process.env.DELIVERY_LINK_SECRET
  if (!secret || !/^\d+$/.test(expires)) return false

  const expected = createHmac('sha256', secret).update(`${product}.${expires}`).digest('hex')
  const expectedBuf = Buffer.from(expected)
  const tokenBuf = Buffer.from(token)
  if (expectedBuf.length !== tokenBuf.length) return false
  return timingSafeEqual(expectedBuf, tokenBuf)
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const product = searchParams.get('product') ?? ''
  const expires = searchParams.get('expires') ?? ''
  const token = searchParams.get('token') ?? ''

  const pathname = PRODUCTS[product]
  if (!pathname) {
    return new Response('Unknown product.', { status: 404 })
  }

  if (!isValidToken(product, expires, token)) {
    return new Response('This download link is invalid.', { status: 403 })
  }

  if (Date.now() > Number(expires)) {
    return new Response(
      'This download link has expired. Reply to your receipt or email chris@stitchhospitality.com for a new one.',
      { status: 403 }
    )
  }

  const result = await get(pathname, { access: 'private' })
  if (!result) {
    return new Response('File not found.', { status: 404 })
  }

  return new Response(result.stream, {
    headers: {
      'Content-Type': result.blob.contentType || 'application/zip',
      'Content-Disposition': result.blob.contentDisposition,
      'Cache-Control': 'private, no-store',
    },
  })
}
