<template>
    <div class="home_page">
        <p>home</p>
        <van-button plain type="primary" @click="jumpSecondPageFun">主要按钮</van-button>
        <GlobalUpload accept=".doc,.docx,.xls,.xlsx,.pdf"></GlobalUpload>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const [route, router] = [useRoute(), useRouter()];

const obj1 = { name: 'lwliang' };
const obj2 = $Tools.cloneDeep(obj1);
Object.assign(obj2, { wife: 'hyxia' });

console.log('obj1', obj1);
console.log('obj2', obj2);

onMounted(async () => {
    console.log('$Ghttp', $Ghttp);
    const res = await $Ghttp.httpGetProjectCount().catch((err: any) => console.log('httpGetProjectCount-err', err));
    console.log('httpGetProjectCount-res', res);
})

const jumpSecondPageFun = () => {
    $Tools.showToast('跳转页面');
    router.push({ name: 'second', query: route.query });
}
</script>
