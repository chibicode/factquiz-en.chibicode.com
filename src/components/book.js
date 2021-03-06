/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import AmazonLink from './amazon-link'

const Book = () => (
  <AmazonLink
    css={css`
      font-size: 0;
    `}
  >
    <img
      src="/static/images/cover-en.jpg"
      alt="Factfulness"
      css={css`
        display: inline-block;
        max-width: 180px;
        border: 1px solid #a6b3d2;
      `}
    />
  </AmazonLink>
)

export default Book
