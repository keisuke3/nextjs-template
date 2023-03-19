import micromatch from 'micromatch'

export default (allStagedFiles) => {
  const eslintFiles = micromatch(allStagedFiles, [
    '**/*.js',
    '**/*.ts',
    '**/*.tsx',
  ])
  const stylelintFiles = micromatch(allStagedFiles, [
    '**/*.css',
    '**/*.ts',
    '**/*.tsx',
  ])
  const prettierFiles = micromatch(allStagedFiles, ['**/*.**'])

  const commandList = {
    'prettier --ignore-path .gitignore --write': prettierFiles,
    'eslint --fix': eslintFiles,
    'stylelint --fix': stylelintFiles,
  }

  const createExecuteCommand = (commandObj) => {
    return Object.entries(commandObj)
      .map(([key, value]) => {
        if (!value.length) return
        return `${key} ${value.join(' ')}`
      })
      .filter((e) => e)
  }

  return createExecuteCommand(commandList)
}
