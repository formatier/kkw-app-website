<script setup lang="ts">
const props = defineProps<{
    isAttach: boolean
}>();
</script>

<template>
	<div class="grid grid-cols-[auto_1fr]">
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="window"></slot>
        </div>
    </div>
</template>
