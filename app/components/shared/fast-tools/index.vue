<script setup lang="ts">
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const isShow = ref(false);

const menuRef = useTemplateRef("menu");

const showMenu = async (state: Flip.FlipState) => {
    isShow.value = true;
    await nextTick();

    Flip.from(state, {
        targets: menuRef.value,
        ease: "power2.out",
        scale: true,
        absolute: true,
    });
};

defineExpose({
    showMenu,
});
</script>

<template>
    <div
        class="bg-base-content/40 fixed w-dvw h-dvh top-0 z-10 flex items-center justify-center"
        data-flip-id="menu"
        v-if="isShow"
    >
        <div
            ref="menu"
            class="bg-base-100 border-base-300 border w-96 h-96 rounded-box"
        ></div>
    </div>
</template>
