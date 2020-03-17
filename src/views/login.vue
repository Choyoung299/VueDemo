<template>
  <div id="test">
    <div class="top"></div>
    <h1>123</h1>
    <a href>123</a>
    <span>123</span>
  </div>
</template>

<script>
export default {
  methods: {},
  created: function() {
    this.api.getGoldPrice().then(res => {
      console.log(res.data);
    });
    // this.Toast("提示文123案");
    this.Toast.success({duration:5000,message:"test"})
    ////test git 
    console.log("test-git")
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 40px;
  background: yellowgreen;
}
a {
  display: block;
  width: 100px;
  height: 100px;
  background: red;
}
span {
  display: block;
  width: 200px;
  height: 100px;
  background: #000;
}
</style>
