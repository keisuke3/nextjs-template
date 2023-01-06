/**
 * 振る舞いを表現するメソッドを定義
 * 各modelで共通で使い回す振る舞いを返す関数
 */

import { User } from './type'

export const selectFull = (user: User): string => {
  return `${user.firstName} ${user.lastName}`
}
