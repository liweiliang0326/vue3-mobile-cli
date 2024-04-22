import type { Component } from 'vue';
import GlobalTestComponent from './GlobalTestComponent/GlobalTestComponent.vue';

type TypeComponent = {
    [propName: string]: Component
}

const globalComponents: TypeComponent = {
    GlobalTestComponent
}

export default globalComponents;
