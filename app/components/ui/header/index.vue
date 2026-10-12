<template>
    <header class="flex px-4 py-2 items-center h-16 bg-base-200">
        <ul class="flex gap-3 items-center">
            <slot name="context-tools"></slot>
            <li>
                <NuxtLink class="flex items-center gap-3 text-base-content">
                    <NuxtImg src="/logo.png" width="36" height="40"></NuxtImg>
                    <h1 class="font-semibold text-lg">โรงเรียนแก้งคร้อวิทยา</h1>
                </NuxtLink>
            </li>
            <slot name="left-tools"></slot>
        </ul>
        <ul>
            <slot name="right-tools"></slot>
        </ul>
    </header>
</template>
