import {{pascalCase name}}ActionTypes from './{{kebabCase name}}.types'

const INITIAL_SATE = {
    // Initial state goes here
}

const {{camelCase name}}Reducer = (state = INITIAL_SATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default {{camelCase name}}Reducer