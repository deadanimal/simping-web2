<template>
Explore page

address= {{address}} <br/>
ts= {{ts}} <br/>
sig={{sig}} <br/>
signer={{signer}}
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {
            address: null,
            ts: null,
            sig: null,
            signer: null
        }
    },
    data() {

    },
    mounted() {
        const params = this.$route.query;
        
        const address = params['address'];
        const ts = params['ts'];
        const sig = params['sig'];
        const signer = params['signer'];

        this.address = address;
        this.ts = ts;
        this.sig = sig;
        this.signer = signer
        
        localStorage.setItem("wAddress", address);
        localStorage.setItem("wTs", ts);
        localStorage.setItem("wSig", sig);
        localStorage.setItem("wSigner", signer);

        console.log('address:', address);
    },
})
</script>
