<template>
    <header class="flex px-4 py-2 items-center h-16 bg-base-200">
        <ul class="flex">
            <slot name="context-tools"></slot>
            <li>
                <NuxtLink>
                    <NuxtImg src="/logo.png" width="36" height="40"></NuxtImg>
                </NuxtLink>
            </li>
            <slot name="left-tools"></slot>
        </ul>
        <ul>
            <slot name="right-tools"></slot>
        </ul>
    </header>
</template>