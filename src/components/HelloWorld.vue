<template>
  <div class="hello" align="left">
    <h1>{{ msg }}</h1>
    <DatePicker />
<!--    <Calendar />-->

    <Button style="margin-right: 5px; margin-left: 5px" type="primary" >New button</Button>
    <Button style="margin-right: 5px; margin-left: 5px" type="dashed">Dashed button</Button>
    <Button style="margin-right: 5px; margin-left: 5px" type="danger">Dashed button</Button>

    <a-button type="primary" loading>
      Loading
    </a-button>

    <a-slider v-model="size" />
    <br />
    <br />
    <a-space :size="size">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="link">Link</a-button>
    </a-space>

    <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <a-progress type="circle" :percent="100" :format="() => 'Done'" />
    <a-progress type="circle" :percent="75">
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </a-progress>


  </div>
</template>

<script>
  import { DatePicker,
    // Calendar,
    Button, } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components: {
    DatePicker,
      // Calendar,
      Button,
    },
    data() {
      return {
        size: 8,
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ant-progress-circle,
ant-progress-line {
   margin-right: 8px;
   margin-bottom: 8px;
 }
</style>