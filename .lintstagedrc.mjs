import micromatch from 'micromatch'

export default (allStagedFiles) => {
  const eslintFiles = micromatch(allStagedFiles, [
    '**/*.js',
    '**/*.ts',
    '**/*.tsx',
  ])
  const stylelintFiles = micromatch(allStagedFiles, ['**/*.css'])
  const prettierFiles = micromatch(allStagedFiles, ['**/*.**'])
  return [
    `prettier --ignore-path .gitignore --write ${prettierFiles.join(' ')}`,
    `eslint --fix ${eslintFiles.join(' ')}`,
    `stylelint --fix ${stylelintFiles.join(' ')}`,
  ]
}
