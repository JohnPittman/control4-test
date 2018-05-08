'use strict';

module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css)$': 'typescript',
        '~(.*)': '<rootDir>/src$1'
    },
    projects: ['./src'],
    setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
    testEnvironment: 'node',
    testRegex: '.*test\\.(js?|jsx?|ts?|tsx?)$',
    transform: {
        '\\.js$|\\.jsx$|\\.ts$|\\.tsx$': 'ts-jest'
    }
};
