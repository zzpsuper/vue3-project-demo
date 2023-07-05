module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        ':sparkles:', // 引入新功能
        ':bug:', // 修复 bug
        ':art:', // 改进代码结构/格式
        ':memo:', // 撰写文档或注释
        ':rocket:', // 性能优化
        ':construction:', // 进行工作中的变更
      ],
    ],
    'type-case':[0],
    'type-empty':[0],
    'scope-empty':[0],
    'scope-case':[0],
    'subject-empty':[0],
    'subject-full-stop':[0,'never'],
    'subject-case':[0,'never'],
    'header-max-length':[0,'always',72]
  },
}
