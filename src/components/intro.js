/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import Emoji from './emoji'
import Book from './book'
import AmazonLink from './amazon-link'
import { quietCss } from './quiz-problems'

const Intro = () => (
  <>
    <h1
      css={css`
        margin: 0 0 0.5rem;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.1;
      `}
    >
      Factfulness Quiz
    </h1>
    <p
      css={css`
        text-align: center;
        font-size: 0.825rem;
        color: #777;
      `}
    >
      By Shu Uesugi, a co-translator of “Factfulness” JP edition
    </p>
    <p
      css={css`
        text-align: center;
      `}
    >
      <Book />
    </p>
    <p>
      “
      <AmazonLink>
        <strong>Factfulness:</strong> Ten Reasons We're Wrong About the
        World--and Why Things Are Better Than You Think
      </AmazonLink>
      ” is a global bestselling book of 2018, written by Hans Rosling, Ola
      Rosling, and Anna Rosling Rönnlund.{' '}
      <a href="https://www.gatesnotes.com/Books/Factfulness">
        Bill Gates called it
      </a>{' '}
      “one of the most educational books I’ve ever read.”
    </p>
    <p>
      In the beginning of this book, there’s a <strong>short quiz</strong> about
      the current state of the world. Each question has 3 answer choices. So if
      you give this quiz to chimpanzees, they’ll answer 1/3 of the questions
      correctly.
    </p>
    <div
      css={css`
        text-align: center;
        font-size: 2.75rem;
        margin-bottom: 1rem;
      `}
    >
      <Emoji>
        <ThinkEmoji />
      </Emoji>{' '}
      <Emoji>
        <VsEmoji />
      </Emoji>{' '}
      <Emoji>
        <MonkeyEmoji />
      </Emoji>
    </div>
    <p>
      There are <strong>12 questions</strong> total. Your goal is to beat the
      chimps by answering <strong>more than 4 questions</strong> correctly.
      Let’s try it!
    </p>
    <p css={quietCss}>
      This is an unofficial quiz based on free material from{' '}
      <a href="https://www.gapminder.org/free-material/">GAPMINDER.ORG</a>,
      CC-BY license.
    </p>
  </>
)

export default Intro
