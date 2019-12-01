export const problems = [
  {
    text:
      'In low income countries across the world, how many girls complete fifth grade?',
    short: 'Girl’s education',
    choices: {
      a: '20%',
      b: '40%',
      c: '60%'
    },
    answer: 'c'
  },
  {
    text: 'Where does the majority of the world population live?',
    short: 'People’s income',
    choices: {
      a: 'Low income countries',
      b: 'Middle income countries',
      c: 'High income countries'
    },
    answer: 'b'
  },
  {
    text:
      'In the last 20 years the proportion of people living in extreme poverty worldwide, has...?',
    short: 'Extreme poverty',
    choices: {
      a: 'Almost doubled',
      b: 'Remained more or less the same',
      c: 'Almost halved'
    },
    answer: 'c'
  },
  {
    text: 'What is the life expectancy of the world population?',
    short: 'Life expectancy',
    choices: {
      a: '50 years',
      b: '60 years',
      c: '70 years'
    },
    answer: 'c'
  },
  {
    text:
      'There are two billion children in the world today, aged 0 to 15 years old. How many children will there be in the year 2100 according to the United Nations?',
    short: 'Future child population',
    choices: {
      a: '4 billion',
      b: '3 billion',
      c: '2 billion'
    },
    answer: 'c'
  },
  {
    text:
      'The United Nations predicts that by 2100 the world population will have increased by another 4 billion people. What is the main reason?',
    short: 'Population growth factors',
    choices: {
      a: 'There will be more children (under age 15).',
      b: 'There will be more adults (15-75)',
      c: 'There will be more very old people (above age 75).'
    },
    answer: 'b'
  },
  {
    text:
      'How did the number of deaths per year from natural disasters change over the last hundred years?',
    short: 'Natural disasters',
    choices: {
      a: 'More than doubled',
      b: 'Remained more or less the same',
      c: 'Decreased to less than half'
    },
    answer: 'c'
  },
  {
    text:
      'There are roughly seven billion people in the world today. Which map shows where people live? (Each figure represents 1 billion people.)',
    short: 'Population distribution',
    useGraphic: true,
    answer: 'a'
  },
  {
    text:
      'How many of the world’s 1-year-old children today have been vaccinated against some disease?',
    short: 'Vaccines for Babies',
    choices: {
      a: '20%',
      b: '50%',
      c: '80%'
    },
    answer: 'c'
  },
  {
    text:
      'Worldwide, 30 year old men have spent 10 years in school, on average. How many years have women of the same age spent in school?',
    short: 'Women’s education',
    choices: {
      a: '9 years',
      b: '6 years',
      c: '3 years'
    },
    answer: 'a'
  },
  {
    text:
      'Tigers, Giant Pandas and Black Rhinos were listed as threatened species in 1996. Since then, have any of these species become more critically endangered?',
    short: 'Endangered species',
    choices: {
      a: '2 of them',
      b: '1 of them',
      c: 'None of them'
    },
    answer: 'c'
  },
  {
    text: 'How many people in the world have some access to electricity?',
    short: 'Electricity',
    choices: {
      a: '20%',
      b: '50%',
      c: '80%'
    },
    answer: 'c'
  }
]

export const score = selectedAnswers =>
  selectedAnswers.filter((answer, index) => problems[index].answer === answer)
    .length
