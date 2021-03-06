'use strict'

import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class extends Vue {

    message: string;

    created() {
        this.message = "Welcome!";
    }
}
