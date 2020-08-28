<template>
  <div>
    <Nav />
    <h1>Home</h1>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import axios from 'axios'
export default {
  head: {
    title: 'Home Page'
  },
  name: 'HomePage',
  components: {
    Nav
  },
  created () {
    //
  },
  async mounted () {
    console.log('1', 1)
    const res = await axios('http://ec2co-ecsel-1tz8fmt95ad2h-2117726056.us-east-1.elb.amazonaws.com:8000/')
    console.log('res', res)
  }
}
</script>
