/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { problems } from '../lib/quiz'
import Emoji from './emoji'
import CheckEmoji from './twemoji/2705'
import CrossEmoji from './twemoji/274c'
import ThinkEmoji from './twemoji/1f914'
import MonkeyEmoji from './twemoji/1f435'

const ResultsBreakdown = ({ selectedAnswers }) => (
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
        <ThinkEmoji />
      </Emoji>{' '}
      Results breakdown{' '}
      <Emoji large>
        <MonkeyEmoji />
      </Emoji>
    </h3>
    <ol
      css={css`
        list-style-type: none;
        line-height: 1.6;
        margin: 0 0 1rem;
        font-size: 0.9rem;
        padding: 0;
      `}
    >
      {problems.map(({ short, answer }, index) => (
        <li key={short}>
          {answer === selectedAnswers[index] ? (
            <Emoji>
              <CheckEmoji />
            </Emoji>
          ) : (
            <Emoji>
              <CrossEmoji />
            </Emoji>
          )}{' '}
          <strong>Q{index + 1}</strong>: {short}
        </li>
      ))}
      <li
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <span
          css={css`
            color: #777;
          `}
        >
          (↑ Take a screenshot and share the results!)
        </span>
      </li>
    </ol>
  </>
)

export default ResultsBreakdown
