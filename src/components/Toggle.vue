<template>
    <div class="inline-flex">
        <input
            :id="`toggle-${_uid}`"
            type="checkbox"
            role="switch"
            class="hidden peer"
            :disabled="disabled"
            :checked="value"
            @input="$emit('input', Boolean($event.target.checked))"
        />
        <label
            :for="`toggle-${_uid}`"
            class="relative inline-block h-[25px] w-[40px] rounded-full cursor-pointer transition-colors ease-in-out duration-200 peer-checked:bg-sunny-400 peer-checked:before:translate-x-4 before:absolute before:top-1/2 before:left-[3px] before:pointer-events-none before:inline-block before:w-[18px] before:h-[18px] before:rounded-full before:bg-white before:shadow-low before:transform before:transition before:ease-in-out before:duration-200 before:translate-x-0 before:-translate-y-1/2"
            :class="[disabled ? 'bg-gray-500/30' : 'bg-gray-500']"
            :style="{ 'filter: drop-shadow(0 2px 10px rgba(255, 195, 93, 0.4))': value }"
            tabindex="0"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        }
    }
}
</script>