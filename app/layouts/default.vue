<script setup lang="ts">
const isAttach = ref(false)

const links = [
    {
        icon: "ph:house",
        title: "หน้าหลัก",
        linkTo: "/",
        pageId: "home"
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
        pageId: "profile"
    }
]
</script>

<template>
    <UiHeader></UiHeader>
    <UiNavDesktopLayout :is-attach="isAttach">
        <UiNavDesktop>
            <UiNavDesktopSection>
                <UiNavDesktopItem v-for="link in links" :page-id="link.pageId" :to="link.linkTo" :icon="link.icon">{{ link.title }}</UiNavDesktopItem>
            </UiNavDesktopSection>
            <UiNavDesktopSection>
                
            </UiNavDesktopSection>
        </UiNavDesktop>

        <template #window>
            <slot></slot>

            <UiNavMobile>

            </UiNavMobile>
        </template>
    </UiNavDesktopLayout>
</template>