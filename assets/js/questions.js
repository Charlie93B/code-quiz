export const Questions = [
    {
        question: 'How do you create a single line comment?',
        answers: [
            ['//', true],
            ['comment()', false],
            ['##', false],
            ['>>', false]
        ]
    },
    {
        question: 'How do you create a double line comment?',
        answers: [
            ['comment()', false],
            ['/* */', true],
            ['##', false],
            ['//', false]
        ]
    },
    {
        question: 'Which of these can you not use to declare a variable?',
        answers: [
            ['const', false],
            ['var', false],
            ['declareVariable()', true],
            ['let', false]
        ]
    },
    {
        question: 'If i=0, what is the value of i after the expression i++ ?',
        answers: [
            ['1', true],
            ['0', false],
            ['-1', false],
            ['Cheese', false]
        ]
    },
    {
        question: 'What bracket type do you need to define an array?',
        answers: [
            ['{', false],
            ['c', false],
            ['<', false],
            ['[', true]
        ]
    },
    {
        question: 'How do you set an item in localstorage?',
        answers: [
            ['storeItem()', false],
            ['localStorage.setItem()', true],
            ['localStorage++', false],
            ['<localStorage />', false]
        ]
    },
    {
        question: 'How do you generate a random number?',
        answers: [
            ['Math.random()', true],
            ['Math.random', false],
            ['random', false],
            ['Mathematics.random()', false]
        ]
    },
    {
        question: 'An if statement is enlosed with ___',
        answers: [
            ['{}', false],
            ['[]', false],
            ['**', false],
            ['()', true]
        ]
    },
    {
        question: 'Which HTML tag do you need to link to your JavaScript file?',
        answers: [
            ['<script>', true],
            ['<javascript>', false],
            ['<html>', false],
            ['<link>', false]
        ]
    },
    {
        question: 'What is this?',
        answers: [
            ['this', true],
            ['this', true],
            ['this', true],
            ['this', true]
        ]
    },
]

