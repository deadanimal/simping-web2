<template>
Login successful

Address= {{address}} <br/>
Ts= {{ts}} <br/>
Sig={{sig}} <br/>
Signer={{signer}}
</template>

<script>

import { useUserStore } from '@/stores/user';
import router from "@/router";

export default {
    setup() {
    },
    data() {
        return {
            address: null,
            ts: null,
            sig: null,
            signer: null
        }
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
        this.signer = signer;

        const store = useUserStore();

        store.updateWallet(address, ts, sig, signer);
        
        localStorage.setItem("wAddress", address);
        localStorage.setItem("wTs", ts);
        localStorage.setItem("wSig", sig);
        localStorage.setItem("wSigner", signer);

        router.push('/dashboard');
    },
}
</script>
