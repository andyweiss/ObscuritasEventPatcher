<template>
    <div class="card flex justify-left">
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>

    <div v-if="showAbout">
      <Suspense>
        <template #default>
          <AsyncComponent />
          
        </template>
        <template #fallback>
          <p>...</p>
        </template>
      </Suspense>
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
    {
        label: 'Menu',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh',
                command: () => handleItemClick('Refresh')
            },
            {
                label: 'Export',
                icon: 'pi pi-upload',
                command: () => handleItemClick('Export')
            },
            {
                label: 'About',
                icon: 'pi pi-info',
                command: () => handleItemClick('About')
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const handleItemClick = (action) => {
    switch (action) {
        case 'Refresh':
            console.log('Refresh clicked');
            // Add your refresh logic here
            break;
        case 'Export':
            console.log('Export clicked');
            // Add your export logic here
            break;
        case 'About':
            loadComponent();
            // Add your about logic here
            break;
        default:
            console.log('Unknown action');
    }
};

const AsyncComponent = defineAsyncComponent(() => import('./about.vue'));

const showAbout = ref(false);

const loadComponent = () => {
  showAbout.value = true;
};

</script>
