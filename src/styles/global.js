import { injectGlobal } from 'styled-components';

const Global = () => injectGlobal`
  
/**
* Custom styles.
*/
  
  html {
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
  }
  
  body {
    color: #515151;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  
  a {
    color: #404040;
    text-decoration: none
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 600;
    line-height: 1.1;
    color: #333;
    letter-spacing: -.025rem
  }
  
  h1 {
    font-size: 2rem
  }
  
  h2 {
    font-size: 1.6rem
  }
  
  h3 {
    font-size: 1.3rem
  }
  
  h4,h5,h6 {
    font-size: 1rem
  }
  
  p {
    margin: 0 0 1rem
  }
  
  ul,ol,dl {
    margin-top: 0;
    margin-bottom: 1rem
  }
  
  dt {
    font-weight: bold
  }
  
  dd {
    margin-bottom: .5rem
  }
  
  ul {
    list-style: inside circle;
    padding-left: 0
  }
  
  ul li {
    margin-bottom: .25rem
  }
  
  ul ul,ul ol {
    margin-top: .25rem;
    margin-bottom: .5rem
  }
  
  ol {
    list-style: inside decimal;
    padding-left: 0
  }
  
  ol li {
    margin-bottom: .25rem
  }
  
  ol ul,ol ol {
    margin-top: .25rem;
    margin-bottom: .5rem
  }
  
  p+h1,p+h2,p+h3,ul+h1,ul+h2,ul+h3,ol+h1,ol+h2,ol+h3 {
    margin-top: 1.5rem
  }
  
  hr {
    border: 0;
    border-top: .5px solid #eee;
    border-bottom: .5px solid #eee;
    margin: 1.5rem auto
  }
  
  strong {
    color: #333;
    font-weight: 600
  }
  
  abbr {
    font-size: 85%;
    font-weight: bold;
    color: #555;
    text-transform: uppercase
  }
  
  abbr[title] {
    cursor: help;
    border-bottom: 1px dotted #e5e5e5
  }
  
  blockquote {
    padding: 0 0 0 1.5rem;
    margin: 0 2rem 1rem 0;
    color: #999;
    border-left: .5rem solid #e5e5e5
  }
  
  blockquote p:last-child {
    margin-bottom: 0
  }
  
  code,pre {
    font-family: Menlo, Monaco, "Courier New", monospace
  }
  
  code {
    padding: .25em .5em;
    font-size: 85%;
    color: #bf616a;
    background-color: #f9f9f9;
    border-radius: 3px
  }
  
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: .8rem;
    line-height: 1.4;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    background-color: #f9f9f9
  }
  
  pre code {
    padding: 0;
    font-size: 100%;
    color: inherit;
    background-color: transparent
  }
  
  img {
    display: block;
    max-width: 100%;
    margin: 0 0 1rem;
    border-radius: 5px
  }
  
  table {
    margin-bottom: 1rem;
    width: 100%;
    border: 1px solid #e5e5e5;
    border-collapse: collapse
  }
  
  td,th {
    padding: .25rem .5rem;
    border: 1px solid #e5e5e5
  }
  
  tbody tr:nth-child(odd) td,tbody tr:nth-child(odd) th {
    background-color: #f9f9f9
  } 
`;

export default Global;