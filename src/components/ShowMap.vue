<template>
  <div>
    <p>
      マップを表示する画面
    </p>
    <button v-on:click="getPosition">位置情報取得</button>
    緯度 {{latitude}}
    経度 {{longitude}}
    <router-link to="/">Go to page1</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      longitude: 0,
      latitude: 0,
      count: 0
    }
  },
  methods: {
    getPosition: function () {
      this.longitude = 1
      this.latitude = 1
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合

      )
    },
    // ボタンをクリックしたときのハンドラ
    increment: function () {
      this.count += 1 // 処理は再代入するだけでOK！
    },
    set_latitude: function (position) {
      alert('緯度:' + position.coords.latitude + ',経度' + position.coords.longitude);
    }
  }
}
</script>

<style>
</style>
