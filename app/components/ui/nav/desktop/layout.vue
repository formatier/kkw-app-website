<script setup lang="ts">
const timer = useTimer()
const props = defineProps<{
    isAttach: boolean
}>();
const ticker = ref(0)
const hide = ref(0)

watch(props, () => {
  if (props.isAttach) {

  }
})
</script>

<template>
	<div class="grid grid-cols-[auto_1fr]">
        <div>
            <div></div>
            <slot></slot>
        </div>
        <div>
            <slot name="window"></slot>
        </div>
    </div>
</template>
