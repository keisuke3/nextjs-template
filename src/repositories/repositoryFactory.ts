import { userRepository } from './user/repository'

type repositoryType = {
  user: string
}

const repositories = {
  user: userRepository,
}

export const repositoryFactory = {
  get: <T extends keyof repositoryType>(name: T) => repositories[name],
}
