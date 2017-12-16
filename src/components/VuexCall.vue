<template>
    <ButtonWithStatus
        :toggle-call="toggleAction"
        :stranger-status="storedStatus"
        button-text="VueX call"
    ></ButtonWithStatus>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ButtonWithStatus from './ButtonWithStatus'

export default {
  name: 'VuexCall',
  components: {
    ButtonWithStatus
  },
  methods: {
    ...mapActions(['toggleAction'])
  },
  computed: mapState({
    storedStatus: state => state.status
  })
}
</script>