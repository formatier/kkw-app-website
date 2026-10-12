<script setup lang="ts">
const route = useRoute();

const props = defineProps<{
	to: string;
	icon: string;
	pageId: string;
}>();

const hilight = computed(() => {
	return String(route.meta.pageId) === props.pageId;
});
</script>

<template>
	<NuxtLink
		:to="props.to"
		class="rounded-field px-3 py-1 flex items-center gap-3"
        :class="{
            'bg-base-100 border border-base-300': hilight,
            'hover:bg-base-300 border border-transparent': !hilight
        }"
	>
		<Icon :name="icon"></Icon>
		<slot></slot>
	</NuxtLink>
</template>
