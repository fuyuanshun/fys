<template>
    <div class="container">
        <GitHubSearch/>
        <GitHubList/>
    </div>
</template>

<script>
//导入Company组件

import GitHubSearch from './components/GitHubSearch.vue'
import GitHubList from './components/GitHubList.vue'

export default {
    // 注册组件
    components:{
      GitHubSearch,
      GitHubList
    }
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>