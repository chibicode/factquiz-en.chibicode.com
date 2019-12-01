/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import HappyMonkeyEmoji from './twemoji/1f435'
import HandMonkeyEmoji from './twemoji/1f649'
import MouthMonkeyEmoji from './twemoji/1f64a'
import CryingEmoji from './twemoji/1f62d'
import HappyEmoji from './twemoji/1f601'
import EyeEmoji from './twemoji/1f644'
import Emoji from './emoji'

const colors = {
  win: '#074da2',
  tie: '#5207A2',
  lose: '#dc2e44'
}

const quietCss = css`
  text-align: center;
  color: #777;
  font-size: 0.825rem;
  margin-bottom: 0.5rem;
`

const ResultsIntro = ({ score }) => {
  let result
  if (score > 4) {
    result = 'win'
  } else if (score === 4) {
    result = 'tie'
  } else {
    result = 'lose'
  }
  return (
    <>
      <p
        css={css`
          text-align: center;
          color: #777;
          font-size: 0.825rem;
          margin-bottom: 0.25rem;
        `}
      >
        “<strong>Factfulness</strong>” Quiz Results
      </p>
      <h1
        css={css`
          margin: 0 0 0.5rem;
          text-align: center;
          font-size: 1.4rem;
          line-height: 1.1;
        `}
      >
        You’ve{' '}
        {result === 'win' ? (
          <>
            <span
              css={css`
                color: ${colors.win};
              `}
            >
              beaten
            </span>
          </>
        ) : result === 'tie' ? (
          <>
            <span
              css={css`
                color: ${colors.tie};
              `}
            >
              tied
            </span>{' '}
            with
          </>
        ) : (
          <>
            <span
              css={css`
                color: ${colors.lose};
              `}
            >
              lost
            </span>{' '}
            to
          </>
        )}{' '}
        the chimps!
      </h1>
      <div
        css={css`
          text-align: center;
          font-size: 2.75rem;
        `}
      >
        {result === 'win' ? (
          <>
            <Emoji>
              <HappyEmoji />
            </Emoji>{' '}
            <Emoji>
              <MouthMonkeyEmoji />
            </Emoji>
          </>
        ) : result === 'tie' ? (
          <>
            {' '}
            <Emoji>
              <EyeEmoji />
            </Emoji>{' '}
            <Emoji>
              <HandMonkeyEmoji />
            </Emoji>
          </>
        ) : (
          <>
            <Emoji>
              <CryingEmoji />
            </Emoji>{' '}
            <Emoji>
              <HappyMonkeyEmoji />
            </Emoji>
          </>
        )}
      </div>
      <h2
        css={css`
          margin: 0;
          font-size: 1.4rem;
          text-align: center;
        `}
      >
        You scored{' '}
        <span
          css={css`
            color: ${colors[result]};
          `}
        >
          {score}
        </span>{' '}
        out of 12!
      </h2>
      <p css={quietCss}>Chimps will get 4/12 on average</p>
    </>
  )
}

export default ResultsIntro
