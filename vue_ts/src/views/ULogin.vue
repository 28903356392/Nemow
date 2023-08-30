<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    style="width: 400px; height: 200px"
  >
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" placeholder="账户" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="ruleForm.password" type="password" placeholder="密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Start </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { userLogin, TypeLogin as RuleForm } from '@/api'

// 表单使用变量
const formSize: any = ref('default')
const ruleFormRef = ref<FormInstance>()

// 账号密码
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
})

// 规则
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' },
  ],
})
var timer: any = null
// 登录
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 节流  1秒钟内点击生效一次
      if (timer != null) return null
      timer = setTimeout(() => {
        userLogin(ruleForm).then(res => {
          timer = null
          console.log(res)
        })
      }, 1 * 1000)
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 重置
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
