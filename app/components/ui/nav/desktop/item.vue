<script setup lang="ts">
const route = useRoute();

const props = defineProps<{
    to: string;
    icon: string;
    pageId: string;
}>();

const highlight = computed(() => {
    return String(route.meta.pageId) === props.pageId;
});
</script>

<template>
    <NuxtLink
        :to="props.to"
        class="ui-btn ui-btn-sm"
        :class="{
            'ui-btn-outline': highlight,
            'ui-btn-ghost': !highlight,
        }"
    >
        <Icon :name="icon" class="btn-icon-sm"></Icon>
        <span>
            <slot></slot>
        </span>
    </NuxtLink>
</template>
