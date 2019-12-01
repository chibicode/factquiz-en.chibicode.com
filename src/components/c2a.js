/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Emoji from './emoji'
import BookEMoji from './twemoji/1f4d9'
import GlassesEmoji from './twemoji/1f9d0'
import Book from './book'
import AmazonLink from './amazon-link'
import { submitButtonCss } from './outro'

const C2A = () => (
  <>
    <h3
      css={css`
        margin-top: -0.25rem;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        text-align: center;
      `}
    >
      <Emoji large>
        <GlassesEmoji />
      </Emoji>{' '}
      The answers are in the book!{' '}
      <Emoji large>
        <BookEMoji />
      </Emoji>
    </h3>
    <p>
      Check out the “
      <AmazonLink href="https://www.amazon.com/Factfulness-Reasons-World-Things-Better-ebook/dp/B0756J1LLV">
        Factfulness
      </AmazonLink>
      ” book to find out the correct answers!
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
  </>
)

export default C2A
