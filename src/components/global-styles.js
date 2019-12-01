/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import 'modern-normalize'

const NOT_SMALL = '48em'
export const ns = `@media screen and (min-width: ${NOT_SMALL})`

const GlobalStyles = () => (
  <Global
    styles={[
      css`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        strong {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-weight: bold;
        }

        html {
          font-size: 18px;
          color: #333;
          line-height: 1.6;
          background-color: #dee3ef;
        }

        button {
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        svg {
          height: 100%;
          width: auto;
        }

        img {
          display: block;
          max-width: 100%;
        }

        ${ns} {
          html {
            font-size: 21px;
          }
        }

        p {
          margin: 0 0 1rem;
        }

        a {
          color: inherit;
          &:hover {
            background-color: #bbdefb;
          }
        }
      `
    ]}
  />
)

export default GlobalStyles
