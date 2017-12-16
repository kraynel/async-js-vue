<template>
    <ButtonWithStatus
      :toggle-call="togglePromiseCall"
      :stranger-status="strangerStatus"
      button-text="Promise call"
    ></ButtonWithStatus>
</template>

<script>
import UpsideDownPromise from '../services/UpsideDownPromise'
import ButtonWithStatus from './ButtonWithStatus'

export default {
  name: 'PromiseCall',
  components: {
    ButtonWithStatus
  },
  data() {
    return {
      upsideDownPromise: new UpsideDownPromise(),
      strangerStatus: 'In real world',

      togglePromiseCall: () => {
        this.upsideDownPromise
          .enter()
          .then(() => {
            this.strangerStatus = 'In upside down'
            return this.upsideDownPromise.findDemogorgon()
          })
          .then(location => {
            this.strangerStatus = `Demogorgon in ${location}`
            return this.upsideDownPromise.killDemogorgon()
          })
          .then(result => {
            if (result === 'SUCCESS') {
              this.strangerStatus = 'Demogorgon dead ️☠️'
              return
            }

            this.strangerStatus = 'You are dead ☠️'
          })
      }
    }
  }
}
</script>