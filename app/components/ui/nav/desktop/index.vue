<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const props = defineProps<{
    isAttach: boolean;
}>();

const isAttach = ref(props.isAttach);

const navContainerRef = useTemplateRef("nav-container");

const captureNavStateChange = async (isAttachNewValue: boolean) => {
    const navState = Flip.getState(navContainerRef.value);

    isAttach.value = isAttachNewValue;
    await nextTick();

    Flip.from(navState, {
        absolute: true,
        ease: "power2.out",
        duration: 0.25,
    });
};

watch(props, async (props) => {
    captureNavStateChange(props.isAttach);
});
</script>

<template>
    <div
        class="h-[calc(100dvh-(--spacing(16)))] min-w-64"
        :class="{
            'p-4': !isAttach,
        }"
    >
        <nav
            class="flex flex-col p-2 bg-base-200 w-full h-full"
            :class="{
                'rounded-field shadow-xs border border-base-300': !isAttach,
            }"
            ref="nav-container"
        >
            <slot></slot>
        </nav>
    </div>
</template>
