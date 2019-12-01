/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { problems } from '../lib/quiz'
import Card from './card'
import Intro from './intro'
import Outro from './outro'
import Map from './map'
import ChoiceButton from './choice-button'
import ExternalLink from './external-link'

export const quietCss = css`
  color: #777;
  font-size: 0.825rem;
`

const QuizProblems = ({ setAnswer, selectedAnswers, submit }) => (
  <>
    <Card>
      <Intro />
    </Card>
    {problems.map(
      ({ text, choices, useGraphic }, index) =>
        selectedAnswers.length >= index && (
          <Card key={text} isLast={selectedAnswers.length === index}>
            <h3
              css={css`
                margin-top: 0;
                font-size: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <span
                css={css`
                  color: #777;
                `}
              >
                Question {index + 1}:
              </span>{' '}
              {text}
            </h3>
            <>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'a'}
                onClick={setAnswer({ index, answer: 'a' })}
              >
                {useGraphic ? <Map choice="a" /> : choices.a}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'b'}
                onClick={setAnswer({ index, answer: 'b' })}
              >
                {useGraphic ? <Map choice="b" /> : choices.b}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'c'}
                onClick={setAnswer({ index, answer: 'c' })}
              >
                {useGraphic ? <Map choice="c" /> : choices.c}
              </ChoiceButton>
            </>
            {index === 0 && (
              <>
                <p css={quietCss}>
                  Choose the answer you think is correct. You can edit your
                  answers until you click the <strong>Submit Answers</strong>{' '}
                  button at the end.
                </p>
                <p css={quietCss}>
                  Learn more about this quiz{' '}
                  <ExternalLink href="https://github.com/chibicode/factquiz-en.chibicode.com">
                    here
                  </ExternalLink>
                  .
                </p>
              </>
            )}
          </Card>
        )
    )}
    {selectedAnswers.length === 12 && (
      <Card isLast>
        <Outro submit={submit} />
      </Card>
    )}
  </>
)

export default QuizProblems
