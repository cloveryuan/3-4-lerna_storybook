// Plop 入口文件，需要导入一个函数
// 此函数接受一个plop对象，用户创建生成器任务

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'file name',
        default: 'file name'
      },
      {
        type: 'input',
        name: 'Component',
        message: 'component name',
        default: 'Component'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-template/component/stories/component.stories.hbs'
      },
      {
        type: 'add', // 添加dist文件
        path: 'packages/{{name}}/dist/index.js',
        templateFile: 'plop-template/dist/index.js'
      },
      {
        type: 'add', // 添加LICENSE文件
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop-template/LICENSE'
      },
      {
        type: 'add', // 添加README.md文件
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-template/README.md'
      },
      {
        type: 'add', // 添加package.json文件
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/package.json'
      },
      {
        type: 'add', // 添加index.js文件
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-template/index.js'
      },
      {
        type: 'add', // 添加组件文件
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-template/src/component.vue'
      },
    ]
  })
}