<template>
  <!-- <my-header :cartItemCount="cartItemCount"></my-header> -->
  <!-- <cart :cart="cart"></cart> -->
  <div class="cart__form">
    <form action="#">
        <div class="cart__form-heading">
            SHIPPING ADRESS
        </div>
        <label>First Name:</label>
        <input v-model.trim="order.firstName" placeholder="Your First Name"/>

        <label>Last Name:</label>
        <input v-model.trim="order.lastName" placeholder="Your Last Name"/>

        <label>Address:</label>
        <input v-model.trim="order.address" placeholder="Your Address"/>

        <label>City:</label>
        <input v-model.trim="order.city" placeholder="Your City"/>

        <label>State:</label>
        <select v-model="order.state">
          <option disabled value="">State</option>
          <option v-for="(state, key) in states" v-bind:value="state">
          {{key}}
          </option>
        </select>

        <label>Zip / Postal Code:</label>
        <input v-model.number="order.zip"
          class="form-control"
          type="number"
          placeholder="Postcode / Zip"/>

        <input
          type="checkbox"
          class="checkbox"
          id="gift"
          value="true"
          v-bind:true-value="order.sendGift"
          v-bind:false-value="order.dontSendGift"
          v-model="order.gift">
        <label for="gift">Ship As Gift?</label>
        <input
          class="radio"
          type="radio"
          id="home"
          v-bind:value="order.home"
          v-model="order.method">
        <label for="home">Home</label>
        <input
          class="radio"
          type="radio"
          id="business"
          :value="order.business"
          v-model="order.method">
        <label for="business">Business</label>
        <!-- <button type="submit" class="btn btn--main" v-on:click="submitForm">PLACE ORDER</button> -->
        <!-- <input type="submit" value="GET A QUOTE"> -->
    </form>

    <div class="cart__order">
        <pre>
          First Name: {{order.firstName}}
          Last Name: {{order.lastName}}
          Address: {{order.address}}
          City: {{order.city}}
          Zip: {{order.zip}}
          State: {{order.state}}
          Method: {{order.method}}
          Gift: {{order.gift}}
        </pre>

        <div class="cart__subtotal">
            SUB TOTAL <span>&dollar;900</span>
        </div>
        <div class="cart__grandtotal">
            GRAND TOTAL <span>&dollar;900</span>
        </div>
        <hr>
        <button type="submit" class="btn btn--main" v-on:click="submitForm">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OrderForm',
  data () {
    return {
      states: {
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift:'',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift'
      }
 
    }
  },
  methods: {
    submitForm() {
      alert('Submitted');
    }
  }
}
</script>
<style scoped>
</style>
