
<template>
    <div class="card">
        
        <Drawer v-model:visible="visibleRight" header="Obscuritas event patcher" position="right">
            <p>Version: 0.0 </p>
            <p>written by Adi Hilber & Andy Weiss</p>
        </Drawer>

        
    </div>
</template>

<script setup>
import { ref } from "vue";
const visibleRight = ref(true);
</script>
