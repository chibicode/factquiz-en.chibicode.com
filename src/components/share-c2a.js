/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ExternalLink from './external-link'

const noOpLink = e => {
  e.preventDefault()
}

const Share2CA = ({ isBottom }) => (
  <>
    <h3
      css={css`
        margin-top: -0.25rem;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        text-align: center;
      `}
    >
      Please Share!
    </h3>
    <p>You can send this quiz to your friends by copying the following link.</p>
    <p
      css={css`
        text-align: center;
        color: #074da2;
        font-weight: bold;
        margin-bottom: 1.5rem;
      `}
    >
      <a href="https://factquiz-en.chibicode.com" onClick={noOpLink}>
        https://factquiz-en.chibicode.com
      </a>
    </p>
    <p>
      <span
        css={css`
          color: #777;
        `}
      >
        You can learn more about this quiz{' '}
        <ExternalLink href="https://github.com/chibicode/factquiz-en.chibicode.com">
          here
        </ExternalLink>
        .
      </span>
    </p>
  </>
)

export default Share2CA
