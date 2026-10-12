<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const isAttach = ref(true);

const fastToolsRef = useTemplateRef("fast-tools");

const links = [
    {
        icon: "ph:house",
        title: "หน้าหลัก",
        linkTo: "/",
        pageId: "home",
    },
    {
        icon: "ph:circles-four",
        title: "เมนู",
        linkTo: "/menu",
        pageId: "menu",
    },
    {
        icon: "ph:presentation-chart",
        title: "บันทึก",
        linkTo: "/stats",
        pageId: "stats",
    },
    {
        icon: "ph:user",
        title: "โปรไฟล์",
        linkTo: "/profile",
        pageId: "profile",
    },
];

const animateFastTools = (event: Event) => {
    if (event.target) {
        const buttonTarget = event.target;
        const buttonFlipState = Flip.getState(buttonTarget as HTMLElement);
        fastToolsRef.value?.showMenu(buttonFlipState);
    }
};
</script>

<template>
    <UiHeader>
        <template #context-tools>
            <button
                class="ui-btn ui-btn-icon-sm ui-btn-ghost btn-click-drop justify-center"
                @click="isAttach = !isAttach"
            >
                <Icon :name="isAttach ? 'ph:arrows-in-cardinal' : 'ph:arrows-out-cardinal'" class="btn-icon-md"></Icon>
            </button>
        </template>
    </UiHeader>
    <SharedFastTools ref="fast-tools"> </SharedFastTools>
    <UiNavDesktopLayout :is-attach="isAttach">
        <UiNavDesktop :is-attach="isAttach">
            <UiNavDesktopSection>
                <button
                    class="ui-btn ui-btn-md ui-btn-neutral btn-click-drop justify-center"
                    @click="animateFastTools"
                    data-flip-id="menu"
                >
                    <Icon name="ph:plus-circle" class="btn-icon-md"></Icon>
                    สร้าง
                </button>
                <UiNavDesktopItem
                    v-for="link in links"
                    :page-id="link.pageId"
                    :to="link.linkTo"
                    :icon="link.icon"
                    >{{ link.title }}</UiNavDesktopItem
                >
            </UiNavDesktopSection>
            <UiNavDesktopSection> </UiNavDesktopSection>
        </UiNavDesktop>

        <template #window>
            <slot></slot>

            <UiNavMobile> </UiNavMobile>
        </template>
    </UiNavDesktopLayout>
</template>
