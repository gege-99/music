<template>
  <div id="header">
    <!-- <div id="header_logo"> -->
    <img id="header_img" :src="img" />
    <div id="header_name">{{name}}</div>
    <!-- </div> -->
    <div id="myself"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      name: "Chicken Music",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABACAYAAABGHBTIAAAAAXNSR0IArs4c6QAAChZJREFUaAXNWn9QVMcd/+y744AzHOIBRoQYSsUYqxWIxVSqCEZLrOMkbTQdZ9K0Ouq0WHRibKsdU62JzZhJx7GNJjNNpzTOpP2jqaNJnfqjdmq0DSI0VCnQjM1AwKBYlcDJwb3tdx93J3fce7d7HOB3Zu/tj++vz+6+3e/uO4ZRJt5e5MRVPAOO5WTqEUouSh4w/JvSu2COajb3/Cej7EZQPQvmRiHDa+etBvRfAtxtqp6hD2AvoQB7GavtN+WLU8OoAeZ1hS9DxzZpPxmOIyPxSZZz3iMtEwOjFoNMVBFe+8gWJbBCI8dXcc37m6jKR8gQ9xHmDUV58KKBECTH5pvtaVZU87vYZKNLxX+E+/nzsYMVDus7Am7zS085eN38B/nFL0/j/Cdx8TWuI8x5UQLqeCdNz4kBp2N72r5NwL9BsuXUeUmGDoYeWtXfAU/Yywr/cTk2vbQ8xioYSY5fLH4YvP9SpDalOkZdxs18Y/3UUsUKaw8q6fQzjwgwry2eAzZQCs4mQ+OfkZM2cP7TWBxRlmHat1jhhWpVuZgAD47kwCGabl9RNRg/ftYNpy2XzfygS0Wn8kLA/1lYBj5wYXzBCog8BR7fOhWwglcJMK9/dCoG2DtkLMYtR9W9aPx8STSO8HZ7eIVl2efdQ2BFLCxJ9MY4ZwEp8+g5E0iaBiSkUzdPGJTXe4D+68Cdj4HeRqC7hp5izeOS+jFVljHAJ/0O89ZHk9HpJe+4MyBs+kzIBDJWAZMeBxyTTdkiNng7gRvvAdco9uinvBUxVk+rdYEVS3ib/Ajf8NIQRQFrSwWyvgu4V9IoJoTbkis7qLPufxbIXAN0HQHaXwN8t8xkPzRrMKuXf4d1Zj2V05YCs/5AI0vxQqxgh3opdAhdQmfasqEtwbynQz8eLEhm5AFzm8n8sgE524HcvYB9hAFWJKeFztyXgAdExEm2/NTbArTt41V8PUV3CiQPuODvjbSWhO55jKK+vFdpJL6uYDJG1vQnydbPKTZMglhJOg7rFOOguKWZ71PRKA+YtN58nw85q1Jvf+5lILVExd7IeFMXQJ/66p3WAxp8twdVca5XtZQVrpBVLA34P4sL1l47xrPFImpQzg/GFqzfrJZZnJSx6QU/3MFKXecHWp+iXUSCpAALZbQz7uFeem9e5xiw0wI1FtPYBIBr6ddcrscqfMFmzqd5Ovsqg2WLjBRgT+eddfS+GBuq7nOBPfhD6cjAwvaImjKf29mvuWgbDBJ/vqWiIjFYNMlIASbZTQH59LXfg82VKh2wBOTi/dSSkpIy13+f5twg0Xkyg/depZXNmqICbiktnE/Kpgs19oxMpC5/YtxHNwAppWKlTfgUIHJsXSBv9owKmKIrcfNg0MQnngaz28d9dAP+MJvNJnwKEsPCj5YUDZ3nwaZAJipgznmZwcwYUh5bHpC7Z56pFSvpBsQ/BpzbfT5ebuWcJeDO0tL7SPiLQkHSQ7OQMGT6WCkdyzZb2qQE4dtd0uffzQ/PWQK+pXXn03th8DgLvzRc+h6pCfGN42Ert4KnpeaygoVc51sodithnLsJKNN9d7c6LS8f586dQ0NDA65cuYL29nZcv34dt2/fRm9vL7xeL3zEz2h62e12JCcnY+LEiZgyZQpmzpyJsrIyzJtH5+IIVFNTg9OnT6OxsdHQe+vWLXg8HgwMDFD4SBdlNhscDgecTidcLhfS09ORlZWF3NxczJ49Gw+RbwHSdSxuWlRwSpQZ4x7OWZPdzt/OO1VPh22qEz9Ni+b+iDIvCpCiHIk26ilo7wyEWZE4otctWbIE+/fvNwAIbtFBVVVVOHnyZHRhC46szEwc0rotOAiYxg5OX7SykjUvLiqG7jtvBVZo2pnxedTT6I6UxIisWDEY+h49etSYMSPVWTBnDnZ10vEpOm1nLaUFr+icPxeN99ru/Vi7fn00tnFp/9UbbyBjZ1VU2wysVaOgwh2VkxgWLFyIdeui7usyquLKI3wSvskQYc2xXKXDlWzduhWrVq0Kr1YqV1ZWGu/siRMnIPIjodWrV0P4pEJKgIXi3bt3Y/PmzcZqrGJI8Obn5xsgs7OzkZOTY+RFnSqJnWDLli3YtWuXqqjavXRA+8aNG1FdXQ3huCxpmoYdO8Q1TSiJOtEmS8KmsL1hwwZZkRA+eUshYjD21GPHjhlTKi0tLaw1tCj25H379qG4uJgaaD/4tBq4TAebng+NOtEmeKxI2BDTV9g028+t5ANtrLl07q9pb382UGH2zD9TZ9ZkBAnHjx83ggcRmHR1dSExMdGYASUlJVizZo0RgMB7Ffh4J1241w7qYnRNNIVW/vu/g46OT3H48GGcPXsWbW1t6Ovrg9vtNgKL8vJyLFu2zLJTmksLrpDSXFMn/Q1xARzNiNF+409AK92B+SIECPcVkqt76KuEcccgpS6cqWVxYS1FZUXh9eHlmKd0uCKzMu+7Cb2Jtvn//jgyWCH42UWa4qvp4v3PZmriVj/qgHtq6tBx4C+484m5z/RWo7vuNlq37zZnilOLnT60DxgLSZwUDlND0XzPv7iRJsxicC+lo2bOYMjO6WzSXcdxg0JpbycdElzBs8wwNfGoIKu6XWNo1EUXjxYR4AD1XCLg9HFwAh3gnHRp9L+/0Q3ojUArPRW2pyFSClnWpNl56pu0j1tMOAV9kqw9lzmuHQkDS7IioBhNIu17tdwzZ27abI4yKpjvO8ILzvtjcYYPGeGo8rGPcPD2MpINOjT0akyrnP7Xut8aL03eqQ+axZL+UXnRYt3HF1BXuwlgSHeT48/QpZn61zJ+d0pHcia0LsRkaJN1ifY6/jYBez+Ujd+hc3BTspZwJPvU4H9BgqsETSfxJp/2p1A5KnGbTVyOqQNWWCDIuWF2JSs68s/UvyLDq7ItNckoHMZDYZw0MRV3QrRK+6Zi4UKICckCfd2T5CS22N9hf6wa3ZQKYDHdlYnZE6RlGF3UxUjSvqkAFrd+ytuXIztHGoMj+wFp3iGMwifjRnJInWlWGjAtamJuvmWqyaQhccYsOKbKgU4ppTBMnd7y+yYlKQ3Yr+0X9LTc8yJZzdi0LWpQkfyFufQp5/FI4lZ1whfhkzQpAaaebCPNb0pr9zNOmF+CydtegGbyjibPnousF+m/IuqRFkWJhk/SLilvfBSguEl7M6VJ0lb8jANX23Hzj7+Hp6EeuqcXCVOzIaZxShn9LUkdbBepnUGAxXN0iUB/k9J405DvpKOL19BOaF8fR8SHxgBiqAkCa6f03jiAflfYDvVmjEpk2DnGoAVY5xjBi2xG9DalsZjeh4StyF6MQy05Ixay65TiTULn2C5Qsv1HjrkpHaTUR2mkJHS8Rklsg/c2kZPZlH5GqY2SKrWSwF5K8t9xFLpDOfBQ0C3+riAiOfE/hzJKRZRmUJpCKYWSILqpQAclcZ4VRzxx6qlRiY2JX4n+D3WTLgMWzmcSAAAAAElFTkSuQmCC"
    };
  }
};
</script>
<style lang="less" scoped>
@import "~@style/mixin.less";
#header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .h(44);
  justify-content: center;
  align-items: center;
}
#header_img {
  // background: url({{img}})
  width: 30px;
  height: 32px;
  margin-right: 9px
}
#header_name {
  display: inline-block;
  color: #ffcd32;
  font-size: 18px;
  font-weight: 400;
}
</style>