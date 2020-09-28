import MyyForm from '../'
import MyyFormItem from '../../formitem'
import MyyInput from '../../input'
import MyyButton from '../../button'

export default {
  title: 'MyyForm',
  component: MyyForm
}

export const Login = () => ({
  components: { MyyForm, MyyFormItem, MyyInput, MyyButton },
  template: `
    <myy-form class="form" ref="form" :model="user" :rules="rules">
      <myy-form-item label="用户名" prop="username">
        <myy-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></myy-input>
      </myy-form-item>
      <myy-form-item label="密码" prop="password">
        <myy-input type="password" v-model="user.password"></myy-input>
      </myy-form-item>
      <myy-form-item>
        <myy-button type="primary" @click="login">登 录</myy-button>
      </myy-form-item>
    </myy-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})