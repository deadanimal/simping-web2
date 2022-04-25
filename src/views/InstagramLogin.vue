<template>
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Redirected from Instagram</h1>
        Access Token: {{access_token}} <br/>
        User ID: {{user_id}}
    </div>
  </div>
</template>

<script>

import { useUserStore } from '@/stores/user';
import router from "@/router";

export default {
    setup() {
    },
    data() {
        return {
            access_token: null,
            user_id: null,
        }
    },
    mounted() {
        const params = this.$route.query;
        
        const access_token = params['access_token'];
        const user_id = params['user_id'];

        this.access_token = access_token;
        this.user_id = user_id;

        const store = useUserStore();

        store.updateInstagramLogin(access_token, user_id);
        
        router.push('/dashboard');
    },
}
</script>
