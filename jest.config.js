module.exports = {
    verbose: true,
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    testMatch: [
        '<rootDir>/test/**/*.js'
    ],
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '\\.ts$': 'ts-jest',
        '\\.js$': 'babel-jest'
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
            'babelConfig': false
        }
    }
};