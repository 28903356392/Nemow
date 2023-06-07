<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="user" label="姓名" required>
        <uni-easyinput placeholder="请输入姓名" v-model="formData.user"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="index" label="排序">
        <uni-easyinput placeholder="index" v-model="formData.index"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="img" label="图片" required>
        <uni-file-picker file-mediatype="image" return-type="object" v-model="formData.img"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item name="price" label="价格">
        <uni-easyinput placeholder="价格" v-model="formData.price"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="year" label="年份">
        <uni-easyinput placeholder="年份" v-model="formData.year"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="repertory" label="库存">
        <switch @change="binddata('repertory', $event.detail.value)" :checked="formData.repertory"></switch>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/user_data.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'user_data';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "user": "",
        "index": "",
        "img": null,
        "price": "",
        "year": "",
        "repertory": null
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>
