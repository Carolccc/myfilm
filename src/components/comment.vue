<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">短评</el-button>
    <el-dialog title="写影评" :visible.sync="dialogFormVisible" width="600px">
      <el-form ref="form" :model="sizeForm" label-width="50px" label-position="left">
        <el-form-item >
          <div style="width:200px;float:left">
            <el-radio v-model="sizeForm.radio" label="want">想看</el-radio>
            <el-radio v-model="sizeForm.radio" label="seen">看过</el-radio>
          </div>
          <div style="width:200px;float:right;margin-top:12px" v-if="sizeForm.radio=='seen'">
            <el-rate v-model="sizeForm.rank"></el-rate>
          </div>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="sizeForm.name" placeholder="多个标签用空格隔开"></el-input>
        </el-form-item>

        <el-form-item label="评论">
          <el-input v-model="sizeForm.textarea" type="textarea" :rows="10" placeholder="请输入内容"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      rankDisable: true,
      sizeForm: {
        name: '',
        radio: 'want',
        textarea: '',
        rank: null
      }
    };
  },

  // methods:{
  //   sendMsg(){
  //     this.$emit("listenToChild", this.sizeForm.textarea)
  //   }
  // }
};

</script>

<style>

</style>
